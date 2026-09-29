# Yunlu Ding — Personal Portfolio

丁云璐 / Yunlu Ding 的个人主页：中英双语、纯静态、零依赖，可以直接部署到 GitHub Pages。

## 文件结构

```text
portfolio/
├── index.html        # 页面骨架
├── styles.css        # 全部样式（明亮活泼风格）
├── content.js        # 所有中英双语文案（改内容改这里）
├── app.js            # 渲染与交互（打字机 / 滚动动画 / 数字滚动 / 彩带）
├── assets/
│   └── projects/     # 作品截图（竖版手机截图，文件名 ASCII）
├── downloads/
│   └── Yunlu-Ding-Resume.pdf    # 简历下载文件（最新 PDF）
└── README.md
```

## 本地预览

直接用浏览器打开 `index.html` 即可，无需安装依赖或启动服务。

## 如何改内容

1. 打开 `content.js`。
2. 每段文案都有 `zh` 和 `en` 两套，改对应字段即可。
3. 改完后刷新浏览器。

常用修改位置：

- Hero 文案与角色词：`hero`
- 数据成果卡片：`metrics.items`
- 三段实习与教育：`journey.items`
- 作品卡：`projects.items`
- 技能与联系：`skills` / `contact`

### 作品截图说明

截图统一放在 `assets/projects/`，建议为 480×1040 左右的竖版手机截图。
每个作品的截图列表在 `content.js` → `projects.items[].images` 中维护，
格式为 `{ src: "assets/projects/xxx.png", label: "页面名称" }`。

## 部署到 GitHub Pages

纯静态站不需要构建，把 `portfolio/` 下的文件作为站点根目录推送即可。

1. 在 GitHub 新建一个仓库（例如 `yunlu-ding`）。
2. 在本地执行：

   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "init portfolio"
   git branch -M main
   git remote add origin https://github.com/<你的用户名>/<仓库名>.git
   git push -u origin main
   ```

3. 打开 GitHub 仓库 → Settings → Pages。
4. Source 选择 `Deploy from a branch`，分支选 `main`，目录选 `/ (root)`，保存。
5. 一两分钟后访问 `https://<你的用户名>.github.io/<仓库名>/`。

## 后续可选项

- 更新后访问者仍看到旧内容时：把 `index.html` 中三处 `?v=20260929` 改成新的日期或版本号，再让访问者刷新即可绕过浏览器缓存。
- 想换新版 PDF 简历：直接覆盖 `downloads/Yunlu-Ding-Resume.pdf` 即可。
- 重新生成作品集 PDF：先执行 `npm install pdfkit`，再运行 `node tools/build-portfolio-pdf.js`。
- 想绑定域名：在 Pages 设置里填自定义域名，并在 DNS 加 CNAME。
- 想加小程序二维码：把图片放进 `downloads/` 或新建 `assets/`，再给作品卡补一张图。
