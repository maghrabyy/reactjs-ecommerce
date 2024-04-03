import './App.css';
import constructionImg from './assets/construction-site.png';

function App() {
  return (
    <div className="App h-screen flex flex-col items-center justify-center gap-2 bg-[#1B1B1D]">
      <div className="bg-gray-300 py-3 px-4 rounded-md shadow-sm select-none animate-bounce">
        <h1 className='sm:text-6xl text-4xl font-bold text-slate-950 text-center'>eCommerce website under construction.</h1>
      </div>
      <div className="flex gap-2">
        <img src={constructionImg} width={200} alt="construction site" />
        <img src={constructionImg} width={200} alt="construction site" />
      </div>
    </div>
  );
}

export default App;
