
window.addEventListener("load", () => {
  const videos = document.querySelectorAll(".autoplay-video");

  videos.forEach(video => {
    video.muted = true;           // Required for autoplay
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;

    video.load();

    video.play().catch(err => {
      console.warn("Autoplay failed for one of the videos:", err);
    });
  });
});






const stack_cards = document.querySelectorAll('.stack-card');
let currentIndex = 0;

function updateStack() {
  stack_cards.forEach((card, i) => {
    const offset = (i - currentIndex + stack_cards.length) % stack_cards.length;

    if(offset === 0){
      // center card
      card.style.transform = "translateX(-50%) scale(1)";
      card.style.zIndex = 10;
      card.style.opacity = 1;
    } else if(offset === 1){
      // right peek
      card.style.transform = "translateX(40%) scale(0.85)";
      card.style.zIndex = 5;
      card.style.opacity = 0.8;
    } else if(offset === stack_cards.length -1){
      // left peek
      card.style.transform = "translateX(-140%) scale(0.85)";
      card.style.zIndex = 5;
      card.style.opacity = 0.9;
    } else if(offset === 2){
      // second right
      card.style.transform = "translateX(120%) scale(0.75)";
      card.style.zIndex = 3;
      card.style.opacity = 0.5;
    } else if(offset === stack_cards.length -2){
      // second left
      card.style.transform = "translateX(-220%) scale(0.75)";
      card.style.zIndex = 3;
      card.style.opacity = 0.5;
    } else {
      // hidden back
      card.style.transform = "translateX(-50%) scale(0.6)";
      card.style.zIndex = 1;
      card.style.opacity = 0;
    }
  });
}

updateStack();

// Rotate every 2.5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % stack_cards.length;
  updateStack();
}, 2500);
