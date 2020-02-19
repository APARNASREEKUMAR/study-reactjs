import React from "react";

const ValidationComponent = (props) => {
    return (
        <div>
            { props.characterCount >5 ?
               <p>Word tooo Long</p>

                :<p>Word too short</p>


            }
        </div>
    );
}

export default ValidationComponent;