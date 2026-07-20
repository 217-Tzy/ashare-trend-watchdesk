const stocks = [
  {
    code: "603259",
    name: "药明康德",
    mode: ["intraday", "swing"],
    status: "good",
    tags: ["高流动性", "MA20/60上方", "海外业务强"],
    fit: "CRO/CDMO 龙头，2026 Q1 收入和归母净利保持增长，短线成交额充足，适合做强趋势的隔日上午兑现观察。",
    risk: "地缘政策敏感，季度 Stock Connect 持股下降，不能只看基本面硬扛。",
    action: "午后回踩分时均线不破再看",
    trend: [82, 84, 86, 87, 89, 93, 98, 103, 106, 110, 116, 121, 123],
    tech: "价格位于 MA20、MA60、MA120 上方，短线弹性强；重点看下午回踩是否缩量、次日上午是否高开不回落。",
    overseas: "海外客户和全球医药外包业务占比较高，是外资容易持续关注的核心白马之一。",
    margin: "2025 年化学业务毛利率约 52%，业务结构里高毛利板块占比高。",
    capital: "HKEX 季度披露显示仍有北向持股，但 2026-06-30 较 2026-03-31 下降；近 10 日需用券商/东方财富日频榜复核。",
    tips: ["上午冲高但放量滞涨时优先兑现。", "下午买点只看缩量回踩后的再上均价线。", "政策新闻出现时降低仓位。"],
  },
  {
    code: "603893",
    name: "瑞芯微",
    mode: ["intraday", "swing"],
    status: "good",
    tags: ["芯片弹性", "均线顺排", "成交活跃"],
    fit: "AIoT/SoC 方向弹性足，2026 Q1 利润增长强，图形更接近平滑上移趋势。",
    risk: "估值较高，半导体板块波动大，追高回撤速度快。",
    action: "只做强承接，不追长上影",
    trend: [112, 118, 123, 131, 139, 145, 152, 164, 171, 182, 190, 198, 205],
    tech: "MA20、MA60、MA120 同向上移，但 ATR 偏高；适合等午后承接，而不是早盘情绪追入。",
    overseas: "2025 年境外收入约 44%，境外毛利率约 43%。",
    margin: "2025 年集成电路业务毛利率约 42%，芯片业务利润弹性较强。",
    capital: "季度北向仍有持股，但并非连续买入证明；盘前先看近 10 日陆股通持股变化。",
    tips: ["日内振幅过大时减少单笔仓位。", "若下午跌破分时均线且无法收回，放弃买点。", "板块龙头同步转弱时不单独硬做。"],
  },
  {
    code: "603129",
    name: "春风动力",
    mode: ["swing", "intraday"],
    status: "good",
    tags: ["海外收入高", "消费出海", "趋势稳定"],
    fit: "全球化动力运动装备龙头，北美和欧洲收入占比较高，日线趋势较顺。",
    risk: "出口消费周期、关税和汇率风险；流动性弱于大成交核心股。",
    action: "尾盘回流确认后再看",
    trend: [228, 231, 236, 239, 241, 245, 248, 252, 257, 264, 271, 278, 284],
    tech: "价格在多条中期均线上方，适合波段持有和短线滚动；不适合盘口太弱时硬做 T+1。",
    overseas: "2025 年北美洲收入约 35%，欧洲约 25%，海外合计明显高于国内。",
    margin: "2025 年全地形车毛利率约 32%，欧洲地区毛利率约 35%。",
    capital: "季度北向持股从 2026-03-31 到 2026-06-30 下降，短线必须额外看最近 10 日资金是否回补。",
    tips: ["优先等尾盘资金回流。", "若高开后不放量延续，上午先降仓。", "跌破 20 日线后转为观察。"],
  },
  {
    code: "603338",
    name: "浙江鼎力",
    mode: ["swing", "watch"],
    status: "wait",
    tags: ["海外占比高", "低估值", "MA60附近"],
    fit: "高空作业平台龙头，海外收入占比高，基本面匹配度强，适合趋势波段观察。",
    risk: "MA120 附近仍有压力，短线弹性不如热门赛道。",
    action: "突破后回踩不破再看",
    trend: [44, 45, 45.5, 46.8, 47.2, 48.1, 48.7, 49.4, 49.9, 50.3, 50.7, 51, 51.3],
    tech: "MA20、MA60 附近修复，但仍要看是否能稳定站上更长周期压力。",
    overseas: "2025 年中国境外收入约 75%，是海外业务强匹配标的。",
    margin: "2025 年高空作业平台毛利率约 34%，海外地区毛利率约 34%。",
    capital: "季度北向持股下降；如果近 10 日没有回补，只放观察池。",
    tips: ["不追早盘第一波。", "等待突破后缩量回踩确认。", "成交额不足时只观察不操作。"],
  },
  {
    code: "600298",
    name: "安琪酵母",
    mode: ["watch", "swing"],
    status: "wait",
    tags: ["稳健制造", "海外约四成", "低波动"],
    fit: "酵母发酵龙头，海外收入约四成，适合作为防守型波段观察。",
    risk: "毛利率不算特别高，短线弹性弱于强题材。",
    action: "只做低吸型波段",
    trend: [33, 33.6, 34.2, 34.8, 35.2, 36, 36.6, 36.8, 37.2, 37.8, 38.3, 38.8, 39.1],
    tech: "走势偏稳，波动小；更适合波段低吸，不适合快进快出追涨。",
    overseas: "2025 年国外收入约 41%，海外毛利率约 32%。",
    margin: "2025 年酵母及深加工产品毛利率约 32%。",
    capital: "季度北向持股小幅下降，近 10 日资金必须单独复核。",
    tips: ["只有沿 20 日线平滑上移才考虑。", "早盘冲高不强时不恋战。", "放量长上影后等待两天。"],
  },
  {
    code: "600660",
    name: "福耀玻璃",
    mode: ["watch"],
    status: "wait",
    tags: ["全球龙头", "外资重仓", "趋势修复"],
    fit: "汽车玻璃全球龙头，海外收入和护城河强，适合作为核心观察池。",
    risk: "2026 Q1 利润下滑，当前仍需观察 MA120 压力。",
    action: "等中期均线修复",
    trend: [58, 57, 56, 55.2, 54.6, 53.4, 52.8, 51.9, 51.5, 52.2, 53.1, 54, 54.6],
    tech: "短线有修复，但中期均线仍未完全转顺；适合观察，不适合强行归入超短线核心。",
    overseas: "2025 年国外收入约 46%，海外汽车玻璃业务具备全球竞争力。",
    margin: "2025 年汽车玻璃毛利率约 31%，国内地区毛利率更高。",
    capital: "北向长期持股比例高，但季度持股下降；需要看近 10 日是否恢复流入。",
    tips: ["不站稳中期均线前只看不追。", "适合放在白名单而非激进短线池。", "汽车链整体走弱时降低优先级。"],
  },
];

const checklist = [
  "上午冲高已卖出弱承接仓位",
  "下午回踩分时均线/VWAP 不破",
  "成交额充足且没有放量长上影",
  "日线在 MA20/MA60 上方或刚完成修复",
  "近 10 日陆股通/主力资金方向已人工复核",
];

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
    if (els.liquidOnly.checked && stock.code === "600298") return state.mode !== "intraday";
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
renderAll();
