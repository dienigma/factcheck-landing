# Factcheck Landing

**Deployed link:** [https://factcheck-landing.vercel.app/](https://factcheck-landing.vercel.app/)

**GitHub:** [https://github.com/dienigma/factcheck-landing](https://github.com/dienigma/factcheck-landing)

A modern, responsive landing page for Factcheck, built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## Features

- ⚡️ Fast development with Vite
- 🎨 Styled with Tailwind CSS
- 🧩 Modular React components
- 📧 Signup form for early access
- 💬 Testimonial and notification sections

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [pnpm](https://pnpm.io/) (or use npm/yarn, but pnpm is recommended)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/factcheck-landing.git
   cd factcheck-landing
   ```

2. **Install dependencies:**
   ```sh
   pnpm install
   ```
   Or use `npm install` or `yarn install` if you prefer.

### Development

To start the development server with hot reloading:
```sh
pnpm dev
```
Visit [http://localhost:5173](http://localhost:5173) to view the app.

### Building for Production

To build the app for production:
```sh
pnpm build
```
The output will be in the `dist/` directory.

### Preview Production Build

To locally preview the production build:
```sh
pnpm preview
```

### Linting

To run ESLint:
```sh
pnpm lint
```

## Project Structure

```
.
├── public/                # Static assets
├── src/
│   ├── components/        # React components
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Tailwind and global styles
├── index.html             # HTML template
├── package.json           # Project metadata and scripts
└── vite.config.ts         # Vite configuration
```

## Customization

- **Tailwind CSS** is configured via `vite.config.ts` and used throughout the components.
- Update the signup form endpoint in `src/components/signup-form.tsx` as needed.

## License

[MIT](LICENSE) (add a license file if you want to specify one)