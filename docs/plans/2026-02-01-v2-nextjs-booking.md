# V2 Next.js Booking System Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Migrate efcoachsite from static HTML to Next.js 14 with integrated Cal.com booking system.

**Architecture:** Next.js App Router with TypeScript serves migrated pages. Cal.com cloud-hosted handles booking logic, payments (Stripe), calendar sync, and video links. Tailwind CSS for styling, preserving current design aesthetic.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Cal.com (embed), Google Fonts (Space Grotesk, Inter)

---

## Phase 1: Foundation

### Task 1: Initialize Next.js Project

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.js`, `tailwind.config.ts`, `postcss.config.js`
- Create: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`

**Step 1: Initialize Next.js with TypeScript and Tailwind**

```bash
cd /Users/jacobrozansky/efcoachsite/.worktrees/v2-booking
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

Select: Yes to all defaults when prompted.

**Step 2: Verify installation**

```bash
npm run dev
```

Expected: Server starts at http://localhost:3000, shows Next.js welcome page.

**Step 3: Stop dev server and commit**

```bash
git add -A
git commit -m "feat: initialize Next.js 14 with TypeScript and Tailwind

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

### Task 2: Configure Design Tokens

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`

**Step 1: Update Tailwind config with site colors and fonts**

Replace `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          dark: "#1d4ed8",
          light: "#3b82f6",
        },
        secondary: "#0f172a",
        accent: {
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
        },
        student: {
          primary: "#8b5cf6",
          secondary: "#ec4899",
          accent: "#06b6d4",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
    },
  },
  plugins: [],
};

export default config;
```

**Step 2: Update globals.css with base styles and fonts**

Replace `src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply font-body text-gray-800 bg-white leading-relaxed antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display font-semibold leading-tight text-gray-900;
  }

  h1 {
    @apply text-4xl md:text-5xl lg:text-6xl;
  }

  h2 {
    @apply text-3xl md:text-4xl;
  }

  h3 {
    @apply text-xl md:text-2xl;
  }

  a {
    @apply text-primary transition-colors duration-150;
  }

  a:hover {
    @apply text-primary-dark;
  }
}

@layer components {
  .container {
    @apply max-w-7xl mx-auto px-6;
  }

  .btn {
    @apply inline-flex items-center justify-center px-6 py-3 font-display font-medium text-base rounded-md border-none cursor-pointer transition-all duration-150;
  }

  .btn-primary {
    @apply bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-md;
  }

  .btn-secondary {
    @apply bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-800;
  }

  .btn-outline {
    @apply bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white;
  }
}
```

**Step 3: Verify styles work**

```bash
npm run dev
```

Visit http://localhost:3000 - page should load without errors.

**Step 4: Commit**

```bash
git add tailwind.config.ts src/app/globals.css
git commit -m "feat: configure Tailwind with site design tokens

Adds colors (primary blue, accent orange, student purple), fonts
(Space Grotesk, Inter), and base component styles.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

### Task 3: Create Layout with Navbar

**Files:**
- Create: `src/components/Navbar.tsx`
- Create: `src/components/ModeToggle.tsx`
- Modify: `src/app/layout.tsx`

**Step 1: Create ModeToggle component**

Create `src/components/ModeToggle.tsx`:

```tsx
"use client";

import { useState, useEffect } from "react";

export default function ModeToggle() {
  const [isStudentMode, setIsStudentMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("siteMode");
    if (saved === "student") {
      setIsStudentMode(true);
      document.body.classList.add("student-mode");
    }
  }, []);

  const toggle = () => {
    const newMode = !isStudentMode;
    setIsStudentMode(newMode);
    localStorage.setItem("siteMode", newMode ? "student" : "parent");
    document.body.classList.toggle("student-mode", newMode);
  };

  return (
    <div className="fixed top-4 right-6 z-[1001] flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
      <span className={`text-xs font-medium ${!isStudentMode ? "text-primary" : "text-gray-500"}`}>
        For Parents
      </span>
      <label className="relative w-12 h-6 cursor-pointer">
        <input
          type="checkbox"
          checked={isStudentMode}
          onChange={toggle}
          className="sr-only peer"
        />
        <div className="w-full h-full bg-primary rounded-full peer-checked:bg-student-primary transition-colors" />
        <div className="absolute top-[3px] left-[3px] w-[18px] h-[18px] bg-white rounded-full transition-transform peer-checked:translate-x-6" />
      </label>
      <span className={`text-xs font-medium ${isStudentMode ? "text-student-primary" : "text-gray-500"}`}>
        For Students
      </span>
    </div>
  );
}
```

**Step 2: Create Navbar component**

