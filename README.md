# 🌿 Ghibli UI

A warm, storybook-style React component library inspired by Studio Ghibli's visual world — soft greens, warm yellows, and gentle rounded forms.

## ✨ Features

- **12 production-ready components**: Button, Input, Select, Switch, Modal, Tooltip, Badge, Tag, Card, Divider, Collapse, Avatar
- **Ghibli aesthetic**: Warm color palette (#E8C47C, #A8C5A0, #E8B4B8, #F7F3E8), sticker-style 3D buttons, Nunito font
- **React 18 + TypeScript + Vite**
- **Less CSS Modules** with BEM naming
- **Lucide React** icons + hand-drawn SVG icons (LoadingSpinner, CloseIcon, StarIcon, HeartIcon)
- **Demo site** with live preview and code view

## 🎨 Design Tokens

| Token | Value |
|---|---|
| Primary | `#E8C47C` |
| Secondary | `#A8C5A0` |
| Blush Pink | `#E8B4B8` |
| Background | `#F7F3E8` |
| Text Primary | `#5C4A32` |

## 📦 Install

```bash
npm install
cd demo && npm install
```

## 🚀 Development

```bash
# Component library
npm run dev

# Demo site
cd demo
npm run dev
```

## Components

| Component | Variants |
|---|---|
| `Button` | primary, secondary, ghost, link, danger × sm/md/lg + loading |
| `Input` | sm/md/lg, error, prefix/suffix, disabled |
| `Select` | sm/md/lg, error, disabled |
| `Switch` | sm/md/lg, checked/disabled |
| `Modal` | sm/md/lg, closable, footer slot |
| `Tooltip` | top/bottom/left/right placement, configurable delay |
| `Badge` | primary/secondary/success/warning/danger/ghost, count, dot |
| `Tag` | 6 variants, closable, custom color |
| `Card` | title/subtitle/cover/footer, hoverable, 4 padding levels |
| `Divider` | horizontal/vertical, dashed, with text |
| `Collapse` | accordion, ghost mode, animated |
| `Avatar` | sm/md/lg/xl, circle/square, online/offline/busy status |
