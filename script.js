// Frases románticas que caen como lluvia
const frases = [
  "Bonita, que cada instante de hoy te regale un motivo nuevo para sonreír",
  "Flakita bonita"
];

// Emojis que flotan en clic/toque
const emojis = ["💖", "😍", "😘", "💘", "🥰", "🌹", "💕", "💞", "💓", "❤️‍🔥", "😈"];

// Contenedores
const frasesContainer = document.getElementById("frases-container");
const lluviaContainer = document.getElementById("lluvia-container");

// Función para crear frases que caen como la lluvia
function soltarFrase() {
  const frase = document.createElement("div");
  frase.className = "frase";
  frase.textContent = frases[Math.floor(Math.random() * frases.length)];
  frase.style.left = `${Math.random() * 100}vw`;

  frasesContainer.appendChild(frase);

  setTimeout(() => {
    frase.remove();
  }, 8000);
}

// Lluvia de frases cada 2 segundos
setInterval(() => {
  soltarFrase();
}, 2000);

// Solo emojis al tocar o hacer clic
function crearEmoji(x, y) {
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  const offsetX = (Math.random() - 0.5) * 80;
  const offsetY = (Math.random() - 0.5) * 40;

  emoji.style.left = `${x + offsetX}px`;
  emoji.style.top = `${y + offsetY}px`;

  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 2000);
}

// Eventos de clic y toque
document.body.addEventListener('click', (e) => {
  crearEmoji(e.clientX, e.clientY);
  iniciarSonidoLluvia();
});

document.body.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  if (touch) {
    crearEmoji(touch.clientX, touch.clientY);
    iniciarSonidoLluvia();
  }
});

// Reproducir sonido de lluvia tras interacción
const audio = document.getElementById('lluvia');
function iniciarSonidoLluvia() {
  if (audio.paused) {
    audio.play().catch(() => {});
  }
}

// Gotas visuales
function crearGota() {
  const gota = document.createElement('div');
  gota.className = 'gota';
  gota.style.left = `${Math.random() * 100}vw`;
  gota.style.animationDuration = `${0.5 + Math.random()}s`;
  gota.style.opacity = Math.random();

  lluviaContainer.appendChild(gota);

  setTimeout(() => {
    gota.remove();
  }, 1000);
}

// Lluvia constante
setInterval(() => {
  for (let i = 0; i < 10; i++) {
    crearGota();
  }
}, 100);