Create `src/components/Navbar.tsx`:

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/methodology", label: "Methodology" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Jacob" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-[1000] py-4 border-b border-gray-100">
      <div className="container flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 font-display font-bold text-2xl text-gray-900">
          <span className="text-3xl text-primary">♕</span>
          <span>Jacob<span className="text-primary">EF</span></span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-medium ${pathname === link.href ? "text-primary" : "text-gray-600 hover:text-primary"}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/book" className="btn btn-primary">
              Get Started
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-medium ${pathname === link.href ? "text-primary" : "text-gray-600"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/book" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
```

**Step 3: Update layout.tsx**

Replace `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ModeToggle from "@/components/ModeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacob Rozansky | Neuro-Performance Coaching San Diego",
  description: "Executive Function coaching through Improv, Chess, and Cubing for ADHD and neurodivergent students in San Diego.",
  keywords: "ADHD coaching San Diego, Executive Function coaching, Improv for ADHD, Chess tutor ADHD, neurodivergent coaching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ModeToggle />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
```

**Step 4: Verify components render**

```bash
npm run dev
```

Visit http://localhost:3000 - should see navbar with logo and navigation.

**Step 5: Commit**

```bash
mkdir -p src/components
git add src/components/Navbar.tsx src/components/ModeToggle.tsx src/app/layout.tsx
git commit -m "feat: add Navbar and ModeToggle components

Navbar with responsive mobile menu and active link highlighting.
ModeToggle persists parent/student preference to localStorage.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

### Task 4: Create Footer Component

**Files:**
- Create: `src/components/Footer.tsx`
- Modify: `src/app/layout.tsx`

**Step 1: Create Footer component**

Create `src/components/Footer.tsx`:

```tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-2xl text-white mb-4">
              <span className="text-3xl text-primary-light">♕</span>
              <span>Jacob<span className="text-primary-light">EF</span></span>
            </Link>
            <p className="text-sm">
              Neuro-Performance Coaching in San Diego. Executive function training through play.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/methodology" className="hover:text-white">Methodology</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/about" className="hover:text-white">About Jacob</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/book/coaching" className="hover:text-white">1:1 EF Coaching</Link></li>
              <li><Link href="/book/workshop" className="hover:text-white">Brain Games Workshops</Link></li>
              <li><Link href="/book/iep" className="hover:text-white">IEP Translation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">San Diego Based</h4>
            <p className="text-sm mb-4">
              Serving La Jolla, Del Mar, Pacific Beach, and greater San Diego County.
            </p>
            <Link href="/book" className="btn btn-outline text-sm px-4 py-2">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Jacob Rozansky | Neuro-Performance Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Add Footer to layout**

Update `src/app/layout.tsx` to add Footer after main:

```tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ModeToggle from "@/components/ModeToggle";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacob Rozansky | Neuro-Performance Coaching San Diego",
  description: "Executive Function coaching through Improv, Chess, and Cubing for ADHD and neurodivergent students in San Diego.",
  keywords: "ADHD coaching San Diego, Executive Function coaching, Improv for ADHD, Chess tutor ADHD, neurodivergent coaching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ModeToggle />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

**Step 3: Verify footer renders**

```bash
npm run dev
```

Visit http://localhost:3000 - scroll down to see footer.

**Step 4: Commit**

```bash
git add src/components/Footer.tsx src/app/layout.tsx
git commit -m "feat: add Footer component

Four-column footer with navigation, services, San Diego info,
and copyright.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Phase 2: Page Migration

### Task 5: Create Homepage Hero Section

**Files:**
- Create: `src/components/Hero.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create Hero component with parent/student modes**

Create `src/components/Hero.tsx`:

```tsx
"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* Parent Hero */}
      <section className="min-h-screen flex items-center pt-24 bg-gradient-to-br from-gray-50 to-white parent-content">
        <div className="container">
          <div className="max-w-2xl">
            <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
              San Diego&apos;s Play-Based EF Specialist
            </div>
            <h1 className="mb-6">
              Executive Function Coaching That{" "}
              <span className="text-primary">Actually Engages</span> Your Child
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              I combine Special Education expertise with Improv, Chess, and Speed Cubing
              to build focus, flexibility, and self-regulation—through methods kids actually enjoy.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/book/consult" className="btn btn-primary">
                Schedule a Free Consultation
              </Link>
              <Link href="/methodology" className="btn btn-secondary">
                See the Science
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-xl">🎓</span>
                <span>Special Education Background</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🎭</span>
                <span>Improv & Comedy Trained</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">♟</span>
                <span>Chess & Cubing Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Hero */}
      <section className="min-h-screen flex items-center pt-24 bg-gradient-to-br from-gray-50 to-white student-content hidden">
        <div className="container">
          <div className="max-w-2xl">
            <div className="inline-block bg-gradient-to-r from-student-primary to-student-secondary text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
              Level Up Your Brain
            </div>
            <h1 className="mb-6">
              Learn to{" "}
              <span className="bg-gradient-to-r from-student-primary to-student-secondary bg-clip-text text-transparent">
                Hack Your Own Brain
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Forget boring tutoring. We play chess, solve cubes, and do improv—while
              secretly training your brain to focus, plan, and crush it.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/book/consult" className="btn bg-gradient-to-r from-student-primary to-student-secondary text-white hover:opacity-90">
                Let&apos;s Go
              </Link>
              <Link href="#cube-challenge" className="btn bg-student-primary/10 text-student-primary hover:bg-student-primary/20">
                Free Cube Challenge
              </Link>
            </div>
            <div className="flex flex-wrap gap-8 text-center">
              <div>
                <span className="text-3xl block">♔</span>
                <span className="text-sm text-gray-500">Chess Puzzles</span>
              </div>
              <div>
                <span className="text-3xl block">🎲</span>
                <span className="text-sm text-gray-500">Brain Games</span>
              </div>
              <div>
                <span className="text-3xl block">🎤</span>
                <span className="text-sm text-gray-500">Improv Skills</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
```

**Step 2: Add student mode CSS to globals.css**

Add to end of `src/app/globals.css`:

```css
/* Student mode visibility */
.student-content {
  display: none;
}

.parent-content {
  display: flex;
}

body.student-mode .student-content {
  display: flex;
}

body.student-mode .parent-content {
  display: none;
}
```

**Step 3: Update page.tsx to use Hero**

Replace `src/app/page.tsx`:

```tsx
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
```

**Step 4: Verify hero renders and mode toggle works**

```bash
npm run dev
```

Visit http://localhost:3000 - hero should display, toggle should switch content.

**Step 5: Commit**

```bash
git add src/components/Hero.tsx src/app/page.tsx src/app/globals.css
git commit -m "feat: add Hero component with parent/student modes

Dual hero sections that toggle based on parent/student mode.
Parent view focuses on coaching value, student view is more playful.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

### Task 6: Create Problem Section Component

**Files:**
- Create: `src/components/ProblemSection.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create ProblemSection component**

Create `src/components/ProblemSection.tsx`:

```tsx
const problems = [
  {
    icon: "📚",
    title: '"They\'re so smart, but..."',
    description: "Your child aces tests when engaged but \"forgets\" to turn in homework. Their potential is obvious—so why isn't it showing up?",
  },
  {
    icon: "😰",
    title: "Tutoring feels like punishment",
    description: "You've tried tutors, but sitting through more \"school after school\" creates resistance, not results.",
  },
  {
    icon: "📄",
    title: "The IEP maze is overwhelming",
    description: "\"Preferential seating\" and \"extended time\" sound helpful—but you're not sure your child is getting what they actually need.",
  },
  {
    icon: "💡",
    title: "Executive Function is the missing piece",
    description: "It's not about being smarter. It's about planning, prioritizing, and following through—skills that can be trained.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <h2 className="text-center mb-12">Sound Familiar?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{problem.title}</h3>
              <p className="text-gray-600 text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Add to page.tsx**

Update `src/app/page.tsx`:

```tsx
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
    </>
  );
}
```

**Step 3: Verify section renders**

```bash
npm run dev
```

**Step 4: Commit**

```bash
git add src/components/ProblemSection.tsx src/app/page.tsx
git commit -m "feat: add ProblemSection component

