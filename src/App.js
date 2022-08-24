
import './App.css';
import top from "./img/top_nav.png"
import css from "./componant/new.module.css"
import Navbar from "./componant/navbar"
import Home from "./componant/home"

import {  Routes, Route } from "react-router-dom";
import News from './componant/news';
import axios from "axios"

function App() {
 let page = 1
 let limit = 5
 let orderBy = "asc"  

  function doit(){
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=${limit}&orderBy=${orderBy}`).then((res)=>{
      console.log(res.data,res.data.data)
    })
    console.log("hello")
  }


  return (
    <div className="App">
      <img className={css.image1}  src={top} />
      <Navbar/>
      <button onClick={doit} > hello1 </button>
      
         <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/news'} element={<News/>} />
         </Routes>

         
      



    </div>
  );
}

export default App;
