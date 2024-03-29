
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import add from "../../img/add.png"





let altr = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sm6HxdLaa5pt5RVPXfBKBTEXqX1grDrz-w&usqp=CAU"

export function FdLeft(props){
  let navigate = useNavigate()
  
    const {obj} = props
    const redirect = (obj)=>{
     
      localStorage.setItem("obj", JSON.stringify(obj))
      navigate("news")
      }
      if(obj!=undefined){
        return (
          <div>
          <img src={obj.urlToImage||altr}></img> 
          <h3 onClick={()=>{redirect(obj)}} >{obj.title}</h3>
        </div>
        )
      }

    return (
        
        <p>loading...</p>
    )
}







export function FdMid(props){
  const  {data} = props
  let navigate = useNavigate()
 
 
  
  
  function redirect(obj){
    
    localStorage.setItem("obj", JSON.stringify(obj))
    navigate("news")

  }
  if(data[0]!=undefined){
    return (
      <div className='mid_el'>
        {data.map((el)=>{
          return (
            <div key={el.title} onClick={()=>{redirect(el)}} >
            <img src={el.urlToImage||altr} className="midimage" />
            <p>{el.title}</p>
          </div>
          )
        })}
      
    </div>
    )
  }

  return (
    
    <p>loading...</p>
  )
}



/* al mid */
export function LsMid(props){
  let navigate = useNavigate()
  const {data} = props
  

  function redirect(obj){

    localStorage.setItem("obj", JSON.stringify(obj))
    navigate("news")
  }

  if(data[0]!=undefined){
    return (
      <div className='mid_el'>
      <ul>
        {data.map((el)=>{
          return <li onClick={()=>{redirect(el)}} key={el.title} >{el.title}</li>
        })}
      </ul>
      </div>
    )
  }
  return <p>loading...</p>

}











export function FdRight(props){
  const {obj} = props
  const [load,setLoad] = useState(true)
  setTimeout(() => {
    setLoad(false)
  }, 3500);
  const redirect = (obj)=>{
      console.log(obj)
      
    }

    if(load){
      return <p>loading..</p>
    }

  return (
      <div>
              <img onClick={()=>{redirect(obj)}} src={add}></img> 
              
            </div>
  )
}



/* sec data */
export function SdLeft(props){
  let navigate = useNavigate()
  const {data} = props

  const redirect = (obj)=>{
  
    localStorage.setItem("obj", JSON.stringify(obj))
    navigate("news")
  }

  if(data[0]!=undefined){
    return (
      <div >
          {data.map((el)=>{
            return (
              <div id='sec_div' key={el.title} onClick={()=>{redirect(el)}} >
              <img src={el.urlToImage||altr} className="midimage" />
              <p>{el.title}</p>
            </div>
            )
          })}
      </div>
    )
  }

  return <p>loading...</p>

}





export function FdMid2(props){
  const  {data ,setLoading, setObj} = props
  let navigate = useNavigate()
 
 
  
  function redirect(obj){
  
    localStorage.setItem("obj", JSON.stringify(obj))
   /*  window.location.href = "/news" */
   /*  window.location.reload() */
   setObj(obj)
   
   setLoading(true)
   

  }


  if(data[0]!=undefined){
    return (
      <div className='mid_el'>
        {data.map((el)=>{
          return (
            <div key={el.title} onClick={()=>{redirect(el)}} >
            <img src={el.urlToImage||altr} className="midimage" />
            <p>{el.title}</p>
          </div>
          )
        })}
      
    </div>
    )
  }

  return (
    
    <p>loading...</p>
  )
}