import React from 'react'
import './form.css'

function Form(props) {
    return (
        <div>
            <form onSubmit={props.submitHandler}>
                <label>event:</label>
                <input type='text' name='event'></input>
                <label>Date:</label>
                <input type='text' name='date'></input>
                <button>Submit</button>
            </form>

        </div>
        
    )
}
export default Form;