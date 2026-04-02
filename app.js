const data = [
  {
    fromStation: "勝田",
    toStation: "水戸",
    e531: [105, 105, 125, 90],
    e657: [125, 125, 130, 95],
    note: "",
    image: "勝田水戸1.jpg"
  },
  {
    fromStation: "水戸",
    toStation: "赤塚",
    e531: [105, 90, 105],
    e657: [125, 100, 125, 130],
    note: "",
    image: "水戸赤塚1.jpg"
  },
  {
    fromStation: "赤塚",
    toStation: "内原",
    e531: [125, 105],
    e657: [125, 125, 120],
    note: "",
    image: "赤塚内原1.jpg"
  },
  {
    fromStation: "内原",
    toStation: "友部",
    e531: [105, 110, 110],
    e657: [125, 130, 130],
    note: "",
    image: "内原友部1.jpg"
  },
  {
    fromStation: "友部",
    toStation: "岩間",
    e531: [80, 95, 115, 105, 90],
    e657: [80, 95, 130, 115, 100],
    note: "",
    image: "友部岩間1.jpg"
  },
  {
    fromStation: "岩間",
    toStation: "羽鳥",
    e531: [95, 100],
    e657: [110, 100],
    note: "",
    image: "岩間羽鳥1.jpg"
  },
  {
    fromStation: "羽鳥",
    toStation: "石岡",
    e531: [105, 105, 100],
    e657: [125, 125, 110],
    note: "",
    image: "羽鳥石岡1.jpg"
  },
  {
    fromStation: "石岡",
    toStation: "高浜",
    e531: [105, 105, 100],
    e657: [105, 125, 120],
    note: "",
    image: "石岡高浜1.jpg"
  },
  {
    fromStation: "高浜",
    toStation: "神立",
    e531: [95, 110],
    e657: [110, 130],
    note: "",
    image: "高浜神立1.jpg"
  },
  {
    fromStation: "神立",
    toStation: "土浦",
    e531: [125, 95, 105, 115, 100],
    e657: [130, 110, 125, 115, 100],
    note: "",
    image: "神立土浦1.jpg"
  },
  {
    fromStation: "土浦",
    toStation: "荒川沖",
    e531: [95, 100, 95, 105, 115],
    e657: [105, 120, 110, 125, 130],
    note: "",
    image: "土浦荒川沖1.jpg"
  },
  {
    fromStation: "荒川沖",
    toStation: "ひたち野うしく",
    e531: [110],
    e657: [120],
    note: "",
    image: "荒川沖ひたち野うしく1.jpg"
  },
  {
    fromStation: "ひたち野うしく",
    toStation: "牛久",
    e531: [110],
    e657: [130],
    note: "",
    image: "ひたちのうしく牛久1.jpg"
  },
  {
    fromStation: "牛久",
    toStation: "龍ヶ崎市",
    e531: [110, 100],
    e657: [125, 105],
    note: "",
    image: "牛久龍ヶ崎市1.jpg"
  },
  {
    fromStation: "龍ヶ崎市",
    toStation: "藤代",
    e531: [90, 110, 90],
    e657: [100, 130, 100],
    note: "",
    image: "龍ヶ崎市藤代1.jpg"
  },
  {
    fromStation: "藤代",
    toStation: "取手",
    e531: [115, 115, 95, 80],
    e657: [130, 130, 105, 90],
    note: "",
    image: "藤代取手1.jpg"
  },
  {
    fromStation: "取手",
    toStation: "天王台",
    e531: [95],
    e657: [110],
    note: "",
    image: "取手天王台1.jpg"
  },
  {
    fromStation: "天王台",
    toStation: "我孫子",
    e531: [],
    e657: [],
    note: "",
    image: "天王台我孫子1.jpg"
  },
  {
    fromStation: "我孫子",
    toStation: "柏",
    e531: [105, 95],
    e657: [125, 95],
    note: "",
    image: "我孫子柏1.jpg"
  },
  {
    fromStation: "柏",
    toStation: "松戸",
    e531: [120, 105, 105],
    e657: [130, 125, 125],
    note: "",
    image: "柏松戸1.jpg"
  },
  {
    fromStation: "松戸",
    toStation: "北千住",
    e531: [105, 105, 110, 90, 95, 105, 105, 90, 95, 115, 105],
    e657: [125, 125, 120, 90, 110, 120, 125, 100, 110, 115, 105],
    note: "",
    image: "松戸北千住1.jpg"
  },
  {
    fromStation: "北千住",
    toStation: "南千住",
    e531: [105, 105],
    e657: [105, 105],
    note: "",
    image: "北千住南千住1.jpg"
  },
  {
    fromStation: "南千住",
    toStation: "三河島",
    e531: [70, 95],
    e657: [70, 95],
    note: "",
    image: "南千住三河島1.jpg"
  },
  {
    fromStation: "三河島",
    toStation: "日暮里",
    e531: [80, 65, 85],
    e657: [80, 65, 85],
    note: "",
    image: "三河島日暮里1.jpg"
  },
  {
    fromStation: "日暮里",
    toStation: "上野",
    e531: [70, 55, 50],
    e657: [70, 55, 50],
    note: "未確定の続きがあればあとで修正",
    image: "日暮里上野1.jpg"
  }
];