Four pain point cards targeting parent concerns about ADHD,
tutoring resistance, IEPs, and executive function.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

### Task 7: Create Methodology Preview Component

**Files:**
- Create: `src/components/MethodologyPreview.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create MethodologyPreview component**

Create `src/components/MethodologyPreview.tsx`:

```tsx
import Link from "next/link";

const methods = [
  {
    icon: "🎭",
    title: 'The "Yes, And..." Framework',
    tool: "Improv Games",
    trains: "Cognitive Flexibility, Impulse Control, Active Listening",
    description: "Improv forces you to adapt in real-time. No scripts, no \"right answers\"—just learning to roll with whatever happens.",
    href: "/methodology#improv",
  },
  {
    icon: "♟",
    title: 'The "Checkmate" Protocol',
    tool: "Chess",
    trains: "Planning, Inhibition, Consequence Thinking",
    description: "Chess is a gym for impulse control. Every move teaches \"stop, think, then act\"—the exact skill ADHD brains need.",
    href: "/methodology#chess",
  },
  {
    icon: "🧩",
    title: 'The "Algorithm" Approach',
    tool: "Speed Cubing",
    trains: "Working Memory, Frustration Tolerance, Procedural Learning",
    description: "Solving a Rubik's cube proves that \"impossible\" is just a series of learnable steps. Essays, projects, life—same principle.",
    href: "/methodology#cubing",
  },
];

export default function MethodologyPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mb-4">
            The <span className="text-primary">Play-Based Neuroplasticity</span> Approach
          </h2>
          <p className="text-lg text-gray-600">
            I don&apos;t do &quot;more homework help.&quot; I train brains using activities
            that naturally build executive function—while being genuinely fun.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{method.title}</h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong className="text-gray-800">Tool:</strong> {method.tool}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong className="text-gray-800">Trains:</strong> {method.trains}
              </p>
              <p className="text-gray-600 text-sm mb-4">{method.description}</p>
              <Link href={method.href} className="text-primary font-medium text-sm hover:underline">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Add to page.tsx**

Update `src/app/page.tsx`:

```tsx
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import MethodologyPreview from "@/components/MethodologyPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <MethodologyPreview />
    </>
  );
}
```

**Step 3: Commit**

```bash
git add src/components/MethodologyPreview.tsx src/app/page.tsx
git commit -m "feat: add MethodologyPreview component

Three method cards (Improv, Chess, Cubing) with tools, skills
trained, and links to methodology page.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

### Task 8: Create Services Preview Component

**Files:**
- Create: `src/components/ServicesPreview.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create ServicesPreview component**

Create `src/components/ServicesPreview.tsx`:

```tsx
import Link from "next/link";

const services = [
  {
    tier: "Try It Out",
    title: "Saturday Brain Games",
    price: "$40",
    unit: "/session",
    description: "Group workshops featuring chess, cubing, and improv games. A low-commitment way to see if we're a good fit.",
    href: "/book/workshop",
    featured: false,
  },
  {
    tier: "Most Popular",
    title: "1:1 EF Coaching",
    price: "$180-225",
    unit: "/hour",
    description: "Personalized executive function coaching. Every session includes \"Brain Play\" time with chess, cube, or improv.",
    href: "/book/coaching",
    featured: true,
  },
  {
    tier: "For Parents",
    title: "IEP Translation",
    price: "$250",
    unit: "/meeting",
    description: "I attend IEP meetings with you and translate district-speak into plain English. Advocacy without the confusion.",
    href: "/book/iep",
    featured: false,
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <h2 className="text-center mb-12">How to Work Together</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg text-center border-2 transition-all ${
                service.featured
                  ? "bg-white border-primary scale-105 shadow-lg"
                  : "bg-gray-50 border-transparent"
              }`}
            >
              <div
                className={`inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4 ${
                  service.featured
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {service.tier}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">{service.price}</span>
                <span className="text-gray-500">{service.unit}</span>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link
                href={service.href}
                className={service.featured ? "btn btn-primary w-full" : "btn btn-outline w-full"}
              >
                {service.featured ? "Get Started" : "Learn More"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Add to page.tsx**

Update `src/app/page.tsx`:

```tsx
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import MethodologyPreview from "@/components/MethodologyPreview";
import ServicesPreview from "@/components/ServicesPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <MethodologyPreview />
      <ServicesPreview />
    </>
  );
}
```

**Step 3: Commit**

```bash
git add src/components/ServicesPreview.tsx src/app/page.tsx
git commit -m "feat: add ServicesPreview component

Three service tiers with pricing, linking to booking pages.
1:1 Coaching featured as most popular option.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

### Task 9: Create Testimonials Component

