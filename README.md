# AINET — AI Video Creation

React + Vite + Tailwind CSS + Framer Motion + Lucide React.

## Ishga tushirish

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
```

## Asosiy sozlamalar

- **Narx, telefon, Instagram, Telegram** — `src/config/site.js`
  - Telegram hozir `null` → saytda "Tez orada" ko‘rinadi. Username bo‘lsa: `telegram: 'https://t.me/username'`
- **Portfolio videolari** — `src/data/portfolio.js`
  1. Videoni `public/videos/` ga, muqovani `public/posters/` ga qo‘ying
  2. Elementda `video: '/videos/nom.mp4'`, `poster: '/posters/nom.jpg'`, `placeholder: false` qiling

## Vercel’ga deploy

1. Loyihani GitHub’ga yuklang
2. vercel.com → **Add New Project** → repo’ni tanlang
3. Framework: **Vite** (avtomatik aniqlanadi) → **Deploy**

Domen ulangandan keyin `index.html` dagi `og:image` ni to‘liq manzilga almashtiring
(masalan `https://ainet.uz/og-image.png`) — ijtimoiy tarmoqlarda preview yaxshiroq chiqadi.
