const stocks = [
  {
    code: "600900",
    name: "长江电力",
    mode: ["intraday", "swing"],
    status: "good",
    price: 28.98,
    amount: 65.7,
    volRatio: 1.69,
    tags: ["电力中军", "尾盘上移", "放量"],
    fit: "电力板块今日主力净流入居前，长江电力作为板块中军，收盘在 5/10/20 日线上方，尾盘 28.87 到 28.98，承接较稳。",
    risk: "偏权重稳健股，次日弹性通常弱于小票；若电力板块明天无延续，冲高空间会受限。",
    action: "次日看电力延续，冲高不强先兑现",
    trend: [26.6, 26.8, 27.0, 27.1, 27.3, 27.5, 27.8, 28.0, 28.2, 28.4, 28.6, 28.8, 29.0],
    tech: "收盘 28.98，MA5 28.01、MA10 27.56、MA20 26.76，5/10 日线抬升，日线属于强趋势确认，不是严格伏龙开盘形态。",
    overseas: "电力/公用事业方向。今天行业资金流入强，属于板块先行后从中军里选票的样本。",
    margin: "成交额约 65.7 亿，量比近 20 日均量约 1.69 倍，尾盘分时重心继续上移。",
    capital: "今日电力板块主力净流入约 31.13 亿，公用事业约 29.70 亿；明天必须确认板块资金延续。",
    tips: ["先看电力板块是否继续排前。", "若高开后不放量延续，上午先兑现。", "下午若回踩不破 5/10 日线，可继续观察。"],
  },
  {
    code: "601857",
    name: "中国石油",
    mode: ["intraday", "swing"],
    status: "good",
    price: 11.01,
    amount: 41.0,
    volRatio: 2.07,
    tags: ["石油石化", "低价中军", "放量强"],
    fit: "石油石化今日主力净流入靠前，中国石油作为板块中军，收盘 11.01，涨幅 7.00%，尾盘 10.89 到 11.01。",
    risk: "大阳后次日容易分化，若油气和中字头不延续，追高风险会增加。",
    action: "只做板块继续强时的回踩承接",
    trend: [9.3, 9.4, 9.5, 9.6, 9.7, 9.8, 10.0, 10.1, 10.3, 10.5, 10.7, 10.9, 11.0],
    tech: "收盘 11.01，MA5 10.26、MA10 9.80、MA20 9.36，5/10 日线平滑上移，当日放量约 2.07 倍。",
    overseas: "石油石化/中字头方向。今天板块资金有流入，个股兼具低价和辨识度。",
    margin: "成交额约 41.0 亿，尾盘分时重心上移，属于量价共振型，但不是严格伏龙开盘形态。",
    capital: "石油石化今日主力净流入约 14.79 亿，中字头概念也为正流入；明天看延续。",
    tips: ["大幅高开不追。", "若回踩 VWAP 不破再观察。", "次日上午冲高缩量先兑现。"],
  },
  {
    code: "601088",
    name: "中国神华",
    mode: ["intraday", "swing"],
    status: "good",
    price: 46.14,
    amount: 25.9,
    volRatio: 1.32,
    tags: ["煤炭龙头", "中军", "趋势强"],
    fit: "煤炭板块今日资金为正，中国神华作为煤炭龙头，收盘站上 5/10/20 日线，尾盘 45.83 到 46.14。",
    risk: "煤炭周期股受商品和红利风格影响，若板块不延续，次日可能冲高回落。",
    action: "回踩不破 5 日线才看",
    trend: [40.5, 41.0, 41.6, 42.1, 42.7, 43.1, 43.6, 44.0, 44.4, 44.9, 45.3, 45.8, 46.1],
    tech: "收盘 46.14，MA5 44.09、MA10 42.72、MA20 40.92，量比约 1.32，趋势更偏波段中军。",
    overseas: "煤炭/高股息/能源方向。板块今日涨幅和主力流入为正，符合先看板块。",
    margin: "成交额约 25.9 亿，尾盘继续抬升，量价健康但并非极致放量。",
    capital: "煤炭板块今日主力净流入约 6.57 亿；明天需看煤炭和高股息方向是否继续。",
    tips: ["不追大幅高开。", "板块弱于大盘时降级。", "次日若冲高不放量，先卖。"],
  },
  {
    code: "600021",
    name: "上海电力",
    mode: ["intraday", "swing"],
    status: "wait",
    price: 16.35,
    amount: 24.1,
    volRatio: 3.16,
    tags: ["电力弹性", "放量", "尾盘强"],
    fit: "电力板块强势，上海电力今日放量明显，收盘 16.35，尾盘 16.16 到 16.35，弹性强于板块中军。",
    risk: "涨幅接近 10%，次日容易高开分歧；且仍在 MA60 下方附近，不能重仓追。",
    action: "只等回踩承接，不追高开",
    trend: [14.1, 14.2, 14.3, 14.4, 14.5, 14.7, 14.9, 15.1, 15.3, 15.6, 15.9, 16.2, 16.4],
    tech: "收盘 16.35，MA5 14.57、MA10 14.20、MA20 14.69，量比约 3.16，尾盘承接强。",
    overseas: "电力/公用事业方向的弹性票。符合板块资金先行，但不如长江电力稳。",
    margin: "成交额约 24.1 亿，量能明显放大；若明天放量长上影，要剔除。",
    capital: "电力板块今日主力净流入约 31.13 亿，是它入选的第一条件。",
    tips: ["高开太多不追。", "看 5 日线和分时均线承接。", "若板块分化，优先保留中军，弹性票先卖。"],
  },
  {
    code: "601225",
    name: "陕西煤业",
    mode: ["intraday", "swing"],
    status: "good",
    price: 25.00,
    amount: 20.5,
    volRatio: 1.54,
    tags: ["煤炭中军", "约25元", "量价稳"],
    fit: "煤炭板块资金为正，陕西煤业价格适中，收盘 25.00，尾盘 24.60 到 25.00，承接较好。",
    risk: "弹性不如小煤炭股，但更接近中军；若煤炭板块冲高回落，需要先兑现。",
    action: "适合低吸型延续观察",
    trend: [22.3, 22.6, 22.9, 23.2, 23.5, 23.8, 24.0, 24.2, 24.4, 24.6, 24.8, 24.9, 25.0],
    tech: "收盘 25.00，MA5 24.47、MA10 23.84、MA20 22.56，量比约 1.54，符合趋势强票。",
    overseas: "煤炭/高股息方向，作为板块中军观察。",
    margin: "成交额约 20.5 亿，尾盘重心抬升；若次日缩量冲高，先兑现。",
    capital: "煤炭板块今日净流入为正，次日延续性是关键。",
    tips: ["只在煤炭板块延续时看。", "回踩 5 日线不破可观察。", "板块龙头转弱时先卖。"],
  },
  {
    code: "600887",
    name: "伊利股份",
    mode: ["intraday", "swing"],
    status: "wait",
    price: 27.00,
    amount: 27.0,
    volRatio: 1.69,
    tags: ["食品饮料", "中军", "尾盘稳"],
    fit: "食品饮料今日主力净流入为正，伊利股份作为消费中军，收盘 27.00，尾盘 26.86 到 27.00。",
    risk: "消费方向持续性通常弱于强周期，若板块次日不延续，短线空间有限。",
    action: "只做消费板块延续",
    trend: [24.8, 25.0, 25.2, 25.4, 25.6, 25.8, 26.0, 26.2, 26.4, 26.6, 26.8, 26.9, 27.0],
    tech: "收盘 27.00，MA5 26.07、MA10 25.54、MA20 25.01，量比约 1.69，日线重心上移。",
    overseas: "食品饮料/消费防守方向。作为板块中军，需看消费白马是否继续回流。",
    margin: "成交额约 27.0 亿，尾盘承接稳定，量能配合较好。",
    capital: "食品饮料行业今日主力净流入约 2.41 亿，酿酒概念约 9.93 亿，对消费方向有支持。",
    tips: ["先看食品饮料和酿酒概念是否延续。", "不适合高开追。", "若次日上午冲高无量，先卖。"],
  },
  {
    code: "601699",
    name: "潞安环能",
    mode: ["intraday", "swing"],
    status: "wait",
    price: 15.61,
    amount: 7.5,
    volRatio: 1.36,
    tags: ["煤炭弹性", "低价", "尾盘强"],
    fit: "煤炭方向弹性票，收盘 15.61，尾盘 15.32 到 15.61，价格适中，放量后承接较强。",
    risk: "不是板块最大中军，弹性强但分歧也会更大；若煤炭明天分化，先出。",
    action: "只做板块延续下的弹性",
    trend: [14.4, 14.5, 14.6, 14.8, 14.9, 15.0, 15.1, 15.2, 15.3, 15.4, 15.5, 15.6, 15.6],
    tech: "收盘 15.61，MA5 15.03、MA10 14.94、MA20 14.97，量比约 1.36，尾盘上移。",
    overseas: "煤炭/周期弹性方向。适合在板块确定延续时观察。",
    margin: "成交额约 7.5 亿，量能不算特别大，仓位应低于板块中军。",
    capital: "煤炭板块资金为正，但个股需明天继续看主力承接。",
    tips: ["不要脱离煤炭板块单独做。", "次日若高开低走，先卖。", "跌回 20 日线下方剔除。"],
  },
  {
    code: "000543",
    name: "皖能电力",
    mode: ["intraday", "swing"],
    status: "wait",
    price: 8.24,
    amount: 0,
    volRatio: 0,
    tags: ["00电力", "低价弹性", "近高收"],
    fit: "电力板块今日资金流入，皖能电力收盘 8.24，涨幅约 7.15%，收盘接近日内高位，符合低价电力弹性观察方向。",
    risk: "00 开头电力弹性强但分歧也快；若明天电力板块不能延续，容易高开回落。",
    action: "只在电力继续强、回踩承接不破均价线时看",
    trend: [7.45, 7.5, 7.55, 7.58, 7.62, 7.68, 7.75, 7.84, 7.95, 8.05, 8.12, 8.20, 8.24],
    tech: "收盘接近日内高位，符合强势尾盘候选；需要明天复核 5/10 日线是否继续平滑上移。",
    overseas: "电力/公用事业方向，属于强板块里的低价弹性候选，不是权重中军。",
    margin: "公开页面可见成交活跃，但成交额和尾盘承接仍需盘前/盘中在行情软件二次确认。",
    capital: "入选前提来自电力板块资金流入；若板块排名掉出前列，降为观察。",
    tips: ["先看电力板块是否继续排前。", "高开太多不追，等回踩承接。", "若跌破分时均价线并放量，剔除。"],
  },
  {
    code: "000539",
    name: "粤电力A",
    mode: ["intraday", "swing"],
    status: "wait",
    price: 5.84,
    amount: 0,
    volRatio: 0,
    tags: ["00电力", "低价", "近高收"],
    fit: "电力板块今日强，粤电力A收盘 5.84，接近日内高位，属于低价电力方向的延续观察票。",
    risk: "低价票容易受情绪影响，若次日高开后承接弱，短线回撤会快。",
    action: "只看板块延续下的低吸承接，不追高",
    trend: [5.18, 5.23, 5.28, 5.33, 5.38, 5.45, 5.52, 5.58, 5.64, 5.70, 5.76, 5.81, 5.84],
    tech: "收盘接近日内高位，日内强度够；是否符合标准伏龙，还要在行情软件复核 5/10/20 日均线位置。",
    overseas: "电力/绿色电力/国企改革概念，适合作为 00 开头低价弹性观察样本。",
    margin: "价格低、弹性高，但成交额和换手需要明天开盘后确认，不能只看收盘涨幅。",
    capital: "电力板块资金流入是核心前提；板块若退潮，低价弹性票优先剔除。",
    tips: ["只跟随电力主线，不单独做。", "开盘急冲无承接不追。", "尾盘重心不上移就不纳入买点。"],
  },
  {
    code: "600600",
    name: "青岛啤酒",
    mode: ["swing", "watch"],
    status: "wait",
    price: 54.05,
    amount: 5.7,
    volRatio: 1.65,
    tags: ["消费中军", "尾盘稳", "非主线"],
    fit: "消费/酿酒概念今日有资金流入，青岛啤酒价格 54.05，尾盘 53.90 到 54.05，形态稳。",
    risk: "消费不是今天最强主线，弹性弱于电力、煤炭、石油；更偏观察。",
    action: "观察，不作为首选",
    trend: [50.9, 51.2, 51.5, 51.9, 52.2, 52.5, 52.8, 53.0, 53.3, 53.6, 53.8, 54.0, 54.1],
    tech: "收盘 54.05，MA5 52.70、MA10 51.85、MA20 51.17，量比约 1.65，趋势修复明显。",
    overseas: "食品饮料/啤酒/消费方向。只有消费资金继续流入时才提高优先级。",
    margin: "成交额约 5.7 亿，量能较小，属于波段观察而非超短线核心。",
    capital: "酿酒概念今日主力净流入约 9.93 亿，是其入选的板块条件。",
    tips: ["只作为消费方向观察。", "成交额不足时不重仓。", "若明天消费不延续，移出超短池。"],
  },
];

