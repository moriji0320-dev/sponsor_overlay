const sponsors = [
  "Xperia 1 VI で映像制作をもっと快適に",
  "Apex Legends で一緒に勝ちに行こう",
  "新作ゲームの最新情報をチェック",
  "次の配信もお楽しみに"
];

const message = document.getElementById("sponsor-message");
let currentIndex = 0;

function renderSponsor(index) {
  message.classList.remove("is-visible");

  window.setTimeout(() => {
    message.textContent = sponsors[index];
    message.classList.add("is-visible");
  }, 250);
}

function cycleSponsors() {
  currentIndex = (currentIndex + 1) % sponsors.length;
  renderSponsor(currentIndex);
}

renderSponsor(0);
window.setInterval(cycleSponsors, 3000);
