const emojis = ["😀", "😂", "😎", "😍", "😡", "🤖", "👻", "🐱"];
let score = 0;
let targetEmoji = "";

function startRound() {
  const game = document.getElementById("game");
  const target = document.getElementById("target");

  game.innerHTML = "";
  targetEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  target.textContent = targetEmoji;

  emojis.forEach(emoji => {
    const button = document.createElement("button");
    button.textContent = emoji;

    button.onclick = () => {
      if (emoji === targetEmoji) {
        score++;
        document.getElementById("score").textContent = score;
      }
      startRound();
    };

    game.appendChild(button);
  });
}

startRound();
