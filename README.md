// Setup Instructions (README.md)
# Healthcare Platform - Setup Guide

## Quick Start

1. **Create Next.js Project**
```bash
npx create-next-app@latest healthcare-platform --typescript --tailwind --app
cd healthcare-platform
```

2. **Install Dependencies**
```bash
npm install framer-motion lucide-react @radix-ui/react-accordion @radix-ui/react-dialog clsx tailwind-merge
```

3. **Update tailwind.config.ts**
Replace the default config with the one provided in the project structure document.

4. **Add Custom Fonts**
Add to your app/layout.tsx:
```typescript
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})
```

5. **Copy Component Files**
Copy all component files from the provided structure into their respective directories.

6. **Update globals.css**
Replace the default globals.css with the provided styles.

7. **Run Development Server**
```bash
npm run dev
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with navigation
│   ├── page.tsx         # Homepage with all sections
│   └── globals.css      # Global styles and animations
├── components/
│   ├── layout/          # Navigation and footer
│   ├── sections/        # Page sections (Hero, Services, etc.)
│   ├── ui/              # Reusable UI components
│   └── intake/          # Assessment flow components
└── lib/
    ├── constants.ts     # Site data and configuration
    └── utils.ts         # Utility functions
```

## Customization

### Colors
Edit the color scheme in `tailwind.config.ts`:
- Primary: Deep Blue (#1E3A8A)
- Secondary: Sky Blue (#3B82F6)  
- Accent: Emerald Green (#10B981)

### Content
Update content in `lib/constants.ts`:
- Services
- Pricing plans
- Testimonials
- FAQ items
- Trust badges

### Animations
Animations are defined in:
- `tailwind.config.ts` - Keyframe animations
- `globals.css` - Custom animations
- Components - Framer Motion animations

## Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Features

✅ Fully responsive design
✅ Modern animations and interactions
✅ Accessibility compliant
✅ SEO optimized
✅ TypeScript support
✅ Tailwind CSS styling
✅ Component-based architecture
✅ Performance optimized

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari 14+
- Edge (latest)
- Mobile browsers

## Performance Tips

1. Use Next.js Image component for images
2. Enable static site generation where possible
3. Implement lazy loading for below-fold content
4. Use dynamic imports for heavy components
5. Optimize fonts with next/font

## License

MIT