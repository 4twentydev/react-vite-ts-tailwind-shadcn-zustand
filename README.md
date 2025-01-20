# Creating a Modern React App: Vite + TypeScript + ESLint + Tailwind + shadcn/ui and Zustand

We'll be using React 19, React Router, Tailwind CSS, shadcn/ui, ESLint with Prettier, and Zustand for state management.

## Features
- ⚡️ **Vite** for fast development and builds
- 🛠 **TypeScript** for type-safe code
- 🎨 **Tailwind CSS** for utility-first styling
- 🧩 **shadcn/ui** for beautifully designed components
- 🧠 **Zustand** for simple and efficient state management

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/TranDatk/react-vite-ts-tailwind-shadcn-zustand.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm install
   ```
## Rebuild the process (Base on https://dev.to/manojspace/creating-a-modern-react-app-a-comprehensive-guide-1plk)

1. Setting Up the Project
Let's start by creating a new React project using Vite, which provides a faster and leaner development experience.
   ```bash
   npm create vite@latest my-react-app -- --template react-ts
   cd my-react-app
   ```
This command creates a new React project with TypeScript support. Now, let's install the necessary dependencies:
   ```bash
   npm install react@19 react-dom@19 react-router-dom@6 zustand@4 @types/react@19 @types/react-dom@19
   npm install -D tailwindcss postcss autoprefixer eslint prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
   ```
2. Configuring Tailwind CSS
To set up Tailwind CSS, run the following command:
   ```bash
   npx tailwindcss init -p
   ```
This creates a tailwind.config.js file. Update it with the following content:
   ```javascript
   module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
   ```
Now, add the Tailwind directives to your src/index.css file:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
3. 
