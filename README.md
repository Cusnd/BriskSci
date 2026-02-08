# Brisksci

Sakura 氛围的学术感个人博客。主题基于樱花色调，动画偏 Apple 风味，适合 ACGN 与研究者风格展示。

**特性**
- Sakura 主题与玻璃拟态 UI
- Astro + React + Tailwind CSS v4
- View Transitions 跨页面转场
- Framer Motion 动效
- `astro:content` 管理博客内容
- 中英双语路由与配置
- 内置页面：Home / Blog / Projects / Moods / Gallery / Guestbook / Saved

**技术栈**
- Astro 5
- React 19
- Tailwind CSS 4
- MDX
- Framer Motion
- 字体：`Noto Serif SC`

**快速开始**
```bash
npm install
npm run dev
npm run build
npm run preview
```

**项目结构**
```text
src/
├── components/         # React 组件
├── config/             # 站点配置
│   ├── site.yaml        # 中文配置
│   └── site.en.yaml     # 英文配置
├── content/
│   └── blog/            # 博客文章（md/mdx）
├── layouts/             # 布局
├── pages/
│   ├── [lang]/          # 语言路由
│   └── ...
└── styles/
    └── global.css       # 全局样式与主题变量
```

**写作博客**
- 文章存放在 `src/content/blog/`，支持 `.md` 与 `.mdx`
- 需要包含 frontmatter，`pubDate` 为必填

```markdown
---
title: "文章标题"
description: "简短描述（会显示在卡片上）"
pubDate: 2026-02-03
updatedDate: 2026-02-04
heroImage: "/images/cover.jpg"
tags: ["AI", "研究", "技术"]
---

这里是正文内容，支持标准 Markdown 语法...
```

**站点配置**
- 中文配置：`src/config/site.yaml`
- 英文配置：`src/config/site.en.yaml`

配置包含以下模块：
- site 基本信息
- social 社交链接
- profile 个人简介
- research_interests 研究兴趣
- education 教育经历
- experience 工作经历
- skills 技能条
- publications 论文与成果

**主题与样式**
- 主题变量在 `src/styles/global.css`
- Sakura 色板变量：`--color-sakura` / `--color-sakura-light` / `--color-sakura-dark`
- 字体已设置为 `Noto Serif SC`

**多语言与路由**
- 默认语言配置在 `src/i18n/ui.ts`
- 路由形式为 `/{lang}/...`，例如 `/{lang}/blog/`
- 根路径 `/` 会跳转至默认语言

**部署**
- Build command: `npm run build`
- Output directory: `dist`
- 适配 Vercel 或 Netlify 的静态部署流程

**更多说明**
- 详细使用教程见 `Tutorial.md`

---

# NijigenBlog (English)

A Sakura‑toned academic personal blog with Apple‑flavored motion, designed for ACGN and research‑style presentation.

**Features**
- Sakura theme with glassmorphism UI
- Astro + React + Tailwind CSS v4
- View Transitions for page navigation
- Framer Motion animations
- `astro:content` for blog content
- Bilingual routes and configs
- Built‑in pages: Home / Blog / Projects / Moods / Gallery / Guestbook / Saved

**Tech Stack**
- Astro 5
- React 19
- Tailwind CSS 4
- MDX
- Framer Motion
- Font: `Noto Serif SC`

**Quick Start**
```bash
npm install
npm run dev
npm run build
npm run preview
```

**Project Structure**
```text
src/
├── components/         # React components
├── config/             # Site configs
│   ├── site.yaml        # Chinese config
│   └── site.en.yaml     # English config
├── content/
│   └── blog/            # Blog posts (md/mdx)
├── layouts/             # Layouts
├── pages/
│   ├── [lang]/          # Language routes
│   └── ...
└── styles/
    └── global.css       # Global styles and theme variables
```

**Writing Posts**
- Posts live in `src/content/blog/` and support `.md` and `.mdx`
- `pubDate` is required in frontmatter

```markdown
---
title: "Post Title"
description: "Short description for cards"
pubDate: 2026-02-03
updatedDate: 2026-02-04
heroImage: "/images/cover.jpg"
tags: ["AI", "Research", "Tech"]
---

Write your content here...
```

**Site Config**
- Chinese: `src/config/site.yaml`
- English: `src/config/site.en.yaml`

Config sections include:
- site
- social
- profile
- research_interests
- education
- experience
- skills
- publications

**Theme & Styling**
- Theme variables are defined in `src/styles/global.css`
- Sakura palette: `--color-sakura` / `--color-sakura-light` / `--color-sakura-dark`
- Font is set to `Noto Serif SC`

**i18n & Routing**
- Default language is defined in `src/i18n/ui.ts`
- Routes follow `/{lang}/...`, e.g. `/{lang}/blog/`
- `/` redirects to the default language

**Deployment**
- Build command: `npm run build`
- Output directory: `dist`
- Works with common static hosting workflows on Vercel or Netlify

**Further Reading**
- See `Tutorial.md` for a full guide
