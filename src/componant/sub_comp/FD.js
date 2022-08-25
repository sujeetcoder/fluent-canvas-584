import { useState } from 'react';
import '../../App.css';
import add from "../../img/add.png"


export function FdLeft(props){
    const {obj} = props
    const redirect = (obj)=>{
        console.log(obj)
      }

    return (
        <div>
                <img src="https://www.deccanherald.com/sites/dh/files/styles/fullcardimage/public/articleimages/2022/08/25/bilkis-bano-pti-1139116-1661410777.png?itok=OuGdHjbJ"></img> 
                <h3 onClick={()=>{redirect(obj)}} >Bilkis case: SC notice to Gujarat over convicts release</h3>
              </div>
    )
}

export function FdMid(props){
  let {data,data2} = props
  const [obj3,setObj3] = useState(data2)
  console.log(obj3)
  

  function redirect(obj){
    /* console.log(obj) */
    console.log(data2)

  }

  return (
    <div>
      <div onClick={()=>{redirect(data)}} >
        <img src={data.urlToImage} className="midimage" />
        <p>{data.title}</p>
      </div>
      <div onClick={()=>{redirect(data)}} >
        <img src={data.urlToImage} className="midimage" />
        <p>{data.title}</p>
      </div>
      <div onClick={()=>{redirect(data)}} >
        <img src={data.urlToImage} className="midimage" />
        <p>{data.title}</p>
      </div>
    </div>
  )

}

export function FdRight(props){
  const {obj} = props
  const redirect = (obj)=>{
      console.log(obj)
    }

  return (
      <div>
              <img onClick={()=>{redirect(obj)}} src={add}></img> 
              
            </div>
  )
}