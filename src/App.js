import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/coffeeshop" element={<Coffeeshop/>} />
          <Route path="/coffeeshop/photos" element={<Photos/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
