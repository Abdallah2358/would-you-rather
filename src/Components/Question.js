import React from 'react';

 const Question = () => {
    return (
        
        <div>
            {/*
                 Text “Would You Rather”;
                Avatar of the user who posted the polling question; and
                Two options. 
            */}
            <h2>Would You Rather ?</h2>
            <select className="form-select pb-0 mb-0 " multiple aria-label="multiple select example">
                <option value="1">option 1</option>
                <option value="2">option 2</option>
            </select>
        </div>
    )
}
export default Question;