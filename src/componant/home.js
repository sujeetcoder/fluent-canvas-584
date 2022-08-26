
import '../App.css';
import {FdLeft, FdMid, FdRight, LsMid, SdLeft} from "./sub_comp/FD"
import axios from "axios"

export default function Home(props){
  const {data} = props
  console.log("home page data")
  console.log(data)


  
  let obj = "h"
  let data1 = {
    title: "sujeet",
    urlToImage: "https://www.deccanherald.com/sites/dh/files/styles/fullcardimage/public/articleimages/2022/08/25/bilkis-bano-pti-1139116-1661410777.png?itok=OuGdHjbJ"
  }
  /* let data1 = news[0] */
let fdmid1 = [data[1],data[2],data[3],]
let lsmid1 = [data[18],data[12],data[4],data[8]]
let fdmid2 = [data[18],data[12],data[4],]
let sdleft1 = [data[5],data[7]]

    return (
        <div className="allData" >
            <div className="firstData">
              <FdLeft obj={data[4]} />
              <FdMid  data={fdmid1} />
              <FdRight obj="hi"/>
              
           
            </div>
            {/* second */}
            <div className="firstData">
            <SdLeft data={sdleft1} />
              
            <LsMid data={lsmid1}/>
              <FdMid  data={fdmid2} />
              
           
            </div>
           
      </div>
    )
}