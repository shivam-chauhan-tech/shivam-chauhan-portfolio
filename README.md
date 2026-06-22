# 🚀 Shivam Singh Chauhan - Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/React-18.2-blue?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite" alt="Vite" />
</div>

<br />

A modern, responsive personal portfolio website showcasing my projects, skills, and professional experience. Built with React, TypeScript, and Tailwind CSS following enterprise-level best practices.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ⚡ **Performance Optimized** - Fast loading with code splitting and lazy loading
- 🎭 **Smooth Animations** - Framer Motion powered animations
- 🌙 **Dark Theme** - Easy on the eyes
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🔧 **Type Safe** - Full TypeScript coverage
- 📦 **Modular Architecture** - Clean, maintainable code structure
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- 📧 **Working Contact Form** - EmailJS integration for real email sending

## 🛠️ Tech Stack

### Core

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling

### Libraries

- **Framer Motion** - Animations
- **Lucide React** - Icons
- **EmailJS** - Contact form email service

### Code Quality

- **ESLint** - Linting
- **Prettier** - Code formatting
- **TypeScript Strict Mode** - Enhanced type checking

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, ProfileSidebar
│   ├── sections/        # Hero, About, Projects, Skills, Experience, Contact
│   └── ui/              # Reusable UI components (Button, Card, Section, TypingText)
├── config/              # App configuration and constants
├── data/                # JSON data files
│   ├── profile.json     # Personal information
│   ├── projects.json    # Project portfolio
│   ├── skills.json      # Technical skills
│   ├── experience.json  # Work experience
│   ├── socials.json     # Social media links
│   └── stats.json       # Hero section statistics
├── hooks/               # Custom React hooks
│   ├── useIntersectionObserver.ts
│   ├── useScrollSpy.ts
│   └── useTypingEffect.ts
├── services/            # External service integrations
│   └── emailService.ts  # EmailJS integration
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/chauhanshivam/shivam-chauhan-portfolio.git
   cd shivam-chauhan-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Configure email service (optional)**

   For the contact form to work, set up EmailJS:

   ```bash
   # Copy environment variables template
   cp .env.example .env

   # Add your EmailJS credentials to .env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization Guide

### 1. Update Personal Information

Edit the JSON files in `src/data/`:

**`profile.json`** - Your personal info

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "headline": "Your Headline",
  "description1": "Your description...",
  "description2": "Your second description..."
}
```

**`projects.json`** - Your projects

```json
[
  {
    "title": "Project Name",
    "description": "Description",
    "tags": ["React", "TypeScript"],
    "live": "https://project-url.com"
  }
]
```

**`skills.json`** - Your technical skills  
**`experience.json`** - Your work history  
**`socials.json`** - Your social media links  
**`stats.json`** - Hero section statistics

### 2. Customize Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: {
    500: '#B87333', // Bronze/Copper color
    // ...
  }
}
```

### 3. Setup Contact Form

For the contact form to send real emails:

1. **Sign up for EmailJS:** https://www.emailjs.com/ (free)
2. **Create an email service** in EmailJS dashboard
3. **Create an email template** with variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
4. **Add credentials to `.env`** file
5. **Test locally** - works in production too!

### 4. Update Meta Tags

Edit `index.html` for SEO optimization:

- Title
- Description
- Keywords
- OpenGraph tags

## 🎨 Design Principles

This portfolio follows modern web development best practices:

1. **Component-Driven Development** - Reusable, composable components
2. **Type Safety** - TypeScript for catching errors early
3. **Performance First** - Optimized for speed and efficiency
4. **Accessibility** - WCAG 2.1 Level AA compliant
5. **Responsive Design** - Mobile-first approach
6. **Clean Code** - Following React and TypeScript best practices
7. **Separation of Concerns** - Clear separation of logic, UI, and data

## 📜 Available Scripts

| Script                 | Description                  |
| ---------------------- | ---------------------------- |
| `npm run dev`          | Start development server     |
| `npm run build`        | Build for production         |
| `npm run preview`      | Preview production build     |
| `npm run lint`         | Run ESLint                   |
| `npm run lint:fix`     | Fix ESLint errors            |
| `npm run format`       | Format code with Prettier    |
| `npm run format:check` | Check code formatting        |
| `npm run type-check`   | Run TypeScript type checking |

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy! ✨

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist/` folder on [Netlify](https://netlify.com)
3. Add environment variables in Netlify dashboard

### GitHub Pages

```bash
npm run build
# Deploy the dist/ folder to gh-pages branch
```

## 🔒 Security

- `.env` file is gitignored - never commit sensitive credentials
- EmailJS Public Key is safe to expose (designed for frontend use)
- Service ID and Template ID should remain private

## 📄 License

This project is [MIT](./LICENSE) licensed.

## 👨‍💻 Author

**Shivam Singh Chauhan**

- Email: [contact@shivam-chauhan.com](mailto:contact@shivam-chauhan.com)
- LinkedIn: [@shivam-chauhan-713828125](https://www.linkedin.com/in/shivam-chauhan-713828125/)
- GitHub: [@chauhanshivam](https://github.com/chauhanshivam)

---

<div align="center">
  Made with ❤️ using React & TypeScript
</div>
