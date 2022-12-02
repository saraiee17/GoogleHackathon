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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
