import React from 'react';

const UserOutput = (props) =>{
        return(
            <div className='UserOutput'>
                {props.username}
                <p>Test Paragraph 1</p>
                <p>Test Paragraph 2</p>
                <p>Test Paragraph 3</p>
                <p>Test Paragraph 4</p>
            </div>
        );
}

export default UserOutput;