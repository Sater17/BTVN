import React,{useState,useEffect} from 'react';
import './time.css';

function Time(props) {
    let dateInfo=new Date()
    let hour=0
    if (dateInfo.getHours() === 0) {
        hour = 12;
      } else if (dateInfo.getHours() > 12) {
        hour = dateInfo.getHours() - 12;
      } else {
        hour = dateInfo.getHours();
      }
      
      let min=dateInfo.getMinutes()
      let sec=dateInfo.getSeconds()
      hour=Number(hour)
      min=Number(min)
      sec=Number(sec)
      let dateToSec=hour*60*60+min*60+sec
    let [time,setTime]=useState(dateToSec);

    useEffect(()=>{
        let res=setInterval(()=>{
            setTime(props.time-time);
        })
        return clearInterval(res)
    },500)

    return(
        <div>
            <h1>time</h1>
        </div>
    )

}
export default Time;