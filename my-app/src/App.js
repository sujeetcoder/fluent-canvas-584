
import './App.css';
import top from "./img/top_nav.png"
import css from "./componant/new.module.css"
import Navbar from "./componant/navbar"
import Home from "./componant/home"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from './componant/news';

function App() {
  return (
    <div className="App">
      <img className={css.image1}  src={top} />
      <Navbar/>
      
         <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/news'} element={<News/>} />
         </Routes>
      



    </div>
  );
}

export default App;
