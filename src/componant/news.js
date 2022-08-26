import '../App.css';
import "./news.css"
import news_top from "../img/news_top.png"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function News(){
    let navigate = useNavigate()
    const [loading,setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 1200);

    let obj = JSON.parse(localStorage.getItem("obj")) || {}

    if(loading){
        return <h1 className='loading_news' >Loading..</h1>
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
                    <p> {obj.description} {obj.content} </p>
                </div>

                <div className='news_sec' ></div>
            
            </div>
            </>
        )
    } 


    return (
        <div className="News" >
            <h1>hello</h1>
        </div>
    )
}