let currentIndex = 0;
let reviewMode = false;
let reviewList = [];
let missedList = [];

function formatList(arr) {
  if (!arr || arr.length === 0) return "-";
  return arr.join(" → ");
}

function getCurrentList() {
  return reviewMode ? reviewList : data;
}

function getCurrentSegment() {
  const list = getCurrentList();
  if (!list || list.length === 0) return null;
  return list[currentIndex];
}

function updateReviewButton() {
  const reviewBtn = document.getElementById("review-btn");
  if (reviewBtn) {
    reviewBtn.innerText = reviewMode ? "通常モードに戻る" : "間違えた区間だけ復習";
  }
}

function showQuestion() {
  const list = getCurrentList();

  if (!list || list.length === 0) {
    document.getElementById("status").innerText = reviewMode ? "復習対象なし" : "データなし";
    document.getElementById("segment-name").innerText = "区間";
    document.getElementById("counter").innerText = "0 / 0";
    document.getElementById("question").innerText = reviewMode
      ? "間違えた区間はまだありません"
      : "問題がありません";
    document.getElementById("answer").style.display = "none";
    document.getElementById("answer").innerHTML = "";
    updateReviewButton();
    return;
  }

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex >= list.length) currentIndex = list.length - 1;

  const segment = list[currentIndex];

  document.getElementById("status").innerText = reviewMode ? "復習モード" : "読み込み完了";
  document.getElementById("segment-name").innerText =
    `${segment.fromStation} → ${segment.toStation}`;
  document.getElementById("counter").innerText =
    `${currentIndex + 1} / ${list.length}`;
  document.getElementById("question").innerText =
    `${segment.fromStation} → ${segment.toStation} の区間の制限速度は？`;

  document.getElementById("answer").style.display = "none";
  document.getElementById("answer").innerHTML = "";

  updateReviewButton();
}

function showAnswer() {
  const segment = getCurrentSegment();
  if (!segment) return;

  const e531 = formatList(segment.e531);
  const e657 = formatList(segment.e657);
  const note = segment.note && segment.note.trim() !== "" ? segment.note : "-";

  let html = `
    <div><strong>E531：</strong>${e531}</div>
    <div><strong>E657：</strong>${e657}</div>
    <div><strong>付記：</strong>${note}</div>
    <div style="margin-top:12px;">
      <button onclick="closeAnswer()">閉じる</button>
    </div>
  `;

  if (segment.image) {
    html += `<img src="${encodeURI(segment.image)}" alt="${segment.fromStation}→${segment.toStation}" style="width:100%; margin-top:16px; border-radius:12px;">`;
  }

  document.getElementById("answer").innerHTML = html;
  document.getElementById("answer").style.display = "block";
}

function closeAnswer() {
  document.getElementById("answer").style.display = "none";
}

function addMissedCurrent() {
  const segment = getCurrentSegment();
  if (!segment) return;

  const exists = missedList.some(item =>
    item.fromStation === segment.fromStation &&
    item.toStation === segment.toStation
  );

  if (!exists) {
    missedList.push(segment);
  }
}

function toggleReviewMode() {
  if (reviewMode) {
    reviewMode = false;
    currentIndex = 0;
    showQuestion();
    return;
  }

  if (missedList.length === 0) {
    alert("まだ間違えた区間がありません");
    return;
  }

  reviewList = [...missedList];
  reviewMode = true;
  currentIndex = 0;
  showQuestion();
}

function nextQuestion() {
  const list = getCurrentList();
  if (!list || list.length === 0) return;

  if (currentIndex < list.length - 1) {
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

document.addEventListener("DOMContentLoaded", function () {
  const answerBtn = document.querySelector('button[onclick="showAnswer()"]');
  if (answerBtn) {
    const reviewBtn = document.createElement("button");
    reviewBtn.id = "review-btn";
    reviewBtn.innerText = "間違えた区間だけ復習";
    reviewBtn.style.marginLeft = "8px";
    reviewBtn.onclick = toggleReviewMode;
    answerBtn.parentNode.insertBefore(reviewBtn, answerBtn.nextSibling);
  }

  const nextBtn = document.querySelector('button[onclick="nextQuestion()"]');
  if (nextBtn) {
    const missBtn = document.createElement("button");
    missBtn.innerText = "間違えた";
    missBtn.style.marginRight = "8px";
    missBtn.onclick = function () {
      addMissedCurrent();
      nextQuestion();
    };
    nextBtn.parentNode.insertBefore(missBtn, nextBtn);
  }

  showQuestion();
});
