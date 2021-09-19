import React, { useState, useEffect } from 'react';
import Form from './Form.js';


function App() {

    let [res, setRes] = useState({})

    useEffect(() => {
        fetch('/api/')
            .then(res => res.json())
            .then(data => {
                setRes(data)
                console.log(data)
            });
    }, [])

    function submitHandler(e) {
        e.preventDefault();

        let link = e.target.url.value

        // setRes(link)

    }
    return (
        <div>
            <Form submitHandler={submitHandler}></Form>
            <p>ShortURL: </p>
            {Object.keys(res).map((value, key) => {

                <div key={key} >
                    <p>{res[value]}</p>
                </div>

            })}
        </div>
    )
}
export default App;