**Files:**
- Create: `src/components/Testimonials.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create Testimonials component**

Create `src/components/Testimonials.tsx`:

```tsx
const testimonials = [
  {
    quote: "For the first time, my son actually looks forward to his coaching sessions. Jacob gets him in a way traditional tutors never did.",
    author: "Parent, La Jolla",
  },
  {
    quote: "Jacob helped us understand our daughter's IEP and get accommodations that actually addressed her needs, not just paperwork.",
    author: "Parent, Del Mar",
  },
  {
    quote: "The chess sessions have taught my son to pause and think before acting—something we've been trying to teach him for years.",
    author: "Parent, Pacific Beach",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <h2 className="text-center mb-12">What Families Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="text-6xl text-primary opacity-20 absolute top-4 left-6 leading-none">
                &ldquo;
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                {testimonial.quote}
              </p>
              <div className="text-gray-500 text-sm">— {testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Add to page.tsx**

Update `src/app/page.tsx`:

```tsx
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import MethodologyPreview from "@/components/MethodologyPreview";
import ServicesPreview from "@/components/ServicesPreview";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <MethodologyPreview />
      <ServicesPreview />
      <Testimonials />
    </>
  );
}
```

**Step 3: Commit**

```bash
git add src/components/Testimonials.tsx src/app/page.tsx
git commit -m "feat: add Testimonials component

Three parent testimonials from La Jolla, Del Mar, Pacific Beach.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

### Task 10: Create CTA Component and Complete Homepage

**Files:**
- Create: `src/components/CTA.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create CTA component**

Create `src/components/CTA.tsx`:

```tsx
import Link from "next/link";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "dark" | "primary";
}

export default function CTA({
  title = "Ready to Try a Different Approach?",
  description = "Book a free 20-minute call. We'll talk about your child, your goals, and whether play-based coaching is the right fit.",
  buttonText = "Schedule Your Free Call",
  buttonHref = "/book/consult",
  variant = "dark",
}: CTAProps) {
  const bgClass = variant === "dark"
    ? "bg-gradient-to-br from-gray-900 to-gray-800"
    : "bg-gradient-to-br from-primary to-primary-dark";

  return (
    <section className={`py-24 ${bgClass} text-white text-center`}>
      <div className="container">
        <h2 className="text-white mb-4">{title}</h2>
        <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">{description}</p>
        <Link href={buttonHref} className="btn btn-primary text-lg px-8 py-4">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
```

**Step 2: Update page.tsx with final CTA**

Update `src/app/page.tsx`:

```tsx
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import MethodologyPreview from "@/components/MethodologyPreview";
import ServicesPreview from "@/components/ServicesPreview";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <MethodologyPreview />
      <ServicesPreview />
      <Testimonials />
      <CTA />
    </>
  );
}
```

**Step 3: Verify complete homepage**

```bash
npm run dev
```

Visit http://localhost:3000 - full homepage should render with all sections.

**Step 4: Commit**

```bash
git add src/components/CTA.tsx src/app/page.tsx
git commit -m "feat: add CTA component and complete homepage

Reusable CTA with dark/primary variants. Homepage now includes
all sections: Hero, Problem, Methodology, Services, Testimonials, CTA.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Phase 3: Booking Pages

### Task 11: Create Booking Hub Page

**Files:**
- Create: `src/app/book/page.tsx`
- Create: `src/components/BookingCard.tsx`

**Step 1: Create BookingCard component**

Create `src/components/BookingCard.tsx`:

```tsx
import Link from "next/link";

interface BookingCardProps {
  icon: string;
  title: string;
  duration: string;
  price: string;
  description: string;
  href: string;
  featured?: boolean;
}

export default function BookingCard({
  icon,
  title,
  duration,
  price,
  description,
  href,
  featured = false,
}: BookingCardProps) {
  return (
    <Link
      href={href}
      className={`block p-6 rounded-xl border-2 transition-all hover:shadow-lg hover:-translate-y-1 ${
        featured
          ? "border-primary bg-white shadow-md"
          : "border-gray-200 bg-gray-50 hover:border-primary"
      }`}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
        <span>⏱ {duration}</span>
        <span className="font-semibold text-gray-900">{price}</span>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <span className="text-primary font-medium text-sm">
        Book Now →
      </span>
    </Link>
  );
}
```

**Step 2: Create booking hub page**

Create `src/app/book/page.tsx`:

```tsx
import BookingCard from "@/components/BookingCard";

const services = [
  {
    icon: "📞",
    title: "Free Consultation",
    duration: "20 min",
    price: "Free",
    description: "Let's talk about your child, your goals, and whether play-based coaching is the right fit.",
    href: "/book/consult",
    featured: false,
  },
  {
    icon: "🧠",
    title: "1:1 EF Coaching",
    duration: "60 min",
    price: "$200",
    description: "Personalized executive function coaching with chess, cubing, or improv \"Brain Play\" time.",
    href: "/book/coaching",
    featured: true,
  },
  {
    icon: "🎲",
    title: "Saturday Workshop",
    duration: "90 min",
    price: "$40",
    description: "Group brain games session at Liberty Station. Great way to try out the approach.",
    href: "/book/workshop",
    featured: false,
  },
  {
    icon: "📋",
    title: "IEP Translation",
    duration: "60 min",
    price: "$250",
    description: "I attend your IEP meeting and translate district-speak into plain English.",
    href: "/book/iep",
    featured: false,
  },
];

export default function BookPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="mb-4">Book a Session</h1>
          <p className="text-xl text-gray-600">
            Choose a service below to see available times and book instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <BookingCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>All sessions include automatic calendar invites and reminders.</p>
          <p>Virtual sessions include Zoom link. 48-hour cancellation policy.</p>
        </div>
      </div>
    </div>
  );
}
```

**Step 3: Verify booking hub**

```bash
npm run dev
```

Visit http://localhost:3000/book - should show 4 service cards.

**Step 4: Commit**

```bash
mkdir -p src/app/book
git add src/components/BookingCard.tsx src/app/book/page.tsx
git commit -m "feat: add booking hub page

Four bookable services: Free Consult, 1:1 Coaching, Workshop, IEP.
Each links to service-specific booking page.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

### Task 12: Create Cal.com Embed Component

**Files:**
- Create: `src/components/CalEmbed.tsx`

**Step 1: Install Cal.com embed package**

```bash
npm install @calcom/embed-react
```

**Step 2: Create CalEmbed component**

Create `src/components/CalEmbed.tsx`:

```tsx
"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface CalEmbedProps {
  calLink: string;
  config?: {
    layout?: "month_view" | "week_view" | "column_view";
    theme?: "light" | "dark" | "auto";
  };
}

export default function CalEmbed({ calLink, config }: CalEmbedProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: config?.theme || "light",
        styles: {
          branding: {
            brandColor: "#2563eb",
          },
        },
        hideEventTypeDetails: false,
      });
    })();
  }, [config?.theme]);

  return (
    <Cal
      calLink={calLink}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{
        layout: config?.layout || "month_view",
      }}
    />
  );
}
```

**Step 3: Commit**

```bash
git add package.json package-lock.json src/components/CalEmbed.tsx
git commit -m "feat: add CalEmbed component

Wrapper around @calcom/embed-react with site branding colors.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

### Task 13: Create Service-Specific Booking Pages

**Files:**
- Create: `src/app/book/[service]/page.tsx`

**Step 1: Create dynamic booking page**

Create `src/app/book/[service]/page.tsx`:

```tsx
import { notFound } from "next/navigation";
import CalEmbed from "@/components/CalEmbed";
import Link from "next/link";

const serviceConfig: Record<string, {
  title: string;
  description: string;
  calLink: string;
  duration: string;
  price: string;
}> = {
  consult: {
    title: "Free Consultation",
    description: "20-minute video call to discuss your child's needs and see if we're a good fit.",
    calLink: "jacobrozansky/free-consultation",
    duration: "20 min",
    price: "Free",
  },
  coaching: {
    title: "1:1 EF Coaching",
    description: "Personalized executive function coaching with \"Brain Play\" time.",
    calLink: "jacobrozansky/ef-coaching",
    duration: "60 min",
    price: "$200",
  },
  workshop: {
    title: "Saturday Brain Games",
    description: "Group workshop at Liberty Station with chess, cubing, and improv games.",
    calLink: "jacobrozansky/saturday-workshop",
    duration: "90 min",
    price: "$40",
  },
  iep: {
    title: "IEP Translation",
    description: "I attend your IEP meeting and help you understand and advocate for your child.",
    calLink: "jacobrozansky/iep-translation",
    duration: "60 min",
    price: "$250",
  },
};

export function generateStaticParams() {
  return Object.keys(serviceConfig).map((service) => ({ service }));
}

export default function BookingPage({
  params,
}: {
  params: { service: string };
}) {
  const config = serviceConfig[params.service];

  if (!config) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <Link href="/book" className="text-primary hover:underline mb-6 inline-block">
          ← Back to all services
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h1 className="text-3xl mb-4">{config.title}</h1>
            <p className="text-gray-600 mb-6">{config.description}</p>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-500">Duration</span>
                <span className="font-medium">{config.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Price</span>
                <span className="font-medium">{config.price}</span>
              </div>
            </div>

            <div className="text-sm text-gray-500 space-y-2">
              <p>✓ Instant confirmation</p>
              <p>✓ Calendar invite sent automatically</p>
              <p>✓ Zoom link for virtual sessions</p>
              <p>✓ 48-hour free cancellation</p>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-4 min-h-[600px]">
            <CalEmbed calLink={config.calLink} />
          </div>
        </div>
      </div>
    </div>
  );
}
```

**Step 2: Verify booking pages work**

```bash
npm run dev
```

Visit:
- http://localhost:3000/book/consult
- http://localhost:3000/book/coaching
- http://localhost:3000/book/workshop
- http://localhost:3000/book/iep

Each should show service info + Cal.com embed placeholder.

**Step 3: Commit**

```bash
mkdir -p "src/app/book/[service]"
git add "src/app/book/[service]/page.tsx"
git commit -m "feat: add service-specific booking pages

Dynamic route for consult, coaching, workshop, iep services.
Each shows service details and Cal.com embed.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

### Task 14: Update All CTAs to Link to Booking

**Files:**
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/ServicesPreview.tsx`
- Modify: `src/components/Footer.tsx`

**Step 1: Verify all booking links are correct**

Review components - Hero, ServicesPreview, Footer should already link to `/book/*` routes.

**Step 2: Test all booking CTAs**

```bash
npm run dev
```

Click through:
- Hero "Schedule a Free Consultation" → `/book/consult`
- Services "Get Started" (1:1) → `/book/coaching`
- Services "Learn More" (Workshop) → `/book/workshop`
- Services "Learn More" (IEP) → `/book/iep`
- Footer "Get in Touch" → `/book`
- Navbar "Get Started" → `/book`

**Step 3: Commit any fixes if needed**

```bash
git add -A
git commit -m "fix: verify all CTAs link to booking pages

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Phase 4: Remaining Pages

### Task 15: Create Methodology Page

**Files:**
- Create: `src/app/methodology/page.tsx`

**Step 1: Create methodology page**

Create `src/app/methodology/page.tsx`:

```tsx
import Link from "next/link";
import CTA from "@/components/CTA";

export default function MethodologyPage() {
  return (
    <>
      <div className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container text-center">
          <h1 className="mb-4">The Science Behind the Play</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every game and activity is backed by research on executive function and neuroplasticity.
            Fun isn&apos;t fluff—it&apos;s the mechanism.
          </p>
        </div>
      </div>

      {/* EF Explainer */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-center mb-8">What is Executive Function?</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Executive function is your brain&apos;s CEO—the set of mental skills that help you
            plan, focus, remember instructions, and juggle multiple tasks. Kids with ADHD often
            have the intelligence but struggle with the execution.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🎯", title: "Inhibition", desc: "Stopping before acting impulsively" },
              { icon: "🔄", title: "Flexibility", desc: "Adapting when plans change" },
              { icon: "📝", title: "Working Memory", desc: "Holding information while using it" },
              { icon: "📅", title: "Planning", desc: "Breaking goals into steps" },
              { icon: "⏰", title: "Time Management", desc: "Estimating and allocating time" },
              { icon: "💭", title: "Metacognition", desc: "Thinking about your thinking" },
            ].map((skill, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-600">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Improv Section */}
      <section id="improv" className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm mb-4">Method 1</span>
          <h2 className="mb-2">The &quot;Yes, And...&quot; Framework</h2>
          <h3 className="text-xl text-gray-500 font-normal mb-8">Improv Games for Cognitive Flexibility</h3>

          <div className="bg-white p-6 rounded-lg border-l-4 border-primary mb-8">
            <h4 className="text-primary font-semibold mb-2">The Science</h4>
            <p className="text-gray-700">
              Improv requires rapid cognitive shifting and inhibition of planned responses.
              Research shows it improves divergent thinking and reduces anxiety around &quot;mistakes.&quot;
            </p>
          </div>

          <h4 className="font-semibold mb-4">What It Trains:</h4>
          <ul className="space-y-2 mb-8">
            <li className="flex gap-3"><span className="text-primary">→</span><span><strong>Cognitive Flexibility:</strong> Adapting to unexpected inputs</span></li>
            <li className="flex gap-3"><span className="text-primary">→</span><span><strong>Impulse Control:</strong> Listening before responding</span></li>
            <li className="flex gap-3"><span className="text-primary">→</span><span><strong>Active Listening:</strong> Building on what others say</span></li>
          </ul>
        </div>
      </section>

      {/* Chess Section */}
      <section id="chess" className="py-16 bg-white">
        <div className="container max-w-4xl">
          <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm mb-4">Method 2</span>
          <h2 className="mb-2">The &quot;Checkmate&quot; Protocol</h2>
          <h3 className="text-xl text-gray-500 font-normal mb-8">Chess for Planning and Inhibition</h3>

          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary mb-8">
            <h4 className="text-primary font-semibold mb-2">The Science</h4>
            <p className="text-gray-700">
              Chess activates the prefrontal cortex—the same area responsible for executive function.
              Studies show regular chess practice improves planning, working memory, and impulse control.
            </p>
          </div>

          <h4 className="font-semibold mb-4">What It Trains:</h4>
          <ul className="space-y-2 mb-8">
            <li className="flex gap-3"><span className="text-primary">→</span><span><strong>Planning:</strong> Thinking multiple moves ahead</span></li>
            <li className="flex gap-3"><span className="text-primary">→</span><span><strong>Inhibition:</strong> Resisting impulsive moves</span></li>
            <li className="flex gap-3"><span className="text-primary">→</span><span><strong>Consequence Thinking:</strong> Evaluating outcomes before acting</span></li>
          </ul>
        </div>
      </section>

      {/* Cubing Section */}
      <section id="cubing" className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm mb-4">Method 3</span>
          <h2 className="mb-2">The &quot;Algorithm&quot; Approach</h2>
          <h3 className="text-xl text-gray-500 font-normal mb-8">Speed Cubing for Working Memory</h3>

          <div className="bg-white p-6 rounded-lg border-l-4 border-primary mb-8">
            <h4 className="text-primary font-semibold mb-2">The Science</h4>
            <p className="text-gray-700">
              Solving a Rubik&apos;s cube requires memorizing algorithms and applying them in sequence.
              This directly exercises working memory and teaches frustration tolerance through achievable challenge.
            </p>
          </div>

          <h4 className="font-semibold mb-4">What It Trains:</h4>
          <ul className="space-y-2 mb-8">
            <li className="flex gap-3"><span className="text-primary">→</span><span><strong>Working Memory:</strong> Holding algorithms while executing</span></li>
            <li className="flex gap-3"><span className="text-primary">→</span><span><strong>Frustration Tolerance:</strong> Persisting through difficulty</span></li>
            <li className="flex gap-3"><span className="text-primary">→</span><span><strong>Procedural Learning:</strong> Breaking &quot;impossible&quot; into learnable steps</span></li>
          </ul>
        </div>
      </section>

      <CTA
        title="Ready to See It in Action?"
        description="Book a free consultation and let's talk about which approach fits your child best."
        buttonText="Schedule Free Consultation"
        buttonHref="/book/consult"
      />
    </>
  );
}
```

**Step 2: Verify page renders**

```bash
npm run dev
```

Visit http://localhost:3000/methodology

**Step 3: Commit**

```bash
mkdir -p src/app/methodology
git add src/app/methodology/page.tsx
git commit -m "feat: add Methodology page

