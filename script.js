// Nanti kalau sudah bisa fetch data lokal/db, kita ganti
document.addEventListener("DOMContentLoaded", () => {
  const data = [
    { pair: "EURUSD", entry: 1.1120, sl: 1.1100, tp: 1.1180, result: "+60 pips" },
    { pair: "XAUUSD", entry: 2320, sl: 2310, tp: 2340, result: "+200 pips" },
  ];

  const list = document.getElementById("entry-data");
  data.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.pair} — Entry: ${item.entry}, SL: ${item.sl}, TP: ${item.tp}, Hasil: ${item.result}`;
    list.appendChild(li);
  });
});