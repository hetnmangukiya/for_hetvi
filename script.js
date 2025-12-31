function show(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
  });

  const target = document.getElementById(id);
  target.classList.add('active');

  // soft glow effect
  target.style.boxShadow = "0 0 30px rgba(255,150,180,0.6)";
  setTimeout(() => {
    target.style.boxShadow = "none";
  }, 600);
}

/* floating hearts generator */
const heartContainer = document.createElement("div");
heartContainer.className = "hearts";
document.body.appendChild(heartContainer);

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";
  heart.style.fontSize = (14 + Math.random() * 20) + "px";

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}, 700);