const checklist = [
  "板块/概念当日资金流入",
  "题材次日有延续逻辑或催化",
  "个股是板块中军或龙头",
  "日线不跌破 20 日线，5/10 日线平滑上移",
  "尾盘分时重心上移且承接强",
  "当日温和放量，避免放量长上影",
];

const screenMeta = {
  date: "2026-07-20 收盘",
  title: "今日收盘人工观察池",
  note: "严格“开盘在 5/10 日线下、30/60 日线上，收盘重新站回 5/10 日线”的伏龙形态，本次未筛到可靠样本；当前池子采用你的实盘口径：先板块资金流入，再选中军/龙头或低价弹性，最后等尾盘承接确认。",
  boards: "主线参考：电力/公用事业、煤炭、石油石化；消费只作次级观察。",
};

const state = {
  mode: "intraday",
  selected: stocks[0].code,
};

const els = {
  trendCards: document.querySelector("#trendCards"),
  stockTable: document.querySelector("#stockTable"),
  searchInput: document.querySelector("#searchInput"),
  smoothOnly: document.querySelector("#smoothOnly"),
  liquidOnly: document.querySelector("#liquidOnly"),
  riskCleanOnly: document.querySelector("#riskCleanOnly"),
  detailName: document.querySelector("#detailName"),
  detailIntro: document.querySelector("#detailIntro"),
  detailTech: document.querySelector("#detailTech"),
  detailOverseas: document.querySelector("#detailOverseas"),
  detailMargin: document.querySelector("#detailMargin"),
  detailCapital: document.querySelector("#detailCapital"),
  detailTips: document.querySelector("#detailTips"),
  buyChecklist: document.querySelector("#buyChecklist"),
};

