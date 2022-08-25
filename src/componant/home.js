
import '../App.css';
import {FdLeft, FdMid, FdRight} from "./sub_comp/FD"
import axios from "axios"

export default function Home(props){
  let news = props.news1

  /* let article = []
  axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=998e4cf3e3e446249d679f38597af973`).then((res)=>{
      let articles = res.data.articles
      article = articles
    })
    
    setTimeout(() => {
      console.log(article)
    }, 100); */
  
  let obj = "h"
  let data1 = {
    title: "sujeet",
    urlToImage: "https://www.deccanherald.com/sites/dh/files/styles/fullcardimage/public/articleimages/2022/08/25/bilkis-bano-pti-1139116-1661410777.png?itok=OuGdHjbJ"
  }
 


    return (
        <div className="allData" >
            <div className="firstData">
              <FdLeft obj={obj} />
              <FdMid data2={news[0]} data={data1} />
              <FdRight obj="hi"/>
              
           
            </div>
            {/* second */}
            <div className="firstData">
              <FdLeft obj={obj} />
              
              <FdRight obj="hi"/>
              <FdMid data={data1} />
              
           
            </div>
      </div>
    )
}