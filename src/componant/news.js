import '../App.css';
import "./news.css"
import news_top from "../img/news_top.png"

export default function News(){

    let obj = JSON.parse(localStorage.getItem("obj")) || {}

    if(obj.title!=undefined){
        return (
            <>
             <div className='tumhiho' ></div>
            <img className='news_top' src={news_top}/>
            <h1 className='title' >{obj.title}</h1>
            <p className='title' > {obj.description} </p>
            <p className='pub' > {obj.publishedAt} </p>
            <div className='news' >
                <div className='news_first' >
                    <img className='news_img' src={obj.urlToImage} />
                    <p className='img_desc' > {obj.description} </p>
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