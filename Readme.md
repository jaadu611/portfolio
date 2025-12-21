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
│   ├── Navbar.tsx
│   ├── NavTime.tsx
│   ├── Dock.tsx
│   └── Welcome.tsx
│
├── constants/
│   ├── Navbar.constants.ts
│   ├── Store.constants.ts
│   └── Dock.constants.tsx
├── public/
│   ├── icons/
│   ├── images/
│   └── wallpaper.webp
├── store/
│   └── window.ts
```

---

## 🧭 Navbar Architecture

- **Navbar** → Server Component (static, fast)
- **NavTime** → Client Component (dynamic time)
- Prevents hydration issues by rendering time **only after mount**

---

## 👋 Welcome Screen Architecture

- **Welcome** → Server Component (layout & static copy)
- **Welcome.client** → Client Component (dynamic greeting / effects)
- Avoids hydration mismatches by running **time or state-based logic only on the client**

---

## 🖥️ Dock Architecture

- **Dock** → Client Component (interactive layout & animations)
- **GSAP hover logic** → Client-only (mouse tracking & magnification)
- Ensures smooth interactions by running **pointer-based animations only on the client**

---

## 🪟 Window Store Architecture

- **Window Store (Zustand + Immer)** → Client-only state manager (window lifecycle & stacking)
- **Single `toggleWindow` action** → Controls open, focus, and z-index behavior
- **Centralized window config** → Ensures consistent IDs, default state, and type safety
- Guarantees predictable window behavior by keeping **UI state and side effects out of components**

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

---

## 📌 Future Improvements

- 🖥️ Fullscreen toggle (OS-style)
- 🪟 Draggable windows
- 🧩 Dock-style icon animations
- 🌙 Dark mode
- 🧭 Section routing / smooth scrolling

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 🙌 Author

**Jaadu**
Full-Stack Developer

> Built with ❤️, Next.js, and a bit of macOS nostalgia.
