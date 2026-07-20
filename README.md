# A股短线趋势观察台

这是一个纯静态网站原型，用于人工短线和波段观察，不包含回测、自动交易或量化交易模型。

页面每次打开都会常驻显示选股说明：当前优先约 15-60 元区间的 `60`、`00`、`30` 开头 A 股，并提醒价格适中不等于更安全，仍需人工复核板块强度、成交额、均线趋势和下午分时承接。

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
- 平滑上移趋势样例 `trend`
- 技术、海外业务、毛利率、资金说明
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
