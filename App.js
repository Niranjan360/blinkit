import './App.css';
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
