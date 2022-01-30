import React, { useState } from 'react'
import logo from './logo.svg'
import poweredBy from './powered-by-vitawind-dark.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <header className="bg-[#282c34] min-h-screen text-white flex flex-col justify-center items-center">
        <img src={logo} className="h-60 motion-safe:animate-spin animate-speed" alt="logo" />
        <style>
          {"\
            .animate-speed{\
              animation-duration:20s;\
            }\
          "}
        </style>
        <p className="text-3xl font-bold">Vite + React + TypeScript + Tailwind jit!</p>
        <p className="mt-3">
          <button
            type="button"
            className="rounded text-[#282C34] bg-gray-300 px-2 py-2 my-6 hover:bg-gray-200 transition-all active:scale-95"
            onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code className="text-[#8d96a7]">App.tsx</code> and save to test HMR updates.
        </p>
        <p className="mt-3 flex gap-3 text-center text-[#8d96a7]">
          <a
            className="text-[#61dafb] hover:text-[#a4ebff] hover:underline transition-all"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="text-[#61dafb] hover:text-[#a4ebff] hover:underline transition-all"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        <img className="mx-auto my-8" alt="powered-by" src={poweredBy} />
      </header>
    </div>
  )
}

export default App
