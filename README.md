This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev    # http://localhost:3000
npm run build  # production build
npm start

npm run sitemap

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

1. Create a new project on [Vercel](https://vercel.com/new) and import this repository.
2. Set the following environment variables in the "Environment Variables" section:
   - `SITE_URL` – the public production URL (for generating sitemap and robots.txt).
   - `RESEND_API_KEY` – the API key from your [Resend](https://resend.com) account (for the contact form route).
   - `RESEND_FROM_EMAIL` – the verified sender email address used by Resend.
   You can copy `.env.example` to `.env.local` when developing locally.
3. Use the default **Build Command** (`npm run build`) and **Output Directory** (`.next`).
4. After the first successful deployment, the sitemap and robots.txt files will be generated automatically via the `postbuild` script.

For further details, review the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) and the [Vercel docs](https://vercel.com/docs).
