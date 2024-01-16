import logo from './logo.svg';
import './App.css';
import ringa from './ringa.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ringa} className="App-logo mb-4 border rounded-full border-none" alt="logo" />
        <p className='text-3xl text-blue-600'>
          Landing gero re bonete.
        </p>
        <a
          className="text-white italic bg-slate-500 mt-8 p-4 border rounded-lg hover:bg-blue-800 hover:rotate-12 hover:transition"
          href="https://www.gimnasia.org.ar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dale lobo
        </a>
      </header>
    </div>
  );
}

export default App;
