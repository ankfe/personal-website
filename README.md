# Cherry LIU (刘采焱) · 个人网站

> 基于 **paul-hahn.com** 极简清晰风格设计的个人简历网站 —— 纯静态 HTML / CSS / JS 构建，零依赖，中英双语版本。

---

## Tech Stack

| 层级 | 技术 | 说明 |
|------|------|------|
| **结构** | Semantic HTML5 | 单页应用（SPA），7 个语义化版块（含 FAQ） |
| **样式** | Vanilla CSS3 | CSS Variables + `color-mix()` + `clamp()` 响应式字体 + Grid/Flexbox |
| **交互** | Vanilla JavaScript (ES6+) | IntersectionObserver 动画、导航高亮、移动端菜单、FAQ 折叠交互 |
| **多语言** | 双 HTML 文件 | `index.html` (中文) ↔ `index-en.html` (英文)，共享同一套 CSS/JS |
| **设计语言** | 极简中性风 | 浅色背景 + 近黑文字 + 彩色分类标签 + `//` 斜杠章节标题 |

**无框架、无构建工具、无包管理器、无虚拟 DOM。**

---

## Quick Start

### 1. 获取项目

```bash
git clone <your-repo-url>
cd personal-website
```

确保以下文件在同一目录：

```
/
├── index.html          ← 中文版主页（部署入口）
├── index-en.html       ← 英文版主页
├── css/style.css       ← 样式表（共享）
├── js/main.js          ← 交互脚本（共享）
├── images/             ← 头像(4张) + 场景配图(4张)
├── resume.pdf          ← 简历 PDF
├── .nojekyll           ← 防 GitHub Pages 误处理
├── README.md
└── DEPLOY.md           ← 📘 部署教程（Netlify / Vercel / GitHub Pages）
```

### 2. 启动本地预览

```bash
python3 -m http.server 8000 --bind 0.0.0.0
# 中文版: http://localhost:8000/index.html  或直接 http://localhost:8000/
# 英文版: http://localhost:8000/index-en.html
```

### 3. 部署上线

纯静态文件，可直接部署到任意平台。详细分步图文教程（含截图指引、常见问题）见 **[DEPLOY.md](./DEPLOY.md)**。

| 平台 | 难度 | 方式 |
|------|------|------|
| **Netlify** | ⭐ 最简单 | 拖拽文件夹到 [app.netlify.com](https://app.netlify.com) → 立刻得到公开链接 |
| **Vercel** | ⭐⭐ 简单 | 拖拽或连接 Git → Framework 选 Other |
| **GitHub Pages** | ⭐⭐⭐ 最稳定 | 推送仓库 → Settings → Pages → 选 main 分支 |

---

## Dependencies & Tools

| 类别 | 工具 | 是否必需 | 版本要求 |
|------|------|----------|----------|
| 浏览器 | 现代浏览器 | ✅ 必需 | Chrome 90+ / Firefox 88+ / Safari 14+ / Edge 90+ |
| 本地服务器 | Python 3.x 或 Node.js 16+ | ⚠️ 仅本地预览需要 | Python 3.8+ 或 Node.js 16+ |
| 编辑器 | 任意文本编辑器 | 可选 | — |
| 构建工具 | 无 | — | — |
| 包管理器 | 无 | — | — |

**零 npm 依赖、零外部 CDN 强制依赖（Google Fonts 为可选优化）。**

---

## Environment & External Services

| 项目 | 详情 |
|------|------|
| **环境变量** | ❌ 不需要。纯前端静态页面。 |
| **外部 API / 服务** | ❌ 不依赖任何 API/数据库/认证服务。 |
| **离线可用** | ✅ 是。所有资源均为本地文件。 |
| **CORS 跨域** | 不涉及。 |

---

## Features

### ✅ 已实现的6项调整

| # | 调整项 | 实现方式 |
|---|--------|----------|
| 1 | **头像照片** | Hero 区居中圆形头像（110px），带优雅阴影和绿色描边；照片加载失败时显示 CL 字母占位 |
| 2 | **名称改为 Cherry LIU** | title / 导航 logo / Hero 大标题 / 页脚全部统一为 "Cherry LIU" |
| 3 | **关于我：双语姓名 + 荣誉排版修复** | 同时展示 "Cherry LIU" 和 "刘采焱"；教育卡片用 flex 两列布局分离标签与内容，解决折行问题 |
| 4 | **经历数据强调** | 关键数据（15%、94%、80%、200+、5个、3.1万字等）使用绿色高亮背景 + 加粗样式 |
| 5 | **FAQ 板块** | 7 条产品岗求职相关 FAQ，使用 `<details>` 折叠面板，自动互斥展开（打开一个自动关闭其他） |
| 6 | **中英双语** | `index.html` (中文) 和 `index-en.html` (英文) 共享 CSS/JS；导航栏有语言切换按钮（EN / 中文） |

### 🎨 设计系统

**分类彩色标签：**
- 🟣 紫色 `#402458` → 实习经历 / 组织协调 / 内容本地化
- 🔵 蓝色 `#4d80d1` → 大创项目 / 跨部门协作 / 数据驱动运营
- 🟢 绿色 `#187550` → 翻译项目 / 独立学习能力 / UX 研究
- 🟠 橙色 `#933102` → 社团经历 / 跨文化沟通 / 项目管理

---

## License

© 2025 Cherry LIU (刘采焱) · 个人网站

---

*Design language inspired by [paul-hahn.com](https://paul-hahn.com) — Klare Gestaltung, Saubere Umsetzung.*
