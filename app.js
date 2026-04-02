let data = [];
let currentIndex = 0;

async function loadData() {
  const res = await fetch("./data/katsuta-tsuchiura-up.json");
  const json = await res.json();

  data = json;

  document.getElementById("status").innerText = "読み込み完了";
  showQuestion();
}

function showQuestion() {
  if (!data || data.length === 0) {
    document.getElementById("question").innerText = "問題がありません";
    document.getElementById("counter").innerText = "0 / 0";
    return;
  }

  const segment = data[currentIndex];

  document.getElementById("segment-name").innerText =
    `${segment.fromStation} → ${segment.toStation}`;

  document.getElementById("counter").innerText =
    `${currentIndex + 1} / ${data.length}`;

  document.getElementById("question").innerText =
    `${segment.fromStation} → ${segment.toStation} の区間の制限速度は？`;

  document.getElementById("answer").style.display = "none";
  document.getElementById("answer").innerHTML = "";
}

function formatList(arr) {
  if (!arr || arr.length === 0) return "-";
  return arr.join(" → ");
}

function showAnswer() {
  const segment = data[currentIndex];

  const e531 = formatList(segment.e531);
  const e657 = formatList(segment.e657);
  const note = segment.note || "-";

  let html = `
    <div><strong>E531：</strong>${e531}</div>
    <div><strong>E657：</strong>${e657}</div>
    <div style="margin-top:10px;"><strong>付記：</strong>${note}</div>
  `;

  if (segment.image) {
    html += `
      <img src="${segment.image}" style="width:100%; margin-top:12px; border-radius:12px;">
    `;
  }

  document.getElementById("answer").innerHTML = html;
  document.getElementById("answer").style.display = "block";
}

function nextQuestion() {
  if (currentIndex < data.length - 1) {
    currentIndex++;
    showQuestion();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  }
}

window.onload = loadData;