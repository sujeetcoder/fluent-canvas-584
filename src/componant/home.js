
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
let fdmid2 = [data[18],data[12],data[4]]
let fdmid3 = [data[13],data[15],data[16]]
let fdmid4 = [data[18],data[8],data[0]]
let sdleft1 = [data[5],data[7]]
let sdleft2 = [data[6],data[9]]
let sdleft3 = [data[17],data[12]]
let lsmid1 = [data[18],data[12],data[4],data[8]]


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

            <div id='display'>
              <h3>MORE TOP STORIES</h3>
              <h3>DH VIDEOS</h3>
            </div>
            {/* third */}

            <div className="firstData">
            <SdLeft data={sdleft2} />
            <FdMid  data={fdmid3} />
            <div id='video' >
            <iframe width="100%" height="100%" src="https://www.dailymotion.com/embed/video/x8db1pl?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </div>

            <img className='addimage' src='https://tpc.googlesyndication.com/simgad/964659616579897227'/>
            <h3>KARNATAKA</h3>
            {/* fourth */}
            <div className="firstData">
            <SdLeft data={sdleft3} />
            <FdMid  data={fdmid4} />
            <FdLeft obj={data[11]} />
            </div>

            <h1 ></h1>
          
           
      </div>
    )
}