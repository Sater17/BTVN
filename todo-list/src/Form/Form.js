import React from 'react'
import './form.css'

function Form(props) {
    return (
        <div>
            <form onSubmit={props.submitHandler}>
                <label>Event:</label>
                <input type='text' name='event' ></input><br></br>
                <label>Date:</label>
                <input type='text' name='date'></input><br></br>
                <button>Submit</button>
            </form>

        </div>
        
    )
}
export default Form;