function getVisibleStocks() {
  const query = els.searchInput.value.trim();
  return stocks.filter((stock) => {
    if (!stock.mode.includes(state.mode)) return false;
    if (query && !`${stock.code}${stock.name}`.includes(query)) return false;
    if (els.smoothOnly.checked && stock.status === "risk") return false;
    if (els.liquidOnly.checked && stock.amount > 0 && stock.amount < 8) return false;
    if (els.riskCleanOnly.checked && stock.status !== "good") return false;
    return true;
  });
}

function statusLabel(status) {
  if (status === "good") return "承接良好";
  if (status === "wait") return "等待确认";
  return "高风险";
}

function statusClass(status) {
  if (status === "good") return "good";
  if (status === "wait") return "wait";
  return "risk";
}

function renderTrendCards() {
  const visible = getVisibleStocks();
  els.trendCards.innerHTML = visible
    .map(
      (stock) => `
        <article class="trend-card ${stock.code === state.selected ? "active" : ""}" data-code="${stock.code}">
          <div class="stock-line">
            <div>
              <div class="stock-code">${stock.code}</div>
              <div class="stock-name">${stock.name}</div>
            </div>
            <span class="badge ${statusClass(stock.status)}">${statusLabel(stock.status)}</span>
          </div>
          <canvas class="spark" width="360" height="120" data-code="${stock.code}" aria-label="${stock.name}趋势图"></canvas>
          <div class="micro-tags">${stock.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </article>
      `,
    )
    .join("");

  document.querySelectorAll(".trend-card").forEach((card) => {
    card.addEventListener("click", () => selectStock(card.dataset.code));
  });

  drawAllSparks();
}

