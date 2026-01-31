# Contributing to ReactPro

Thank you for your interest in contributing to ReactPro! This document provides guidelines for local development and contributing.

## Local Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/quantnexusai/reactpro-conversion.git
   cd reactpro-conversion
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Local Preview Mode

The app includes a **local preview mode** that works without any API keys. In this mode:
- Sample data is displayed throughout the app
- The Claude AI chat returns pre-defined responses
- A yellow banner indicates you're in preview mode

This allows you to explore and develop the UI without setting up Supabase or Anthropic accounts.

### Environment Variables

To connect to real services, copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` - Your Supabase publishable key
- `ANTHROPIC_API_KEY` - Your Anthropic API key

## Contributing Guidelines

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run linting (`npm run lint`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Style

- Use TypeScript for type safety
- Follow the existing code patterns
- Use Tailwind CSS for styling
- Keep components small and focused
- Add comments for complex logic

### Commit Messages

- Use clear, descriptive commit messages
- Start with a verb (Add, Fix, Update, Remove, etc.)
- Keep the first line under 50 characters

### Testing

Before submitting a PR:
- Ensure `npm run build` passes without errors
- Test your changes in local preview mode
- Test with real API keys if your changes affect integrations

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   └── claude/        # Claude AI endpoint
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Demo.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── DemoBanner.tsx
└── lib/                   # Utilities and configs
    ├── supabase.ts        # Supabase client
    ├── demo-data.ts       # Sample data for preview mode
    └── types.ts           # TypeScript types
```

## Need Help?

- Open an issue for bugs or feature requests
- Email ari@quantnexus.ai for direct support