Explains EF skills and three training methods: Improv, Chess, Cubing.
Each section anchored for deep linking from homepage.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

### Task 16: Create Services Page

**Files:**
- Create: `src/app/services/page.tsx`

**Step 1: Create services page**

Create `src/app/services/page.tsx`:

```tsx
import Link from "next/link";
import CTA from "@/components/CTA";

export default function ServicesPage() {
  return (
    <>
      <div className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container text-center">
          <h1 className="mb-4">Services & Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From group workshops to intensive 1:1 coaching, find the right level of support for your family.
          </p>
        </div>
      </div>

      {/* Workshop Tier */}
      <section id="workshops" className="py-16 bg-white">
        <div className="container max-w-5xl">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-gray-300">01</span>
              <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold uppercase">Try It Out</span>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="mb-2">Saturday Brain Games</h2>
                <p className="text-gray-600 mb-6">
                  Group workshops featuring chess, speed cubing, and improv games.
                  A low-commitment way to experience the methodology and see if we&apos;re a good fit.
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$40</span>
                  <span className="text-gray-500">/session</span>
                </div>
                <h4 className="font-semibold mb-3">What&apos;s Included:</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• 90-minute group session (4-8 kids)</li>
                  <li>• All three modalities: Chess, Cubing, Improv</li>
                  <li>• Parent observation welcome</li>
                  <li>• Liberty Station location</li>
                </ul>
                <Link href="/book/workshop" className="btn btn-outline">Book Workshop</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Tier */}
      <section id="coaching" className="py-16 bg-gray-50">
        <div className="container max-w-5xl">
          <div className="bg-white rounded-2xl p-8 border-2 border-primary shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-gray-300">02</span>
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold uppercase">Most Popular</span>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="mb-2">1:1 EF Coaching</h2>
                <p className="text-gray-600 mb-6">
                  Personalized executive function coaching tailored to your child&apos;s specific needs.
                  Every session includes &quot;Brain Play&quot; time with chess, cube, or improv.
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$180-225</span>
                  <span className="text-gray-500">/hour</span>
                </div>
                <h4 className="font-semibold mb-3">What&apos;s Included:</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• 60-minute personalized session</li>
                  <li>• Custom EF skill-building exercises</li>
                  <li>• &quot;Brain Play&quot; with chess/cube/improv</li>
                  <li>• Parent check-in and homework tips</li>
                  <li>• In-person or virtual options</li>
                </ul>
                <Link href="/book/coaching" className="btn btn-primary">Book Coaching Session</Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Packages</h4>
                <div className="space-y-4">
                  <div className="border border-primary rounded-lg p-4 relative">
                    <span className="absolute -top-2 left-4 bg-primary text-white text-xs px-2 py-0.5 rounded">Recommended</span>
                    <h5 className="font-semibold">8-Session Package</h5>
                    <p className="text-xl font-bold text-primary">$1,600</p>
                    <p className="text-sm text-gray-500">$200/session (save $200)</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h5 className="font-semibold">4-Session Package</h5>
                    <p className="text-xl font-bold">$840</p>
                    <p className="text-sm text-gray-500">$210/session (save $60)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IEP Tier */}
      <section id="iep" className="py-16 bg-white">
        <div className="container max-w-5xl">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-gray-300">03</span>
              <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold uppercase">For Parents</span>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="mb-2">IEP Translation</h2>
                <p className="text-gray-600 mb-6">
                  I attend IEP meetings with you and translate district-speak into plain English.
                  Advocacy without the confusion.
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$250</span>
                  <span className="text-gray-500">/meeting</span>
                </div>
                <h4 className="font-semibold mb-3">What&apos;s Included:</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Pre-meeting IEP review</li>
                  <li>• Attend meeting with you (in-person or virtual)</li>
                  <li>• Real-time translation of district language</li>
                  <li>• Post-meeting summary and recommendations</li>
                </ul>
                <Link href="/book/iep" className="btn btn-outline">Book IEP Support</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Consult */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-3xl text-center">
          <h2 className="mb-4">Not Sure Where to Start?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Book a free 20-minute consultation. We&apos;ll talk about your child&apos;s needs
            and I&apos;ll recommend the right service.
          </p>
          <Link href="/book/consult" className="btn btn-primary text-lg px-8 py-4">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
```

