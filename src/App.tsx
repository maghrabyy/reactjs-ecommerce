import './App.css';
import constructionImg from './assets/construction-site.png';
import ecommerceImg from './assets/shopping.png';

function App() {
  return (
    <div className="App h-screen flex flex-col items-center justify-center gap-2 bg-[#1B1B1D]">
       <img src={ecommerceImg} width={200} className='mb-8' alt="ecommerce platform" />
      <div className="bg-gray-300 py-3 px-4 rounded-md shadow-sm select-none animate-bounce">
        <h1 className='sm:text-6xl text-4xl font-bold text-slate-950 text-center'>eCommerce website under construction.</h1>
      </div>
      <img src={constructionImg} width={200} alt="construction site" />
    </div>
  );
}

export default App;