function drawAllSparks() {
  document.querySelectorAll("canvas.spark").forEach((canvas) => {
    const stock = stocks.find((item) => item.code === canvas.dataset.code);
    drawSpark(canvas, stock.trend, stock.status);
  });
}

function drawSpark(canvas, values, status) {
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const pad = 16;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;

  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = "#d9e0e6";
  ctx.lineWidth = 1;
  for (let i = 1; i <= 3; i += 1) {
    const y = (height / 4) * i;
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(width - pad, y);
    ctx.stroke();
  }

  const color = status === "good" ? "#16845c" : status === "wait" ? "#9d6a12" : "#b43737";
  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  values.forEach((value, index) => {
    const x = pad + (index / (values.length - 1)) * (width - pad * 2);
    const y = height - pad - ((value - min) / span) * (height - pad * 2);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  const last = values[values.length - 1];
  const x = width - pad;
  const y = height - pad - ((last - min) / span) * (height - pad * 2);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fill();
}

function renderTable() {
  const visible = getVisibleStocks();
  els.stockTable.innerHTML = visible
    .map(
      (stock) => `
        <tr data-code="${stock.code}" class="${stock.code === state.selected ? "active-row" : ""}">
          <td><strong>${stock.code}</strong></td>
          <td>${stock.name}</td>
          <td class="reason-cell">${stock.fit}</td>
          <td class="risk-cell">${stock.risk}</td>
          <td class="action-cell">${stock.action}</td>
        </tr>
      `,
    )
    .join("");

  document.querySelectorAll("#stockTable tr").forEach((row) => {
    row.addEventListener("click", () => selectStock(row.dataset.code));
  });
}

function renderDetail() {
  const stock = stocks.find((item) => item.code === state.selected) || getVisibleStocks()[0] || stocks[0];
  state.selected = stock.code;
  els.detailName.textContent = `${stock.code} ${stock.name}`;
  els.detailIntro.textContent = stock.fit;
  els.detailTech.textContent = stock.tech;
  els.detailOverseas.textContent = stock.overseas;
  els.detailMargin.textContent = stock.margin;
  els.detailCapital.textContent = stock.capital;
  els.detailTips.innerHTML = stock.tips.map((tip) => `<li>${tip}</li>`).join("");
}

function renderChecklist() {
  els.buyChecklist.innerHTML = checklist
    .map((item, index) => {
      const id = `manual-check-${index}`;
      const saved = localStorage.getItem(id) === "true";
      return `
        <label class="check-item">
          <input type="checkbox" data-check-id="${id}" ${saved ? "checked" : ""} />
          <span>${item}</span>
        </label>
      `;
    })
    .join("");

  els.buyChecklist.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      localStorage.setItem(input.dataset.checkId, String(input.checked));
    });
  });
}

