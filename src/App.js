
import Cartlist from './components/Cartlist';
import Cartform from './components/Cartform';
import './App.css';
function App() {
  return (
  <div className='body-container'>
    <Cartform/>
    <Cartlist   
    data={{
      discountedPrice: 400,
      originalPrice:700,
      title:"Product Title",
      thumbnail:"product.png"}
      }
    />
 
  </div>
  );
}

export default App;
