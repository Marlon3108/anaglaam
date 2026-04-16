# 🌹 AnaGlaam — UGC Portfolio Website
> Documento de contexto del proyecto. Actualizar al finalizar cada módulo.

---

## 👤 Cliente

| Campo | Detalle |
|-------|---------|
| Nombre | Ana Dávila |
| Alias/Brand | `anaglaam` |
| Ubicación | Cali, Valle del Cauca, Colombia |
| Origen | Venezolana (7 años en Cali) |
| Email | anaglaam@gmail.com |
| Instagram | [@anaglaam](https://instagram.com/anaglaam) |
| TikTok | @anaglam8 |
| Nicho | Belleza: Makeup · Skincare · Nail · Curly Hair · Moda · Unboxing |

---

## 📊 Métricas (Media Kit — Abril 2026)

| Red | Métrica | Dato |
|-----|---------|------|
| Instagram | Seguidores | 1.5K |
| Instagram | Engagement rate | 3.67% |
| Instagram | Cuentas alcanzadas/mes | 3.140 |
| TikTok | Seguidores | 704 |
| TikTok | Video views este mes | 178K |
| Audiencia principal | Edad 25–34 | 42.5% |
| Audiencia secundaria | Edad 35–44 | 28.9% |

---

## 🎨 Diseño

### Paleta de colores
| Token | Hex | Uso |
|-------|-----|-----|
| `--color-primary` | `#660005` | CTAs, navbar, acentos fuertes |
| `--color-secondary` | `#DF8F9C` | Rosa palo, hover states, gradientes |
| `--color-cream` | `#FAF4D4` | Fondos principales |
| `--color-dark` | `#1A0000` | Textos sobre fondos claros |
| `--color-soft` | `#F2DFE3` | Fondos alternos de sección |
| `--color-white` | `#FFFFFF` | Cards, tarjetas |

### Tipografía
| Uso | Fuente |
|-----|--------|
| Títulos H1/H2 | **Bebas Neue** |
| Logo / branding | **Lobster** |
| Subtítulos / cuerpo editorial | **Playfair Display** |
| UI pequeño / labels | **Inter** |

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología | Notas |
|------|-----------|-------|
| Framework | Astro 6 | HTML estático, SEO perfecto |
| Estilos | Tailwind CSS v4 (via @tailwindcss/vite) | Sin tailwind.config.mjs — config en CSS |
| Animaciones | GSAP + AOS (npm) | GSAP hero, AOS scroll reveal |
| Hosting | Vercel (free) | Deploy desde GitHub, HTTPS + CDN |
| Fuentes | Google Fonts | Lobster, Bebas Neue, Playfair, Inter |
| Formulario | Formspree (free) | 50 envíos/mes |
| Feed social | Fouita Widget | Embed Instagram sin API |
| SEO | @astrojs/sitemap + astro-seo | Sitemap auto + meta tags |
| Imágenes | WebP + lazy loading | Optimización con <Image /> de Astro |

---

## 🗂️ Repositorio y Deploy

| Campo | Valor |
|-------|-------|
| GitHub | https://github.com/Marlon3108/anaglaam |
| Rama principal | `main` |
| Hosting | Vercel |
| URL actual | (agregar URL de Vercel aquí) |

---

## 📦 Dependencias instaladas

```bash
npm install astro-seo @astrojs/sitemap tailwindcss @tailwindcss/vite aos
npm install --save-dev @types/aos
```

---

## 📐 Arquitectura de Secciones

```
1.  Navbar           — Logo + links + CTA sticky + hamburger mobile
2.  Hero             — Headline GSAP + foto parallax + 2 CTAs
3.  Marquee          — Ticker animado de nichos
4.  ¿Qué es UGC?    — Card glassmorphism + texto
5.  Sobre Ana        — Foto + bio + badges
6.  Servicios        — Grid 6 cards con hover flip
7.  Estadísticas     — Contadores animados (CountUp.js)
8.  Portfolio        — Grid masonry filtrable + lightbox
9.  Feed Social      — Instagram (Fouita) + TikTok embeds
10. Colaboraciones   — Carrusel de logos de marcas
11. ¿Por qué Ana?   — Cards diferenciadoras
12. Contacto         — Formspree + email + redes
13. Footer           — Logo + links + copyright
```

---

## 🔍 SEO

### Convención de nombres de imágenes
```
ana-davila-ugc-creator-cali-colombia.webp
ana-glaam-hero-portrait.webp
ugc-creator-belleza-colombia-anaglaam.webp
colaboracion-marcas-ugc-cali-venezuela.webp
ana-glaam-makeup-skincare-content-creator.webp
```

### Meta title y description
```html
<title>Ana Dávila | UGC Creator de Belleza · Cali, Colombia</title>
<meta name="description" content="Creadora de contenido UGC especializada en
maquillaje, skincare y cuidado capilar. Venezolana en Cali. Conecta tu marca
con historias reales que convierten." />
```

### Keywords target
- ugc creator cali colombia
- creadora contenido ugc belleza colombia
- micro influencer maquillaje cali
- ugc creator skincare pelo rizado
- contenido para marcas de belleza colombia
- ana davila anaglaam

### Schema JSON-LD (Person)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ana Dávila",
  "alternateName": "anaglaam",
  "jobTitle": "UGC Content Creator",
  "address": { "addressLocality": "Cali", "addressCountry": "CO" },
  "email": "anaglaam@gmail.com",
  "sameAs": [
    "https://instagram.com/anaglaam",
    "https://tiktok.com/@anaglam8"
  ]
}
```

---

## 📁 Estructura del Proyecto

```
anaglaam/
├── public/
│   ├── images/
│   │   ├── ana-davila-ugc-creator-cali-colombia.webp
│   │   ├── ana-glaam-hero-portrait.webp
│   │   └── logos-marcas/
│   ├── robots.txt
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.astro          ✅
│   │   ├── Hero.astro
│   │   ├── Marquee.astro
│   │   ├── AboutSection.astro
│   │   ├── ServicesGrid.astro
│   │   ├── StatsSection.astro
│   │   ├── PortfolioGrid.astro
│   │   ├── SocialFeed.astro
│   │   ├── BrandsCarousel.astro
│   │   ├── ContactForm.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro      ✅
│   ├── styles/
│   │   └── global.css            ✅
│   └── pages/
│       └── index.astro
├── astro.config.mjs              ✅
└── package.json
```

---

## ⚙️ Decisiones técnicas importantes

- **Astro 6**: `@astrojs/tailwind` NO es compatible → se usa `@tailwindcss/vite` como plugin de Vite.
- **Tailwind v4**: La configuración de colores/fuentes/animaciones va en `src/styles/global.css` con `@theme {}`, no en `tailwind.config.mjs`.
- **AOS**: Instalado como npm (`aos` + `@types/aos`), NO desde CDN. Se importa en BaseLayout.
- **Sitemap**: Generado automáticamente por `@astrojs/sitemap` apuntando a `https://anaglaam.vercel.app`.
- **Imágenes**: Todas en `.webp` con nombres descriptivos para SEO. Usar `<Image />` de Astro.
- **Deploy**: Push a `main` → Vercel detecta Astro → deploy automático.

