import { useState } from 'react';

const Child = ({ onChildClick, ...props }) => {

    // const clickHandler = (event) => {
    //     event.preventDefault();
    //     console.log(props);
    //     // console.log("onChildClick: ", event.target.value);
    //     props.onChildClick(event.target.value);
    // }

    return (
        <>
            <p>
                <input type="button" value="click me" onClick={onChildClick} />
            </p>
        </>
    )
}


const Parent = ( props ) => {
    // console.log(props);
    const [children, setChilds] = useState(props.children);
    
    const newChilds=[...children];

    const onChildClick = () => {
        console.log("onChildClick ");
        newChilds.push(newChilds.length+1);
        setChilds(newChilds);
        console.log(newChilds);

    }

    // newChilds.push(newChilds.length+1);

    return (
        <>
            {newChilds.map((child, idx) =>
                <Child key={idx} onChildClick={onChildClick} />
            )}
        </>
    )
}

export default Parent;