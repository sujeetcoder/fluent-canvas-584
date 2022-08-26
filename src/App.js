
import './App.css';
import top from "./img/top_nav.png"

import Navbar from "./componant/navbar"
import Home from "./componant/home"
import footer1 from "./img/footer.png"

import {  Routes, Route } from "react-router-dom";
import News from './componant/news';
import axios from "axios"
import { useState, useEffect } from "react"





function App() {

  const [pending, setPending] = useState(false)
  let data = []

  function ss(){
    setPending(true)
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=998e4cf3e3e446249d679f38597af973`).then((res)=>{
      let article = res.data.articles
        data = article
        setPending(false)
        console.log(data)
        localStorage.setItem("data", JSON.stringify(data))
    }).catch((err)=>{console.log(err)})
  }
  
  window.addEventListener("load" , (e)=>{
    ss()
  })



  function doit(){
    ss()
  }

  if(pending){
    return (
      <div className="App">
        <h1>loading...</h1>

      </div>
  );
  }


  return (
    <div className="App">
      <img className="image1"  src={top} />
      <Navbar/>
      <button onClick={doit} > hello1 </button>
      
         <Routes>
            <Route path={'/'} element={<Home data={data} />} />
            <Route path={'/news'} element={<News/>} />
         </Routes>

         
      <img className="image1" src={footer1} />



    </div>
  );
}

export default App;