**Step 2: Verify page renders**

```bash
npm run dev
```

Visit http://localhost:3000/services

**Step 3: Commit**

```bash
mkdir -p src/app/services
git add src/app/services/page.tsx
git commit -m "feat: add Services page

Three service tiers with detailed pricing and packages.
All CTAs link to booking pages.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

### Task 17: Create About Page

**Files:**
- Create: `src/app/about/page.tsx`

**Step 1: Create about page**

Create `src/app/about/page.tsx`:

```tsx
import Link from "next/link";
import CTA from "@/components/CTA";

export default function AboutPage() {
  return (
    <>
      <div className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <h1 className="mb-4">Hi, I&apos;m Jacob Rozansky</h1>
              <p className="text-xl text-gray-600">
                San Diego&apos;s play-based executive function coach for neurodivergent kids.
                Special educator turned EF specialist. Chess player, cuber, improv nerd.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gray-200 rounded-2xl flex flex-col items-center justify-center text-gray-400">
                <span className="text-6xl mb-2">👤</span>
                <span className="text-sm">Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <h2 className="mb-8">My Story</h2>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-primary mb-3">The Special Ed Years</h3>
              <p>
                I started my career in special education classrooms, where I saw firsthand how
                brilliant kids got labeled as &quot;lazy&quot; or &quot;unmotivated&quot; simply because their brains
                worked differently. I watched them struggle with traditional interventions—more
                worksheets, more structure, more &quot;trying harder.&quot;
              </p>
            </div>

            <div>
              <h3 className="text-primary mb-3">The Discovery</h3>
              <p>
                Then I noticed something: the same kids who couldn&apos;t sit through homework would
                hyperfocus for hours on chess puzzles. Kids who &quot;couldn&apos;t follow instructions&quot;
                would memorize complex Rubik&apos;s cube algorithms. The &quot;impulsive&quot; ones thrived in
                improv games where there was no wrong answer.
              </p>
            </div>

            <div>
              <h3 className="text-primary mb-3">The Approach</h3>
              <p>
                I started building a methodology around what actually worked. Play-based,
                engagement-first, backed by neuroscience. Not &quot;tricking&quot; kids into learning—but
                meeting their brains where they naturally thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-4">What I Bring</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-4">Special Education</h3>
              <p className="text-gray-600 mb-4">
                Years in SPED classrooms. I understand IEPs, 504s, and how to actually get
                accommodations that work—not just checkboxes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold mb-4">Improv & Comedy</h3>
              <p className="text-gray-600 mb-4">
                Trained in improv comedy. I use these skills to connect with kids, reduce
                anxiety around &quot;mistakes,&quot; and build cognitive flexibility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">♟️</div>
              <h3 className="text-xl font-semibold mb-4">Chess & Cubing</h3>
              <p className="text-gray-600 mb-4">
                Competitive chess player and speed cuber. I teach these not as hobbies but as
                tools for building executive function.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-center mb-12">My Coaching Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Meet Kids Where They Are", desc: "Not where we wish they were. Engagement first, skill-building follows." },
              { num: "02", title: "Play Is the Work", desc: "Fun isn't a reward—it's the mechanism. Brains learn better when they're enjoying themselves." },
              { num: "03", title: "Skills Transfer", desc: "The goal isn't to be good at chess. It's to take the thinking patterns and apply them everywhere." },
              { num: "04", title: "Parents Are Partners", desc: "You know your child best. I provide tools and strategies; you help implement them at home." },
            ].map((item) => (
              <div key={item.num} className="bg-gray-50 p-6 border-l-4 border-primary">
                <span className="text-2xl font-bold text-primary opacity-50">{item.num}</span>
                <h3 className="text-lg font-semibold mt-2 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* San Diego */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="mb-4">San Diego Based</h2>
          <p className="text-lg text-gray-600 mb-8">
            I&apos;m a San Diego local. I know SDUSD, the local private schools, and the
            neurodivergent community here. I&apos;m not a faceless national agency—I&apos;m your neighbor.
          </p>
          <div className="bg-white p-6 rounded-lg">
            <h4 className="font-semibold mb-4">Areas Served</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {["La Jolla", "Del Mar", "Pacific Beach", "Point Loma", "Scripps Ranch", "Carmel Valley", "Encinitas", "Carlsbad"].map((area) => (
                <span key={area} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">{area}</span>
              ))}
            </div>
            <p className="text-sm text-gray-500">In-person and virtual sessions available throughout San Diego County.</p>
          </div>
        </div>
      </section>

      <CTA
        title="Let's Talk"
        description="Book a free 20-minute call. Tell me about your child, and I'll tell you if I can help."
        buttonText="Schedule Free Call"
        buttonHref="/book/consult"
      />
    </>
  );
}
```

**Step 2: Commit**

```bash
mkdir -p src/app/about
git add src/app/about/page.tsx
git commit -m "feat: add About page

