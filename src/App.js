import './App.css';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes className="App">
        <Route path="/" element={ <Home/>} exact />
        <Route path="/cart" element={ <Cart/>} exact />
      </Routes>
    </BrowserRouter>
        
    
  );
}

export default App;
