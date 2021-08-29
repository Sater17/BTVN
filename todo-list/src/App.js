import Time from './Time/Time'
import Form from './Form/Form.js'
import List from './List/List'
import { useEffect, useState } from 'react'

function App(){

    let [data,setData]=useState([])
    let  tag=''
    let time=0
    let flag=true
    function submitHandler(e){
        e.preventDefault()
        let event=e.target.event
        
        
        // let date=e.target.date
        console.log(event)
        // let arr=date.split('/')
        // let dateInput=Number(arr[0])*3600+Number(arr[1])*60+Number(arr[2])
        // time=dateInput
        // let tmp=[]
        // tmp.push(event)
        // tmp.push(date)
        // tag.push(tmp)
        flag=!flag
    }
    // useEffect(()=>{
    //     setData(tag)
    // },flag)
    
    return(
        <div>
            <Time time={time}></Time>
            <Form submitHandler={submitHandler}></Form>
            {/* <List></List> */}

        </div>
    )
}
export default App;