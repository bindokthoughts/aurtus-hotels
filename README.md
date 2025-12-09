# Aurtus Hotels - Coming Soon Landing Page

A premium "Coming Soon" landing page built with Next.js 14, TailwindCSS, and GSAP animations.

## 🏨 Features

- **Hero Section** - Fullscreen hero with GSAP timeline animations
- **Facilities Showcase** - Five luxury service categories with scroll-triggered animations
- **Contact Form** - Full validation and email integration via Resend API
- **Newsletter Signup** - Waitlist subscription with email notifications
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Accessibility** - Respects `prefers-reduced-motion` preferences
- **Modern Stack** - Next.js 14 App Router, TypeScript, GSAP

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Resend API account (for email functionality)

### Installation

1. **Clone or navigate to the repository:**
   ```bash
   cd aurtus-hotels
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Install required packages:**
   ```bash
   npm install gsap @gsap/react resend
   # or
   yarn add gsap @gsap/react resend
   # or
   pnpm add gsap @gsap/react resend
   ```

4. **Set up environment variables:**
   - Copy `.env.example` to `.env.local`:
     ```bash
     cp .env.example .env.local
     ```
   - Get your Resend API key from [resend.com/api-keys](https://resend.com/api-keys)
   - Add your API key to `.env.local`:
     ```
     RESEND_API_KEY=re_your_actual_api_key_here
     ```

5. **Add your hero image:**
   - Place your hero image as `hero.jpg` in the `/public` folder
   - Recommended: 1920x1080px or higher, optimized for web
   - See `/public/hero-image-instructions.md` for details

6. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

7. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── contact/route.ts       # Contact form API endpoint
│   │   └── newsletter/route.ts    # Newsletter subscription endpoint
│   ├── layout.tsx                 # Root layout with fonts & metadata
│   ├── page.tsx                   # Main Coming Soon page
│   └── globals.css                # Global styles & custom CSS
│
├── components/
│   ├── Hero/Hero.tsx              # Fullscreen hero section
│   ├── Facilities/Facilities.tsx  # Services showcase
│   ├── ContactForm/ContactForm.tsx # Contact form with validation
│   ├── Newsletter/Newsletter.tsx   # Email subscription
│   ├── AnimatedText/
│   │   ├── AnimatedText.tsx       # Reusable animated text component
│   │   └── useGsapText.ts         # GSAP text animation hook
│   ├── Footer.tsx                 # Footer with links & info
│   └── SocialLinks.tsx            # Social media icons
│
└── lib/
    ├── email.ts                   # Resend email integration
    └── validators.ts              # Form validation utilities
```

## 🎨 Customization

### Update Hotel Information

Edit `/src/components/Footer.tsx` to update:
- Office hours
- Email address
- Physical address (when available)

### Modify Facilities

Edit `/src/components/Facilities/Facilities.tsx` to customize the five facility cards.

### Change Colors

Update `/src/app/globals.css` to modify the luxury color scheme:
```css
:root {
  --gold: #d4af37;        /* Primary accent color */
  --gold-dark: #b8941f;   /* Hover state */
}
```

### Email Configuration

Edit `/src/lib/email.ts` to:
- Change recipient email address
- Customize email templates
- Modify sender information

## 📧 Email Setup

This project uses [Resend](https://resend.com) for email delivery.

### Steps:
1. Create a free account at [resend.com](https://resend.com)
2. Verify your domain (or use their test domain for development)
3. Generate an API key
4. Add the API key to `.env.local`

### Testing Emails:
- Use Resend's test mode for development
- All emails are sent to `reservations@aurtushotels.com` (update in `email.ts`)

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** GSAP + @gsap/react
- **Email:** Resend API
- **Fonts:** Playfair Display (serif), Inter (sans-serif)

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Respects user motion preferences

## 🚀 Deployment

### Deploy to Vercel (Recommended):

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables in Production:
Don't forget to add `RESEND_API_KEY` in your hosting platform's environment variables.

## 📄 License

This project is created for Aurtus Hotels.

## 🤝 Support

For questions or support, contact: reservations@aurtushotels.com

---

**Aurtus Hotels** - Unveiling Soon


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
