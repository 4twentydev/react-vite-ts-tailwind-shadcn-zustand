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
   npm run dev
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
3. Setting Up ESLint and Prettier
Create .eslintrc.js and .prettierrc files in the root of your project:
   ```bash
   touch .eslintrc.js .prettierrc
   ```
Add the following content to .eslintrc.js:
   ```javascript
   module.exports = {
     env: {
       browser: true,
       es2021: true,
     },
     extends: [
       'eslint:recommended',
       'plugin:react/recommended',
       'plugin:@typescript-eslint/recommended',
       'prettier',
     ],
     parser: '@typescript-eslint/parser',
     parserOptions: {
       ecmaFeatures: {
         jsx: true,
       },
       ecmaVersion: 12,
       sourceType: 'module',
     },
     plugins: ['react', '@typescript-eslint'],
     rules: {
       'react/react-in-jsx-scope': 'off',
     },
     settings: {
       react: {
         version: 'detect',
       },
     },
   };
   ```
And to .prettierrc:
   ```javascript
   {
     "semi": true,
     "tabWidth": 2,
     "printWidth": 100,
     "singleQuote": true,
     "trailingComma": "all",
     "jsxSingleQuote": true,
     "bracketSpacing": true
   }
   ```
4. Installing and Configuring shadcn/ui
To use shadcn/ui, we need to set it up in our project:
   ```bash
   touch .eslintrc.js .prettierrc
   ```
5. Edit tsconfig.json & tsconfig.app.json file
The current version of Vite splits TypeScript configuration into three files, two of which need to be edited. Add the baseUrl and paths properties to the compilerOptions section of the tsconfig.json and tsconfig.app.json files:
- Edit tsconfig.json file
   ```json
    {
     "files": [],
     "references": [
       {
         "path": "./tsconfig.app.json"
       },
       {
         "path": "./tsconfig.node.json"
       }
     ],
     "compilerOptions": {
       "baseUrl": ".",
       "paths": {
         "@/*": ["./src/*"]
       }
     }
   }
   ```
- Edit tsconfig.app.json file
   ```json
   {
     "compilerOptions": {
       // ...
       "baseUrl": ".",
       "paths": {
         "@/*": [
           "./src/*"
         ]
       }
       // ...
     }
   }
   ```

7. Update vite.config.ts
Add the following code to the vite.config.ts so your app can resolve paths without error:
   ```bash
   npm install -D @types/node
   ```
   ```typescript
   import path from "path"
   import react from "@vitejs/plugin-react"
   import { defineConfig } from "vite"
    
   export default defineConfig({
     plugins: [react()],
     resolve: {
       alias: {
         "@": path.resolve(__dirname, "./src"),
       },
     },
   })
   ```
8. Run the CLI
Run the shadcn-ui init command to setup your project:
   ```bash
   npx shadcn@latest init
   ```
9. Configure components.json
You will be asked a few questions to configure components.json:
   ```bash
   Which style would you like to use? › New York
   Which color would you like to use as base color? › Zinc
   Do you want to use CSS variables for colors? › no / yes
   ```
You can now start adding components to your project.
   ```bash
   npx shadcn@latest add button
   ```
The command above will add the Button component to your project. You can then import it like this:
   ```typescript
   import { Button } from "@/components/ui/button"
    
   export default function Home() {
     return (
       <div>
         <Button>Click me</Button>
       </div>
     )
   }
   ```
10. Setting Up Zustand
Create a new file src/store.ts for our Zustand store:
   ```typescript
   import {create} from 'zustand';
   
   interface AppState {
     count: number;
     increment: () => void;
     decrement: () => void;
   }
   
   export const useAppStore = create<AppState>((set) => ({
     count: 0,
     increment: () => set((state) => ({ count: state.count + 1 })),
     decrement: () => set((state) => ({ count: state.count - 1 })),
   }));
   ```
11. Updating package.json Scripts
Add the following scripts to your package.json:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "tsc && vite build",
     "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
     "preview": "vite preview",
     "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx}\"",
     "lint:fix": "eslint src --ext ts,tsx --fix"
   }
   ```
12. Creating a Sample App
Let's create a simple app to demonstrate the usage of our setup. Update src/App.tsx:
   ```typescript
   import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
   import { Button } from './components/ui/button';
   import { useAppStore } from './store';
   
   function Home() {
     const { count, increment, decrement } = useAppStore();
   
     return (
       <div className='p-4'>
         <h1 className='text-2xl font-bold mb-4'>Home</h1>
         <p className='mb-4'>Count: {count}</p>
         <Button onClick={increment} className='mr-2'>Increment</Button>
         <Button onClick={decrement}>Decrement</Button>
       </div>
     );
   }
   
   function About() {
     return <div className='p-4'>
       <h1 className='text-2xl font-bold'>About</h1>
     </div>;
   }
   
   function App() {
     return (
       <Router>
         <div className='p-4'>
           <nav className='mb-4'>
             <Link to='/' className='mr-4'>Home</Link>
             <Link to='/about'>About</Link>
           </nav>
           <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/about' element={<About />} />
           </Routes>
         </div>
       </Router>
     );
   }
   
   export default App;
   ```
13. Running the Application
Now you can run your application using the following command:
   ```bash
   npm run dev
   ```
This will start the development server, and you can view your app at http://localhost:5173.
