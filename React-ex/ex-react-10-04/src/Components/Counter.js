import { useDebugValue, useState } from "react"
import './Counter.css'
const Counter = (props) => {
    const [value, setValue] = useState(props.startNumber);
   
    const IncreaseEvent = () => {
        setValue( ( prevValue ) => prevValue+1 );
    }

    const DecreaseEvent = () => {
        setValue( ( prevValue ) => prevValue-1 );
    }

    return ( 
        <>
            <button onClick={IncreaseEvent}>+</button>
            <button onClick={DecreaseEvent}>-</button>
            <p>Counter: <span>{value}</span></p>
        </>
    )
}

export default Counter;