function renderScreenMeta() {
  const meta = document.querySelector("#screenMetaText");
  const tableMeta = document.querySelector("#tableMetaText");
  const value = `${screenMeta.date} · ${screenMeta.boards} · ${screenMeta.note}`;
  if (meta) meta.textContent = value;
  if (tableMeta) tableMeta.textContent = `${screenMeta.title} · 数据不是实时接口，盘中要用行情软件复核。`;
}

function selectStock(code) {
  state.selected = code;
  renderTrendCards();
  renderTable();
  renderDetail();
}

function renderAll() {
  const visible = getVisibleStocks();
  if (!visible.some((stock) => stock.code === state.selected) && visible[0]) {
    state.selected = visible[0].code;
  }
  renderTrendCards();
  renderTable();
  renderDetail();
  if (window.lucide) window.lucide.createIcons();
}

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.mode = button.dataset.mode;
    renderAll();
  });
});

[els.searchInput, els.smoothOnly, els.liquidOnly, els.riskCleanOnly].forEach((input) => {
  input.addEventListener("input", renderAll);
  input.addEventListener("change", renderAll);
});

document.querySelector("#refreshView").addEventListener("click", () => {
  state.mode = "intraday";
  document.querySelectorAll(".segment").forEach((item) => {
    item.classList.toggle("active", item.dataset.mode === "intraday");
  });
  els.searchInput.value = "";
  els.smoothOnly.checked = true;
  els.liquidOnly.checked = true;
  els.riskCleanOnly.checked = false;
  state.selected = stocks[0].code;
  renderAll();
});

renderChecklist();
renderScreenMeta();
renderAll();
