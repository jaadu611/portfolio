# 🖥️ Jaadu's Portfolio OS

A macOS-inspired personal portfolio built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**. The site focuses on clean UI, smooth interactions, and a desktop-like experience in the browser.

---

## ✨ Features

- ⚡ **Next.js 16 (App Router + Turbopack)**
- 🎨 **Tailwind CSS** with glassmorphism & gradients
- 🧭 **Server + Client Components** (clean separation)
- ⏰ **Live Clock** (client-only, hydration-safe)
- 🖼️ **Optimized Images** using `next/image`
- 🧠 **Type-safe constants & components**
- 🍎 **macOS-inspired UI/UX**
- 🖱️ **Interactive Hover States** (smooth mouse-follow effects & subtle animations)
- 🧠 **Centralized State with Zustand** (lightweight global store and state management)
- 🪟 **Resizable & Draggable Windows** with GSAP + Draggable
- 🖥️ **Window Controls** (minimize, maximize, close) with smooth animations
- 📜 **Terminal Emulator** (custom commands, history, blinking cursor)
- 🛠️ **RAG-style Autocomplete** / CLI-style interactions in Terminal
- 🌐 **Dynamic Layout Adjustments** (full-screen, centered windows, responsive)

---

## 🛠️ Tech Stack

| Category      | Tech         |
| ------------- | ------------ |
| Framework     | Next.js 16   |
| Language      | TypeScript   |
| Styling       | Tailwind CSS |
| Date & Time   | dayjs        |
| Animations    | GSAP         |
| Accessibility | Tooltip      |
| States        | Zustand      |

---

## 📂 Project Structure

```txt
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Navbar/
│   │   ├── AppleLogo.tsx
│   │   ├── Navbar.tsx
│   │   ├── NavbarButtons.tsx
│   │   ├── NavbarControlCenter.tsx
│   │   └── NavTime.tsx
│   │
│   ├── Welcome/
│   │   ├── Welcome.tsx
│   │   └── Welcome.client.tsx
│   │
│   ├── Dock.tsx
│   ├── FullscreenToggle.tsx
│   ├── WindowControls.tsx
│   └── ThemeChange.tsx
│
├── High order components/
│   ├── NavbarControlCenterWrapper.tsx
│   └── windowWrapper.tsx
│
├── constants/
│   ├── Navbar.constants.ts
│   ├── Terminal.constants.ts
│   ├── BluetoothDevices.constants.ts
│   ├── Store.constants.ts
│   └── Dock.constants.tsx
│
├── hooks/
│   └── useHydrated.tsx
│
├── public/
│   ├── icons/
│   ├── images/
│   └── wallpaper.webp
│
├── store/
│   └── window.ts
│
└── Windows/
    └── Terminal.tsx
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3️⃣ Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🖼️ Assets & Images

All static assets live in the `public/` folder and are referenced using absolute paths:

```tsx
<Image src="/icons/apple-logo.svg" />
```

Background wallpaper is applied via inline styles for compatibility with Next.js bundling.

---

## 🧠 Key Learnings / Best Practices Used

- Avoid hydration mismatches by isolating **time, date, and pointer-based logic** in Client Components
- Use **Server Components by default** for layout, static content, and fast initial render
- Split complex UI into **SSR shells + CSR behavior layers** (Navbar, Welcome Screen, Dock)
- Keep the **Navbar** mostly server-rendered, with client-only subcomponents for live data
- Implement the **Welcome Screen** with static markup (SSR) and hover/animation logic (CSR)
- Run **mouse-driven animations (Dock magnification)** strictly on the client
- Prefer **type inference and derived types** over inline, duplicated typings
- Use **absolute paths** for public assets to ensure predictable loading
- Centralize **global state (Zustand)** for client interactions to avoid prop drilling
- Wrap complex behaviors in **HOCs** or reusable hooks to reduce duplication
- Keep **animation state separate from layout state** to prevent unnecessary re-renders
- Restore UI from **cached state**, not DOM inference

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 🙌 Author

**Jaadu**
Full-Stack Developer

> Built with ❤️, Next.js, and a bit of macOS nostalgia.
