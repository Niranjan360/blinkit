import './App.css';
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import SearchGrocery from './components/SearchGrocery';
import GroceryDescription from './components/GroceryDescription';
import AddGrocery from './components/AddGrocery';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/usercart' element={<Cart/>}/>
        <Route path='/search' element={<SearchGrocery/>}/>
        <Route path='/product-desc/:prid' element={<GroceryDescription/>}/>
        <Route path='/add' element={<AddGrocery/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