---

## ✅ Checkpoints de Progreso

| #  | Módulo / Componente                      | Estado       | Notas |
|----|------------------------------------------|--------------|-------|
| 0  | Repositorio GitHub + Vercel deploy       | ✅ Listo     | Rama: main |
| 1  | astro.config.mjs para Astro 6            | ✅ Listo     | @tailwindcss/vite, sin @astrojs/tailwind |
| 2  | global.css — tokens Tailwind v4          | ✅ Listo     | Colores, fuentes y animaciones |
| 3  | BaseLayout.astro — SEO + AOS             | ✅ Listo     | astro-seo, JSON-LD, Open Graph |
| 4  | Navbar.astro                             | ✅ Listo     | v3: fondo fijo, z-index fix, sin logo duplicado |
| 5  | Hero.astro + GSAP                        | ✅ Listo     | Parallax, floating cards, DOMContentLoaded |
| 6  | Marquee.astro                            | ✅ Listo     | Ticker #660005, fade lateral, 28s loop |
| 7  | WhatIsUGC.astro                          | ✅ Listo     | Dark section, 4 pasos, 2 stats |
| 8  | AboutSection.astro                       | ✅ Listo     | Marco decorativo, badges, audiencia |
| 9  | ServicesGrid.astro                       | ✅ Listo     | 6 cards hover lift, tags, CTA |
| 10 | StatsSection.astro                       | ✅ Listo     | Barras animadas, audiencia por edad |
| 11 | PortfolioGrid.astro                      | ✅ Listo     | Embeds TikTok + IG, filtros por categoría |
| 12 | BrandsCarousel.astro                     | ✅ Listo     | Scroll infinito CSS, placeholders logos |
| 13 | WhyAna.astro                             | ✅ Listo     | 6 cards diferenciales, quote CTA |
| 14 | SocialFeed.astro                         | ❌ Eliminado | Ana prefiere los 4 videos curados |
| 15 | ContactForm.astro                        | ⚠️ Parcial   | Falta Form ID de Formspree |
| 16 | Footer.astro                             | ✅ Listo     | 3 columnas, redes, nav, copyright |
| 17 | index.astro — integración final          | ⬜ Pendiente | |
| 18 | SEO final: sitemap + robots.txt          | ⬜ Pendiente | |
| 19 | Optimización WebP + Core Web Vitals      | ⬜ Pendiente | |

---

*Última actualización: Checkpoint 16 — Footer.astro ✅*
