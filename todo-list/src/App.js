import Time from './Time/Time'
import Form from './Form/Form.js'
import Frame from './Frame/Frame.js'
import { useEffect, useState } from 'react'
import './app.css'

function App() {

    let [data, setData] = useState({})

    let [time, setTime] = useState(0)
    let tmp = 0
    function submitHandler(e) {
        e.preventDefault()
        let event = e.target.event.value
        let date = e.target.date.value

        let arr = date.split('/')
        let dateInput = Number(arr[0]) * 3600 + Number(arr[1]) * 60 + Number(arr[2])
        console.log(dateInput)
        tmp = dateInput
        console.log(tmp)
        setTime(dateInput)
        setData({ ...data, [event]: date })
        console.log({ ...data, [event]: date })

    }
    console.log(tmp)
    // useEffect(()=>{

    // })

    return (
        <div>
            <div className="intro">
                <p>WELLCOME TO MY FUCKING TO DO-LIST APP</p>
            </div>
            <Time time={time}></Time>
            <div className="container">
                <Form submitHandler={submitHandler}></Form>
                <Frame data={data}></Frame>
            </div>
        </div>
    )
}
export default App;