import React from 'react';

const UserInput = (props) =>{
        return(
            <div className='UserInput'>
                <input onChange={props.switchName}/>
            </div>
        );
}

export default UserInput;