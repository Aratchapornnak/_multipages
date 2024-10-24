import { useState } from 'react';

import './Counter.css';
function Counter(props) {
    // let value = props.value;
    //      read    write       initial
    const [value, setValue] = useState(props.value || 0);

    function decrement() {
        setValue(value - 1);
    }

    function increment() {
        setValue(value + 1);
    }

    return ( 
        <div className="counter-container">
            <h3 className='title'>{props.name || "Counter"}</h3>
            <button className='btn btn-danger' onClick={decrement}>&minus;</button>
            <span className='value'>{value}</span> 
            <button className='btn btn-success' onClick={increment}>+</button> 
        </div> 
    );
}

export default Counter;