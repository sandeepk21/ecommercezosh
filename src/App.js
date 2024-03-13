import './App.css';
import Footer from './Customer/Componants/Navigation/Footer';
import Navigation from './Customer/Componants/Navigation/Navigation';
import HomePage from './Customer/Pages/Home/HomePage';
import ProductPage from './Customer/Pages/Product/ProductPage';

function App() {
  return (
    <div className="App">
    <Navigation />
    {/* <HomePage/> */}
    <ProductPage/>
    <Footer/>
    </div>
  );
}

export default App;
