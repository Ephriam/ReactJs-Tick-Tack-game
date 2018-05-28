import React from 'react'
import './person.css'

const person = ( props ) => {
    return (
    <div className="Person">
        <p onClick={props.handler}>
            person is {props.name} {props.children}
        </p>
       <input  onChange={props.binding}/>
    </div>
    );
}

export default person;