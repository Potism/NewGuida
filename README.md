# ScuolaGuida.app - Landing Page

Una landing page moderna e professionale per ScuolaGuida.app, costruita con Next.js 14, Tailwind CSS e Framer Motion.

## 🚀 Caratteristiche Principali

- **Design Moderno**: Interfaccia pulita e professionale ottimizzata per le scuole guida italiane
- **Animazioni Fluide**: Utilizzo di Framer Motion per transizioni e animazioni coinvolgenti
- **Responsive**: Perfetta visualizzazione su tutti i dispositivi (mobile, tablet, desktop)
- **SEO Ottimizzato**: Metadata completi, sitemap, robots.txt e schema markup
- **Performance**: Core Web Vitals ottimizzati per velocità e prestazioni
- **Accessibilità**: Conformità WCAG 2.1 per l'accessibilità
- **TypeScript**: Codice type-safe per maggiore affidabilità

## 🛠️ Tecnologie Utilizzate

- **Framework**: Next.js 14 con App Router
- **Styling**: Tailwind CSS con design system personalizzato
- **Animazioni**: Framer Motion
- **Linguaggio**: TypeScript
- **Form**: React Hook Form
- **Icone**: Lucide React
- **Theme**: next-themes per supporto dark mode

## 📦 Installazione

1. Clona il repository:

```bash
git clone https://github.com/tuousername/scuolaguida-app.git
cd scuolaguida-app
```

2. Installa le dipendenze:

```bash
npm install
```

3. Avvia il server di sviluppo:

```bash
npm run dev
```

4. Apri [http://localhost:3000](http://localhost:3000) nel browser.

## 🏗️ Struttura del Progetto

```
src/
├── app/                    # App Router di Next.js
│   ├── globals.css        # Stili globali e utilities Tailwind
│   ├── layout.tsx         # Layout principale con metadata
│   └── page.tsx           # Homepage principale
├── components/
│   ├── ui/                # Componenti UI riutilizzabili
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── AccordionItem.tsx
│   │   └── GradientBackground.tsx
│   ├── layout/            # Componenti di layout
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/          # Sezioni della landing page
│       ├── HeroSection.tsx
│       ├── FeaturesSection.tsx
│       ├── BenefitsSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── PricingSection.tsx
│       ├── FAQSection.tsx
│       └── CTASection.tsx
├── lib/
│   └── utils.ts          # Utilities e varianti di animazione
└── public/               # Assets statici
    ├── sitemap.xml
    ├── robots.txt
    └── site.webmanifest
```

## 🎨 Design System

### Colori

- **Primary**: Blue (2563eb)
- **Secondary**: Purple (7c3aed)
- **Accent**: Amber (f59e0b)
- **Success**: Emerald (10b981)
- **Error**: Red (ef4444)
- **Neutral**: Slate (64748b)

### Tipografia

- **Font**: Inter (Google Fonts)
- **Scale**: text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl

### Animazioni

- **Fade In Up**: Entrata dal basso con fade
- **Stagger Children**: Animazioni scaglionate per liste
- **Scroll Triggered**: Animazioni attivate dallo scroll
- **Hover Effects**: Effetti hover con scale e shadow

## 📱 Sezioni della Landing Page

1. **Hero Section**: Headline principale, CTA e statistiche
2. **Features Section**: 4 funzionalità principali in grid
3. **Benefits Section**: Benefici con statistiche animate
4. **Testimonials**: Testimonianze clienti e social proof
5. **Pricing Section**: Piano unico con feature list
6. **FAQ Section**: Domande frequenti con accordion
7. **CTA Section**: Call-to-action finale con contatti

## ⚡ Performance

- **Lighthouse Score**: 90+ su tutte le metriche
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Bundle Size**: Ottimizzato con tree shaking
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting

## 🔧 Configurazione

### Tailwind CSS

Configurato con design system personalizzato in `tailwind.config.ts`:

- Colori estesi
- Font personalizzati
- Animazioni custom
- Utility classes

### Next.js

Configurato per performance ottimali in `next.config.js`:

- Image optimization
- Compression
- SWC minification

## 📈 SEO

- **Metadata**: Complete Open Graph e Twitter Cards
- **Structured Data**: Schema.org markup per business
- **Sitemap**: XML sitemap generato automaticamente
- **Robots.txt**: Configurazione per crawler
- **Web Manifest**: PWA ready

## 🚀 Deployment

### Vercel (Raccomandato)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload della cartella .next
```

### Docker

```bash
docker build -t scuolaguida-app .
docker run -p 3000:3000 scuolaguida-app
```

## 🧪 Testing

```bash
# Lint del codice
npm run lint

# Build di produzione
npm run build

# Test delle performance
npm run build && npm start
```

## 📝 Personalizzazione

### Modifica dei Contenuti

I contenuti sono facilmente modificabili nei file delle sezioni in `src/components/sections/`.

### Cambia Colori

Modifica i colori nel file `tailwind.config.ts` nella sezione `colors`.

### Aggiungi Sezioni

Crea nuovi componenti nella cartella `sections` e importali in `page.tsx`.

## 🤝 Contributi

Le contribuzioni sono benvenute! Per favore:

1. Fork del progetto
2. Crea un branch per la feature (`git checkout -b feature/AmazingFeature`)
3. Commit delle modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è sotto licenza MIT. Vedi `LICENSE` per maggiori dettagli.

## 📞 Supporto

Per supporto o domande:

- Email: info@scuolaguida.app
- Website: [scuolaguida.app](https://scuolaguida.app)

---

Costruito con ❤️ per le scuole guida italiane