Jacob's story, skills, coaching philosophy, and San Diego areas served.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

### Task 18: Create Contact Page

**Files:**
- Create: `src/app/contact/page.tsx`

**Step 1: Create contact page**

Create `src/app/contact/page.tsx`:

```tsx
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            Ready to start? Book a session. Have questions? Send a message.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link
            href="/book/consult"
            className="bg-white border-2 border-primary p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl mb-3">📞</div>
            <h3 className="font-semibold mb-2">Book a Call</h3>
            <p className="text-sm text-gray-600 mb-4">Free 20-min consultation to discuss your child&apos;s needs.</p>
            <span className="text-primary font-medium">Schedule Now →</span>
          </Link>

          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-gray-600 mb-4">For general inquiries or questions before booking.</p>
            <a href="mailto:jacob@efcoach.com" className="text-primary font-medium">jacob@efcoach.com</a>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-sm text-gray-600 mb-4">In-person sessions available throughout San Diego.</p>
            <span className="text-gray-700">San Diego, CA</span>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-2 text-gray-700">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-medium mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block font-medium mb-2 text-gray-700">Subject</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary bg-white">
                <option>General Question</option>
                <option>Coaching Inquiry</option>
                <option>Workshop Information</option>
                <option>IEP Support</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-2 text-gray-700">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Tell me about your child and what you're looking for..."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            I typically respond within 24-48 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
```

