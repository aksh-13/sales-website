# BuildByAK - Luxury Website Development

A stunning, bespoke website showcasing BuildByAK's premium website development services. Built with React, TypeScript, and modern web technologies.

## 🚀 Features

- **Luxurious Design**: Premium dark theme with gold accents
- **Smooth Animations**: Framer Motion powered animations
- **Responsive Layout**: Mobile-first design approach
- **Modern Tech Stack**: React 19, TypeScript, Tailwind CSS
- **Performance Optimized**: Fast loading and smooth interactions
- **Accessibility Focused**: WCAG compliant design

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sales-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services showcase
│   ├── Portfolio.tsx   # Portfolio gallery
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── index.tsx           # Entry point
├── App.css             # Custom styles
└── index.css           # Global styles & Tailwind
```

## 🎨 Design System

### Colors
- **Primary Gold**: #FFD700
- **Background**: Black to Gray-900 gradients
- **Text**: White, Gray-300, Gray-400
- **Accents**: Gold variations

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300-900
- **Responsive**: Mobile-first approach

### Components
- **Cards**: Glass morphism with backdrop blur
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Custom styled inputs with focus states
- **Navigation**: Fixed header with scroll effects

## 📱 Sections

1. **Hero**: Compelling headline with CTA buttons
2. **Services**: 6 core services with feature lists
3. **Portfolio**: Filterable project gallery
4. **About**: Company story with statistics
5. **Contact**: Contact form with business information
6. **Footer**: Links, newsletter, and social media

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

## 🔧 Customization

### Colors
Update the gold color palette in `tailwind.config.js`:
```javascript
colors: {
  gold: {
    500: '#FFD700', // Main gold color
    // ... other variations
  }
}
```

### Content
- Update text content in component files
- Replace images with your own
- Modify contact information in `Contact.tsx`

### Styling
- Custom styles in `src/index.css`
- Component-specific styles in individual files
- Tailwind classes for rapid styling

## 📈 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Bundle Size**: Optimized with tree shaking
- **Images**: Optimized and lazy loaded
- **Animations**: Hardware accelerated

## 🔒 Security

- **Dependencies**: Regularly updated
- **Forms**: Client-side validation
- **HTTPS**: Required for production

## 📞 Support

For questions or support:
- Email: hello@buildbyak.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is proprietary to BuildByAK. All rights reserved.

---

**Built with ❤️ by BuildByAK**
