import '../App.css';
import "./news.css"
import news_top from "../img/news_top.png"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mid_news from "../img/mid_news.png"
import botom_news from "../img/botom_news.png"
import sec_news_top from "../img/sec_news_top.png"
import { FdMid2 } from './sub_comp/FD';


export default function News(props){

    let newsData2 = JSON.parse(localStorage.getItem("obj")) || {} 
    const [obj,setObj] = useState(newsData2)


    const {data} = props
    let newData = []

    for(let i=0;i<6;i++){
        newData.push(data[i])
    }
    let navigate = useNavigate()
    const [loading,setLoading] = useState(true)
    const [mid,setMid] = useState(false)
    const [hi,setHi] = useState(false)
    

    setTimeout(() => {
        setMid(true)
       
    }, 6000);

    setTimeout(() => {
        setLoading(false)
    }, 1200);


   

   

    if(loading){
        return (
            <div className="News3" >
            <h1>loading...</h1>
        </div>
        )
    }
  

    if(obj.title!=undefined){
        return (
            <>
             <div className='tumhiho' ></div>
            <img className='news_top' src={news_top}/>
            <h1 className='title' >{obj.title}</h1>
            <p className='title' > {obj.description} </p>
            <p className='pub' > <span className='news_name' onClick={()=>{ window.location.href = obj.url }} > {obj.source.name} </span> {obj.publishedAt} </p>
            <div className='news' >
                <div className='news_first' >
                    
                    <img className='news_img' src={obj.urlToImage} />
                    <p className='img_desc' > {obj.description} </p>
                    <p> {obj.title} {obj.description} {obj.content} {obj.description}  </p>
                    <p> PTI, AUG 26 2022, 19:36 ISTUPDATED: AUG 26 2022, 19:36 IST Senior Congress leader and former Union minister Prithviraj Chavan. Credit: Facebook Senior Congress leader and former Union minister Prithviraj Chavan on Friday said the party shouldn't ha... Read more at: https://www.deccanherald.com/national/congress-shouldnt-have-a-puppet-president-says-prithviraj-chavan-1139614.html </p>
                    <p>New Delhi, AUG 26 2022, 15:16 ISTUPDATED: AUG 26 2022, 19:15 IST Congress leader Jairam Ramesh. Credit: PTI File Photo The Congress on Friday launched an all-out attack against Ghulam Nabi Azad after he resigned from the party, saying his "bet... Read more at: https://www.deccanherald.com/national/national-politics/gnas-dna-has-been-modi-fied-congress-jairam-ramesh-on-ghulam-nabi-azad-1139523.html</p>
                  { mid &&  <img className='mid_news' src={mid_news}/> }
                    <p>The RBI has said the new rules were to be implemented immediately, but added that "detailed instructions will be issued separately." Still, Uni suspended its card services this week due to the RBI rules, hitting hundreds of thousands of users, while ... Read more at: https://www.deccanherald.com/business/business-news/indias-digital-lending-rules-spark-disruption-firms-plan-pushback-1139559.html</p>
                    <p>Among other universities on the list are Badaganvi Sarkar World Open University Education Society (Karnataka), St John's University (Kerala), Raja Arbaic Univerity (Nagpur), Indian Institute of Alternative Medicine and Institute of Alternative Medici... Read more at: https://www.deccanherald.com/national/ugc-declares-21-universities-as-fake-maximum-in-delhi-followed-by-up-1139564.html</p>
                  {mid && <img className='mid_news' src={botom_news}/> } 
                


                </div>

                <div className='news_sec' >
                    <img className='sec_news_top' src={sec_news_top} />
                    <FdMid2 data={newData} setObj={setObj} setLoading={setLoading} />
                </div>
            
            </div>
            </>
        )
    } 


   
}