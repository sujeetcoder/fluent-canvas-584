
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
  let data2 = {
    title: "sujeet",
    urlToImage: "https://www.deccanherald.com/sites/dh/files/styles/fullcardimage/public/articleimages/2022/08/25/bilkis-bano-pti-1139116-1661410777.png?itok=OuGdHjbJ"
  }
  const [pending, setPending] = useState(false)
  const [data,setData] = useState(data2)
  const [object,setObject] = useState({})

  useEffect(()=>{
    setPending(true)
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=998e4cf3e3e446249d679f38597af973`).then((res)=>{
      let article = res.data.articles
      
      setData([...article])
      
      setTimeout(() => {
        setPending(false)
        
      }, 2500);
      
      
    }).catch((err)=>{console.log(err)})
  },[])
  
  
  



  function doit(){
    setPending(true)
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=998e4cf3e3e446249d679f38597af973`).then((res)=>{
      let article = res.data.articles
      
      setData([article])
      
      setPending(false)
      console.log(data)
    })
    console.log("hello")
  }

  if(pending){
    return (
      <div className="App">
        <h1>Pending...</h1>

      </div>
  );
  }


  return (
    <div className="App">
      <img className="image1"  src={top} />
      <Navbar/>
      <button onClick={doit} > hello1 </button>
      
         <Routes>
            <Route path={'/'} element={<Home news1={data} />} />
            <Route path={'/news'} element={<News/>} />
         </Routes>

         
      <img className="image1" src={footer1} />



    </div>
  );
}

export default App;
