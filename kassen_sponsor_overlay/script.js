const sponsors = [
  "🏆 合戦スポンサー募集中！",
  "スポンサー①",
  "スポンサー②",
  "スポンサー③"
];

let i = 0;
const el = document.getElementById("スポンサー表示");

function showSponsor() {
  el.textContent = sponsors[i];
  i = (i + 1) % sponsors.length;
}

showSponsor();
setInterval(showSponsor, 3000);
