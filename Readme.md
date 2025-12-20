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

---

## 🛠️ Tech Stack

| Category    | Tech         |
| ----------- | ------------ |
| Framework   | Next.js 16   |
| Language    | TypeScript   |
| Styling     | Tailwind CSS |
| Date & Time | dayjs        |
| Animations  | GSAP         |

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
│   └── Welcome.tsx
│
├── constants/
│   └── Navbar.constants.ts
│
├── public/
│   ├── icons/
│   └── wallpaper.webp
```

---

## 🧭 Navbar Architecture

- **Navbar** → Server Component (static, fast)
- **NavTime** → Client Component (dynamic time)
- Prevents hydration issues by rendering time **only after mount**

---

## 👋 Welcome Screen Architecture

- **WelcomeScreen** → Server Component (layout & static copy)
- **WelcomeGreeting** → Client Component (dynamic greeting / effects)
- Avoids hydration mismatches by running **time- or state-based logic only on the client**

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

- Avoid hydration mismatch with time/date values
- Use **Server Components by default**
- Isolate browser-only logic in Client Components
- Prefer type inference over inline typing
- Use absolute paths for public assets

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
