import logo from "./logo.svg";
import poweredBy from "./powered-by-vitawind-dark.png";

function App() {
  return (
    <div className="text-center">
      <header className="flex min-h-screen flex-col justify-center bg-[#282c34] text-xl text-white">
        <img
          src={logo}
          className="animate-speed pointer-events-none mx-auto h-[40vmin] animate-spin"
          alt="logo"
        />
        <style>
          {
            "\
            .animate-speed{\
              animation-duration:20s;\
            }\
          "
          }
        </style>
        <p className="flex flex-col gap-5 py-5">
          <h1 className="text-5xl font-black">CRA + tailwindcss v3</h1>
          <p>
            Edit <code className="text-gray-400">src/App.js</code> and save to
            reload.
          </p>
        </p>
        <a
          className="text-[#61dafb] transition-all hover:text-[#b3eeff]"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img
          src={poweredBy}
          className="pointer-events-none mx-auto mt-6 w-[200px]"
          alt="powered-by"
        />
      </header>
    </div>
  );
}

export default App;
