const stocks = [
  {
    code: "600031",
    name: "三一重工",
    mode: ["intraday", "swing"],
    status: "good",
    tags: ["约20元", "成交额足", "工程机械"],
    fit: "价格适中、成交活跃，工程机械和出口链有波段弹性，适合作为超短线主观察股。",
    risk: "周期股属性明显，基建、出口和人民币汇率预期变化会影响短线情绪。",
    action: "午后回踩均线不破再看",
    trend: [16.8, 17.1, 17.4, 17.7, 18.0, 18.2, 18.4, 18.6, 18.8, 19.0, 19.2, 19.4, 19.6],
    tech: "更适合看 MA20/MA60 平滑上移后的分时承接，上午放量冲高但不能继续上攻时优先兑现。",
    overseas: "工程机械出口占比和海外需求是重要观察点，属于制造出海方向。",
    margin: "毛利率受周期和产品结构影响，短线更看订单预期和板块资金。",
    capital: "盘前用券商或东方财富复核近 10 日陆股通和主力资金是否同步回流。",
    tips: ["下午缩量回踩不破分时均线才考虑。", "若板块龙头高开低走，不单独买入。", "次日上午冲高不封强时先卖。"],
  },
  {
    code: "000338",
    name: "潍柴动力",
    mode: ["intraday", "swing"],
    status: "good",
    tags: ["约25元", "00开头", "低价蓝筹"],
    fit: "价格适中、流动性好，动力总成和商用车链条有周期修复弹性。",
    risk: "趋势不强时容易横盘，超短线不能只因为价格低就买。",
    action: "板块共振时做强承接",
    trend: [22.1, 22.3, 22.5, 22.8, 23.0, 23.2, 23.4, 23.7, 23.9, 24.0, 24.1, 24.2, 24.3],
    tech: "适合看低位缓慢抬升，不适合追单日大阳后的次日高开。",
    overseas: "海外发动机、动力链和叉车业务是长期观察点。",
    margin: "制造业毛利率不算极高，重点看利润稳定性和现金流。",
    capital: "近 10 日资金方向必须盘前人工复核；若资金分歧大，只放观察。",
    tips: ["优先看量能温和放大。", "跌回 MA20 下方不做超短线。", "横盘缩量时等方向选择。"],
  },
  {
    code: "002241",
    name: "歌尔股份",
    mode: ["intraday", "swing"],
    status: "good",
    tags: ["约23元", "消费电子", "成交活跃"],
    fit: "价格适中、成交额较足，消费电子方向短线弹性强，适合下午承接型观察。",
    risk: "业绩和毛利率稳定性弱于部分高端制造股，追高回撤较快。",
    action: "只做消费电子板块强势日",
    trend: [19.8, 20.1, 20.4, 20.9, 21.2, 21.5, 21.8, 22.0, 22.3, 22.6, 22.8, 23.0, 23.2],
    tech: "适合做板块强势下的分时均线回踩，不适合早盘情绪拉升后下午回落的形态。",
    overseas: "消费电子客户链条具备全球化属性，但需关注订单波动。",
    margin: "毛利率不是强优势，短线主要看订单预期和资金强度。",
    capital: "盘前复核近 10 日主力资金和北向变化，资金转弱时不追。",
    tips: ["VR/消费电子板块同步强才提高优先级。", "长上影后至少观察一天。", "次日上午不延续就卖。"],
  },
  {
    code: "600406",
    name: "国电南瑞",
    mode: ["intraday", "swing"],
    status: "good",
    tags: ["约24元", "电网科技", "流动性好"],
    fit: "价格适中，电网自动化龙头，成交额足，适合在电力设备方向强势时做趋势观察。",
    risk: "估值不低，海外占比不是主要亮点，短线需看电网板块是否共振。",
    action: "强趋势回踩不破再看",
    trend: [20.7, 21.0, 21.2, 21.5, 21.8, 22.0, 22.3, 22.5, 22.8, 23.0, 23.2, 23.4, 23.6],
    tech: "若 MA20、MA60 同步上移，可作为稳健趋势股观察；放量长上影要降级。",
    overseas: "业务更偏国内电网和自动化，海外不是核心筛选优势。",
    margin: "技术服务和电网自动化属性支撑盈利质量，但要看最新财报。",
    capital: "近 10 日资金若持续流入，才纳入当日超短线池。",
    tips: ["不要在板块冲高回落时接。", "下午能站回 VWAP 才考虑。", "跌破 MA20 后只看不买。"],
  },
  {
    code: "002415",
    name: "海康威视",
    mode: ["intraday", "swing"],
    status: "good",
    tags: ["约34元", "AI视觉", "成交稳定"],
    fit: "价格适中，AI 视觉和安防龙头，流动性好，适合做短线趋势或波段观察。",
    risk: "海外政策和地缘风险较高，消息面会放大波动。",
    action: "午后资金回流确认",
    trend: [30.2, 30.5, 30.8, 31.2, 31.5, 31.8, 32.2, 32.5, 32.9, 33.3, 33.6, 34.0, 34.3],
    tech: "更适合看低位修复后的平滑上移，若早盘冲高回落则不买。",
    overseas: "海外业务占比较高，但也对应更高政策风险。",
    margin: "AI 视觉和软硬件方案支持较好的毛利结构，需看季度利润是否稳定。",
    capital: "外资偏好会随政策预期变化，近 10 日资金必须人工复核。",
    tips: ["消息敏感日降低仓位。", "缩量回踩比追涨更好。", "若跌破 MA60 不做短线趋势。"],
  },
  {
    code: "600298",
    name: "安琪酵母",
    mode: ["swing", "watch"],
    status: "wait",
    tags: ["约39元", "海外约四成", "低波动"],
    fit: "价格仍适中，酵母发酵龙头，海外收入约四成，更适合稳健波段观察。",
    risk: "短线弹性一般，不适合当作强题材快进快出。",
    action: "只做低吸型波段",
    trend: [33.0, 33.6, 34.2, 34.8, 35.2, 36.0, 36.6, 36.8, 37.2, 37.8, 38.3, 38.6, 38.9],
    tech: "走势偏稳，适合沿 20 日线平滑上移时观察，不适合追单日放量。",
    overseas: "海外收入约四成，海外毛利率相对稳定。",
    margin: "酵母及深加工产品毛利率较稳定，但糖业等业务可能拖累。",
    capital: "近 10 日资金方向若没有明显回流，只放波段观察。",
    tips: ["只在缩量回踩均线时看。", "早盘冲高不强不恋战。", "放量长上影后等两天。"],
  },
  {
    code: "002179",
    name: "中航光电",
    mode: ["swing", "watch"],
    status: "wait",
    tags: ["约32元", "连接器", "技术壁垒"],
    fit: "价格适中，高端连接器方向有技术壁垒，适合波段趋势观察。",
    risk: "军工电子题材轮动明显，资金不在板块时容易反复。",
    action: "等趋势重新顺排",
    trend: [29.0, 29.4, 29.7, 30.1, 30.4, 30.7, 31.0, 31.3, 31.5, 31.8, 32.0, 32.2, 32.3],
    tech: "适合等 MA20、MA60 修复后低吸，不适合追消息面急拉。",
    overseas: "更偏高端制造和军工电子，海外占比不是核心亮点。",
    margin: "连接器龙头毛利率质量较好，需结合最新财报复核。",
    capital: "题材轮动时资金进出快，盘中只看强承接。",
    tips: ["板块不强时只观察。", "放量冲高回落要回避。", "跌破 MA20 后移出短线池。"],
  },
  {
    code: "603338",
    name: "浙江鼎力",
    mode: ["swing", "watch"],
    status: "wait",
    tags: ["约52元", "海外占比高", "弹性观察"],
    fit: "价格在 40-60 元弹性观察区，高空作业平台龙头，海外收入占比高。",
    risk: "成交额弱于大票，超短线仓位不能太重。",
    action: "突破后回踩不破再看",
    trend: [44.0, 45.0, 45.5, 46.8, 47.2, 48.1, 48.7, 49.4, 49.9, 50.3, 50.7, 51.4, 51.9],
    tech: "如果站稳 MA60 并放量温和，可作为弹性波段观察；破位则等待。",
    overseas: "中国境外收入占比较高，是海外业务强匹配标的。",
    margin: "高空作业平台毛利率较好，海外地区利润质量需持续跟踪。",
    capital: "近 10 日没有资金回补时只放观察池。",
    tips: ["不追早盘第一波。", "成交额不足时不做重仓。", "等待突破后缩量回踩确认。"],
  },
  {
    code: "601138",
    name: "工业富联",
    mode: ["intraday", "swing"],
    status: "good",
    tags: ["约56元", "AI服务器", "成交额大"],
    fit: "价格在弹性观察区，AI 服务器链核心股，成交额大，适合只做板块共振。",
    risk: "波动较大，容易高开低走；不适合追单日情绪高点。",
    action: "只做 AI 链强承接",
    trend: [47.0, 48.5, 49.8, 51.0, 52.2, 53.0, 53.8, 54.5, 55.0, 55.5, 56.0, 56.3, 56.5],
    tech: "适合看 AI 链整体强势时的午后回踩，若板块分歧扩大则回避。",
    overseas: "全球服务器和电子制造链条属性明显，受 AI 订单预期影响大。",
    margin: "毛利率不是最高，但订单规模和资金关注度强。",
    capital: "盘前复核近 10 日资金是否连续回流，盘中看成交额是否维持。",
    tips: ["大幅高开不追。", "下午破 VWAP 不买。", "次日上午不延续先兑现。"],
  },
  {
    code: "002475",
    name: "立讯精密",
    mode: ["intraday", "swing"],
    status: "good",
    tags: ["约57元", "消费电子", "高流动性"],
    fit: "价格接近上限但仍低于高价股，消费电子和汽车电子龙头，流动性强。",
    risk: "接近 60 元上限，波动和估值弹性都要控制。",
    action: "少量观察强承接",
    trend: [49.0, 50.2, 51.0, 52.1, 53.0, 53.8, 54.5, 55.0, 55.5, 56.0, 56.3, 56.6, 56.8],
    tech: "适合只在板块强势、下午缩量回踩不破时观察。",
    overseas: "全球消费电子客户链条深，海外业务属性较强。",
    margin: "制造链毛利率不算极高，短线主要看订单和板块资金。",
    capital: "需要复核近 10 日北向和主力资金是否同向。",
    tips: ["不追高开长阳。", "成交额必须维持活跃。", "若消费电子板块转弱，先降级。"],
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
