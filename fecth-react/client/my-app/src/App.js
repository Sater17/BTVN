import React, { useState, useEffect } from 'react';
import Form from './Form.js';


function App() {

    let [res, setRes] = useState({})
    let [flag,setFlag]= useState(true)

    useEffect(() => {
        fetch('/api')
            .then(res => res.json())
            .then(data => {
                setRes(data)
                console.log(data)
            })
            .catch((e) => console.log(e))
    }, [flag])

    function submitHandler(e) {
        e.preventDefault();

        let link = e.target.url.value

        setFlag(!flag)

    }
    return (
        <div>
            <Form submitHandler={submitHandler}></Form>
            <p>ShortURL: </p>
            {Object.keys(res).map((key) => {
                return (
                    <div key={key} >
                        <p>{res[key]}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default App;