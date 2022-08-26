
import './App.css';
import top from "./img/top_nav.png"

import Navbar from "./componant/navbar"
import Home from "./componant/home"
import footer1 from "./img/footer.png"

import {  Routes, Route } from "react-router-dom";
import News from './componant/news';
import axios from "axios"
import { useState, useEffect } from "react"
import { LsMid } from './componant/sub_comp/FD';





function App() {
  



  const [pending, setPending] = useState(true)
  const [data,setData] = useState([])
  useEffect(()=>{
    console.log("ho gya")
  },[])

  setTimeout(() => {
    setPending(false)
  }, 1500);

  function ss(){
   /*  setPending(true) */
   setTimeout(() => {
    axios.get(`https://masai-api.herokuapp.com/news/top-headlines?country=in`).then((res)=>{
      let article = res.data.articles
        setData(article)
       
       
        console.log("app page data")
        console.log(data)
        localStorage.setItem("data", JSON.stringify(data))
    }).catch((err)=>{console.log(err)})
    
   }, 4000);
    
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
