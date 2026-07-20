# A股短线趋势观察台

这是一个纯静态网站原型，用于人工短线和波段观察，不包含回测、自动交易或量化交易模型。

页面每次打开都会常驻显示选股说明。当前核心逻辑是“板块/概念先行，中军/龙头优先，尾盘伏龙确认”：先看板块和概念资金是否流入、次日是否有延续性，再从强板块中选成交额充足、辨识度高、趋势更强的股票，最后在尾盘复核承接、分时重心、放量和日线均线。

当前股票池已按 `2026-07-20` 收盘样本重做。现阶段市场主线转换、高切低，页面采用“双模式”：

- 标准伏龙：30/60 日线仍作为硬门槛，适合趋势更稳定的环境。
- 轻伏龙：当前阶段使用，30/60 日线只作为加分项，不再一票否决；但板块资金流入、20 日线不弱收、5/10 日线平滑上移、尾盘承接强不能放宽。

## 本地打开

直接双击 `index.html` 可以打开。若要模拟线上环境：

```powershell
python -m http.server 8080
```

然后访问 `http://127.0.0.1:8080/`。

## 修改股票池

股票池在 `app.js` 的 `stocks` 数组中。后续可以继续改：

- 股票代码和名称
- 代码范围：`60`、`00`、`30` 开头 A 股
- 价格范围说明：主观察池约 15-40 元，弹性观察池约 40-60 元
- 今日收盘观察池：电力/公用事业、煤炭、石油石化为主线；消费只作次级观察
- 当前策略模式：轻伏龙高切低观察池，30/60 日线只做加分项
- 平滑上移趋势样例 `trend`
- 技术、板块概念、量价、资金说明
- 手工观察提示
- 超短线、波段、观察池分层

## 发布到 GitHub Pages

当前已经发布到 GitHub Pages：

`https://217-tzy.github.io/ashare-trend-watchdesk/`

如需重新发布到其他仓库，可以这样操作：

```powershell
git init
git add index.html styles.css app.js README.md
git commit -m "Create A-share trend watchdesk"
gh repo create ashare-trend-watchdesk --public --source . --push
gh repo edit --enable-pages
```

如果 GitHub CLI 的 Pages 开启命令不可用，也可以到 GitHub 仓库页面：

`Settings -> Pages -> Build and deployment -> Deploy from a branch -> main / root`

启用后，网站地址通常是：

`https://你的用户名.github.io/ashare-trend-watchdesk/`

## 数据边界

北向资金近 10 日连续买入需要在券商、东方财富或同花顺等日频页面手工复核。HKEX 自 2024-08-19 起只按季度披露北向持股，不能作为近 10 日连续买入证明。

PPTX 中的“伏龙出渊”材料提到历史胜率口径，但网站不承诺胜率，也不做自动交易。所有信号只作为人工复核清单。
