
import '../App.css';
import {FdLeft, FdMid, FdRight} from "./sub_comp/FD"
import axios from "axios"

export default function Home(props){
  const {data} = props


  
  let obj = "h"
  let data1 = {
    title: "sujeet",
    urlToImage: "https://www.deccanherald.com/sites/dh/files/styles/fullcardimage/public/articleimages/2022/08/25/bilkis-bano-pti-1139116-1661410777.png?itok=OuGdHjbJ"
  }
  /* let data1 = news[0] */
 


    return (
        <div className="allData" >
            <div className="firstData">
              <FdLeft obj={obj} />
              <FdMid data={data1} data2={data} />
              <FdRight obj="hi"/>
              
           
            </div>
            {/* second */}
            <div className="firstData">
              <FdLeft obj={obj} />
              
              <FdRight obj="hi"/>
              <FdMid data={data1} data2={data} />
              
           
            </div>
      </div>
    )
}