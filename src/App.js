import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navv from './Components/Navv';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Signin from './Components/Signin';
import Cart from './Components/Cart';
import Returnit from './Components/Returns';
import Banner from './Components/Banner';
import { CartProvider } from './CartContext';


function App() {
  return (
    <CartProvider>
    <Router>
      <div className="App">
          <Routes>
            <Route path='/' element={
              <div>
                <Navv />
                <Banner />
              </div>
            }/>

            <Route path='/signin' element={
              <div>
                <Signin />
              </div>
            }/>

            <Route path='/returnsandorders' element={
              <div>
                <Navv />
                <Returnit />
              </div> 
              
            }/>

            <Route path='/cart' element={
              <div>
                <Navv />
                <Cart />
              </div>
              
            }/>
          </Routes>
      </div>
    </Router>
    </CartProvider>

  );
}

export default App;
