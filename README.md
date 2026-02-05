# 💕 Valentine's Day Card

A fun, interactive Valentine's Day card where the "Yes" button grows bigger with each "No" click - making it impossible to refuse! 

## ✨ Features

- **Query Params**: Just add `?name=Sarah` to personalize
- **Interactive Design**: "No" button shrinks and eventually disappears
- **Smooth Animations**: Floating hearts, scaling buttons, fade effects
- **Mobile Responsive**: Looks great on all devices
- **Celebration Screen**: Special animation when they say yes!

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000?name=Sarah](http://localhost:3000?name=Sarah)

## 📦 Deploy to Vercel

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Using GitHub

1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Your site will be live at: `https://your-project.vercel.app?name=Sarah`

## 🎯 How to Use

Just add `?name=` to the URL:

- `yoursite.vercel.app?name=Sarah`
- `yoursite.vercel.app?name=Alex`
- `yoursite.vercel.app?name=Jane%20Smith` (URL encoded for spaces)

Share the link and watch the magic happen!

## 🎨 Customization Ideas

**Change Colors** (in `app/page.tsx`):
- Background gradient: `from-pink-300 via-purple-300 to-red-300`
- Yes button: `from-pink-500 to-red-500`

**Adjust Button Growth**:
- Line 27: `const yesButtonScale = 1 + (noClickCount * 0.3);` 
  - Increase `0.3` for faster growth

**Change Messages**:
- Lines 69-73: Edit the encouraging messages

## 📱 Example URLs

- `?name=Sarah`
- `?name=John`
- `?name=Alex%20Smith` (spaces need to be URL encoded)

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vercel** - Deployment platform

## 💡 Why Query Params?

Much simpler than dynamic routes! No weird folder naming, no bracket issues, just clean URLs.

---

Built with ❤️ for Valentine's Day
