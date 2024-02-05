import './App.css';
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/usercart' element={<Cart/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
