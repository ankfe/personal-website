# 部署教程 · Cherry LIU 个人网站

> 本项目是**纯静态网站**（HTML + CSS + JS + 图片），**零依赖、零构建**。
> 部署只需把文件夹上传到任意静态托管平台，1 分钟搞定，立刻获得可公开分享的链接。

---

## 目录结构（部署前确认）

```
personal-website/
├── index.html          ← 中文版主页（入口文件，必须放在根目录）
├── index-en.html       ← 英文版主页
├── css/style.css       ← 样式
├── js/main.js          ← 交互脚本
├── images/             ← 头像(4张) + 场景配图(4张)
├── resume.pdf          ← 简历下载
├── .nojekyll           ← 防止 GitHub Pages 误处理（已自带）
└── README.md
```

✅ **所有资源均使用相对路径**（`css/style.css`、`images/avatar-01.jpg` 等），因此部署到**根域名或任意子路径**都能正常工作。

---

## 方式一：Netlify（最简单 · 拖拽即上线）

**适合：想要最快拿到公开链接，不想碰命令行。**

1. 打开 [app.netlify.com](https://app.netlify.com) 并注册/登录
2. 进入 **Sites** 页面
3. 把整个 `personal-website` 文件夹**直接拖拽到**页面中间的虚线框
4. 等待几秒，Netlify 自动完成部署
5. 得到一个类似 `https://xxx.netlify.app` 的链接 → **这就是可分享的公开地址**

> 💡 想绑定自己的域名（如 `cherryliu.me`）：在站点后台 **Domain settings** 里按提示添加并解析 CNAME 记录即可。

---

## 方式二：Vercel（同样简单 · 拖拽或 Git）

**适合：未来可能扩展、或已在用 Vercel 生态。**

**方法 A — 拖拽部署：**
1. 打开 [vercel.com](https://vercel.com) 注册/登录
2. 点击 **Add New → Project → Deploy**
3. 把 `personal-website` 文件夹拖入上传区
4. Framework Preset 选 **Other**（纯静态，无需配置）
5. 点击 **Deploy** → 得到 `https://xxx.vercel.app`

**方法 B — 连接 Git（推荐，后续更新自动部署）：**
1. 把本文件夹推送到你的 GitHub 仓库
2. Vercel 导入该仓库 → 自动识别为静态站点
3. 以后每次 `git push`，网站自动更新

---

## 方式三：GitHub Pages（最专业稳定 · 免费）

**适合：作为长期作品集/简历主页。**

### 步骤

1. **在 GitHub 新建一个仓库**（Repository）
   - 仓库名建议：`personal-website` 或 `<你的用户名>.github.io`
   - 选 **Public**（公开才能用免费 Pages）

2. **上传所有文件**
   - 方式一：网页端直接 Upload files（把整个文件夹内容拖进去）
   - 方式二（推荐）：本地用 Git 推送
     ```bash
     cd personal-website
     git init
     git add .
     git commit -m "Add personal website"
     git branch -M main
     git remote add origin https://github.com/<你的用户名>/<仓库名>.git
     git push -u origin main
     ```

3. **开启 Pages**
   - 进入仓库 → **Settings → Pages**
   - Source 选 **Deploy from a branch**
   - Branch 选 **main** → 文件夹选 **/ (root)**
   - 点击 **Save**

4. **等待约 1 分钟**，访问：
   - 若仓库名为 `<用户名>.github.io` → 直接访问 `https://<用户名>.github.io`
   - 若仓库名为其他 → 访问 `https://<用户名>.github.io/<仓库名>/`

> ✅ 项目已自带 `.nojekyll` 文件，GitHub Pages 不会误把它当 Jekyll 项目处理。

---

## 部署后验证清单

| 检查项 | 正常表现 |
|--------|----------|
| 首页可打开 | 看到头像轮播 + Cherry LIU 大标题 |
| 头像显示 | 4 张职业照自动轮换（非 CL 占位符） |
| 配图显示 | 经历/项目板块各有场景图 |
| 导航切换 | 点击 About / 经历 / 项目 等可平滑跳转 |
| 语言切换 | 右上角 EN / 中文 可跳转双语版本 |
| 简历下载 | 点击"简历 PDF"可下载 |
| 移动端 | 手机打开无错位、菜单可展开 |

---

## 常见问题

**Q：部署后图片/头像不显示？**
- 检查图片是否都上传了（尤其 `images/` 目录下的 8 张图）
- 确认文件名大小写一致（服务器区分大小写）

**Q：GitHub Pages 显示 404？**
- 确认 `index.html` 在仓库**根目录**
- 确认 Pages 的 Source 分支和目录选对（main / root）
- 检查仓库名若非 `<用户名>.github.io`，访问地址需带仓库名路径

**Q：想更新内容怎么办？**
- 改完本地文件后，重新拖拽上传 / 重新 `git push` 即可
- Netlify / Vercel 连接 Git 后会自动重新部署

**Q：中文版和英文版怎么都上线？**
- 两个 HTML 文件都在根目录，部署后分别访问：
  - 中文：`https://你的域名/index.html`（通常默认即是）
  - 英文：`https://你的域名/index-en.html`

---

## 推荐组合

| 需求 | 推荐方案 |
|------|----------|
| 最快拿到链接 | **Netlify 拖拽**（30 秒） |
| 长期作品集简历站 | **GitHub Pages**（稳定免费） |
| 可能后续扩展功能 | **Vercel + Git** |
| 绑定个人域名 | 以上三家都支持，选其一后在后台绑定即可 |

---

*祝求职顺利！有任何部署问题随时回来问我。*
