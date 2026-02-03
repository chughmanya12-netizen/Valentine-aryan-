// Typing effect
const text = "Will you be my Valentine? 💌";
let i = 0;
const speed = 70;
const p = document.getElementById("type");

function typeText() {
  if (i < text.length) {
    p.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, speed);
  }
}
typeText();

// No button never works
const noBtn = document.getElementById("no");

function moveButton() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

// Yes button celebration
document.getElementById("yes").addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align:center;">
      <h1 style="color:#ff5d8f;">YAY ARYAN 💖</h1>
      <p>You will just never have an option to say no baby 🌷</p>
    </div>
  `;
});

// Floating hearts
const hearts = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 300);