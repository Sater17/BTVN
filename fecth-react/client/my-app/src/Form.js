import React from "react";

function Form(props) {
    return (
        <div>
            <form onSubmit={props.submitHandler}>

                Input:
                <input type='text' placeholder='Input the link' name='url'></input>

                <button>Short URL</button>
            </form>
        </div>
    )
}
export default Form;