**Step 2: Commit**

```bash
mkdir -p src/app/contact
git add src/app/contact/page.tsx
git commit -m "feat: add Contact page

Booking CTA, email, location info, and contact form.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Phase 5: Final Polish

### Task 19: Add Loading States and Error Handling

**Files:**
- Create: `src/app/loading.tsx`
- Create: `src/app/not-found.tsx`
- Create: `src/app/book/[service]/loading.tsx`

**Step 1: Create global loading component**

Create `src/app/loading.tsx`:

```tsx
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-primary rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-500">Loading...</p>
      </div>
    </div>
  );
}
```

**Step 2: Create 404 page**

Create `src/app/not-found.tsx`:

```tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-200 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  );
}
```

**Step 3: Create booking loading state**

Create `src/app/book/[service]/loading.tsx`:

```tsx
export default function BookingLoading() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
          </div>
          <div className="lg:col-span-2 bg-gray-100 rounded-xl min-h-[600px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-primary rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-500">Loading calendar...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

**Step 4: Commit**

```bash
git add src/app/loading.tsx src/app/not-found.tsx "src/app/book/[service]/loading.tsx"
git commit -m "feat: add loading states and 404 page

Global loading spinner, booking calendar loading state, and
custom 404 page.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

### Task 20: Final Verification and Build Test

**Step 1: Run production build**

```bash
npm run build
```

Expected: Build succeeds without errors.

**Step 2: Test production build locally**

```bash
npm run start
```

Visit http://localhost:3000 and test:
- All pages load
- Navigation works
- Mode toggle works
- Booking pages load
- Mobile responsive

**Step 3: Final commit**

```bash
git add -A
git commit -m "chore: verify production build

All pages building successfully, ready for deployment.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Deployment Notes

### Vercel Deployment

```bash
npm i -g vercel
vercel
```

### Cal.com Setup (Manual Steps)

1. Create account at cal.com
2. Create 4 event types matching the service config
3. Connect Stripe for payments
4. Connect Google Calendar for availability
5. Configure Zoom integration
6. Update `calLink` values in `/book/[service]/page.tsx` with actual Cal.com links
7. Style embed with brand colors in Cal.com settings

### Environment Variables

None required for basic setup. Cal.com embed works client-side.

---

## Summary

This plan creates a complete Next.js 14 site with:
- 5 migrated pages (Home, Methodology, Services, About, Contact)
- 4 new booking pages with Cal.com integration
- Reusable component library
- Parent/Student mode toggle
- Mobile-responsive design
- Production-ready build

Total estimated tasks: 20
Total estimated commits: ~25
