import React from 'react'
import './form.css'

function Form(props) {
    return (
        <div className="form">
            <form onSubmit={props.submitHandler}>
                Event:
                <input type='text' name='event' ></input><br></br>
                Date : 
                <input type='text' name='date'></input><br></br>
                <button>Submit</button>
            </form>

        </div>
        
    )
}
export default Form;