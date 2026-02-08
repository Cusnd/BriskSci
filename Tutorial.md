# NijigenBlog 使用教程

## 🌸 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

---

## 📝 写博客文章

博客文章存放在 `src/content/blog/` 目录，使用 Markdown 格式。

### 创建新文章

1. 在 `src/content/blog/` 下新建 `.md` 文件，如 `my-first-post.md`
2. 添加 frontmatter 头部信息
3. 写 Markdown 正文

### 文章格式示例

```markdown
---
title: "文章标题"
description: "简短描述（会显示在卡片上）"
pubDate: 2026-02-03
tags: ["AI", "研究", "技术"]
heroImage: "/images/cover.jpg"  # 可选，封面图
---

这里是正文内容，支持标准 Markdown 语法...

## 二级标题

- 列表项
- 列表项

> 引用文本

`代码`

```python
print("代码块")
``` 
```

---

## 👤 修改个人信息 (CV)

所有个人信息集中在 **一个配置文件** 中：

📄 **`src/config/site.yaml`**

### 配置项说明

```yaml
# 基本信息
site:
  title: "博客标题"
  description: "博客描述"
  author: "你的名字"
  avatar: "头像图片链接"

# 社交链接（不需要的可以删除或注释掉）
social:
  github: "https://github.com/username"
  twitter: "https://twitter.com/username"
  email: "your@email.com"
  linkedin: "https://linkedin.com/in/username"

# 首页个人简介
profile:
  title: "AI Researcher & Developer"
  tagline: "一句话介绍自己"

# 研究兴趣（标签形式显示）
research_interests:
  - "Large Language Models"
  - "Computer Vision"
  - "..."

# 教育经历
education:
  - degree: "博士"
    school: "XX大学"
    period: "2024 - 至今"
    note: "研究方向：AI"
    current: true  # 当前在读

# 工作/实习经历
experience:
  - title: "研究实习生"
    company: "公司名"
    period: "2024年夏"
    description: "做了什么"
    current: true

# 技能（0-100 显示为进度条）
skills:
  - name: "Python"
    level: 95
  - name: "PyTorch"
    level: 90

# 代表性论文
publications:
  - title: "论文标题"
    venue: "ACL 2024"
    role: "First Author"
    description: "论文简介"
    link: "https://arxiv.org/abs/..."  # 可选
```

### 修改步骤

1. 打开 `src/config/site.yaml`
2. 按上述格式修改内容
3. 保存后页面自动刷新

---

## 📂 项目结构

```
src/
├── config/
│   └── site.yaml      # ⭐ 个人信息配置
├── content/
│   └── blog/          # ⭐ 博客文章目录
│       ├── post-1.md
│       └── post-2.md
├── components/        # 组件（一般不需要修改）
├── layouts/           # 布局
├── pages/             # 页面
└── styles/            # 样式
```

---

## 🎨 自定义主题颜色

编辑 `src/styles/global.css` 中的 CSS 变量：

```css
@theme {
  --color-sakura: #fda4af;
  --color-sakura-light: #ffe4e6;
  --color-sakura-dark: #f87171;
  --color-background: #fffbfc;
}
```

---

## 🚀 部署

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 [vercel.com](https://vercel.com) 导入仓库
3. 自动部署

### Netlify

1. 推送到 GitHub
2. 在 [netlify.com](https://netlify.com) 连接仓库
3. Build command: `npm run build`
4. Publish directory: `dist`
