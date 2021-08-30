import React from 'react';
import List from '../List/List'

function Frame(props) {
    return(
        <div className='frame'>
            {Object.keys(props.data).map((key)=>{

                return(
                    <List key={key}

                    event={key} 
                    deadline={props.data[key]}>
                    
                    </List>
                )
            })}
        </div>
    )
}
export default Frame;