/**
 * PORTFOLIO MA'LUMOTLARI
 * ----------------------------------------------------------------
 * O'z videolaringizni qo'shish uchun:
 *   1. Video faylni  public/videos/  papkasiga qo'ying   (masalan: public/videos/reklama-1.mp4)
 *   2. Muqova rasmini public/posters/ papkasiga qo'ying  (masalan: public/posters/reklama-1.jpg)
 *   3. Pastdagi ro'yxatda tegishli elementni yangilang:
 *        video:  '/videos/reklama-1.mp4',
 *        poster: '/posters/reklama-1.jpg',
 *        placeholder: false,
 *
 * `video` bo'sh (null) bo'lsa, kartada chiroyli namuna-preview ko'rsatiladi.
 * Tavsiya: videolar .mp4 (H.264), 9:16 format, 5–15 MB dan oshmasin.
 */

export const CATEGORIES = ['Commercial', 'Cinematic', '3D Animation', 'Product Ads', 'Business Ads']

// Kategoriya -> placeholder vizual uslubi
export const CATEGORY_THEME = {
  Commercial: 'commercial',
  Cinematic: 'cinematic',
  '3D Animation': 'animation',
  'Product Ads': 'product',
  'Business Ads': 'business',
}

export const PORTFOLIO = [
  { id: 'p1', title: 'Brend reklamasi', category: 'Commercial', video: null, poster: null, placeholder: true },
  { id: 'p2', title: 'Kinematik sahna', category: 'Cinematic', video: null, poster: null, placeholder: true },
  { id: 'p3', title: '3D qahramon animatsiyasi', category: '3D Animation', video: null, poster: null, placeholder: true },
  { id: 'p4', title: 'Premium mahsulot reklamasi', category: 'Product Ads', video: null, poster: null, placeholder: true },
  { id: 'p5', title: 'Biznes promo rolik', category: 'Business Ads', video: null, poster: null, placeholder: true, hue: 0 },
  { id: 'p6', title: 'Tungi shahar atmosferasi', category: 'Cinematic', video: null, poster: null, placeholder: true, hue: -40 },
  { id: 'p7', title: 'Mahsulot taqdimoti', category: 'Product Ads', video: null, poster: null, placeholder: true, hue: 60 },
  { id: 'p8', title: 'Reels uchun reklama', category: 'Commercial', video: null, poster: null, placeholder: true, hue: -50 },
]
