import logo from './logo.svg';
import poweredBy from './powered-by-vitawind-dark.png'

function App() {
  return (
    <div className="text-center">
      <header className="bg-[#282c34] min-h-screen flex flex-col justify-center text-xl text-white">
        <img src={logo} className="h-[40vmin] mx-auto pointer-events-none animate-spin animate-speed" alt="logo" />
        <style>
          {"\
            .animate-speed{\
              animation-duration:20s;\
            }\
          "}
        </style>
        <p>
          Edit <code className="text-gray-400">src/App.js</code> and save to reload.
        </p>
        <a
          className="text-[#61dafb] hover:text-[#b3eeff] transition-all"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={poweredBy} className="w-[200px] mx-auto mt-6 pointer-events-none" alt="powered-by" />
      </header>
    </div>
  );
}

export default App;
