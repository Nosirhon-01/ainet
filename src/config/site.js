// AINET — asosiy sozlamalar. Ma'lumotlarni faqat shu yerdan o'zgartiring.

export const SITE = {
  name: 'AINET',
  tagline: 'AI VIDEO CREATION',
  slogan: 'Your Imagination. Our AI.',

  // Narx (so'mda) — butun saytda shu qiymat ishlatiladi
  price: 55000,

  phone: {
    display: '+998 20 010 77 40',
    href: 'tel:+998200107740',
    raw: '+998200107740',
  },

  // Ijtimoiy tarmoqlar.
  // Havola `null` bo'lsa — sayt "Tez orada" holatini ko'rsatadi (buzilgan link bo'lmaydi).
  // Masalan: telegram: 'https://t.me/sizning_username'
  socials: {
    instagram: 'https://www.instagram.com/ainet77/',
    telegram: null,
  },
}

export const NAV_LINKS = [
  { href: '#ishlar', label: 'Ishlar' },
  { href: '#xizmatlar', label: 'Xizmatlar' },
  { href: '#narx', label: 'Narx' },
  { href: '#jarayon', label: 'Jarayon' },
  { href: '#aloqa', label: 'Aloqa' },
]

export const formatPrice = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
