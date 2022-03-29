import React, {useState} from 'react';
import Cards from "../Cards/Cards";
import {cards} from"../../constant"


const Test = () => {
    const [number, setNumber] = useState(0)
    const [data, setData] = useState([])
    //
    // const increment =() => {
    //     setNumber(number +1);
    // }
    // const decrement = () => {
    //     setNumber(number -1);
    // }
    // const getData = () => {
    //     const url = 'https://jsonplaceholder.typicode.com/users';
    //
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data) => setData(data))
    // }
    const getData = () => {
        const url = 'https://jsonplaceholder.typicode.com/users';

        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
    }
    return (
        <div className="container">

            <button onClick={getData}>Запрос данных</button>
            <h1>{number}</h1>
            {
                data.map((item)=>{
                    return(
                        <Cards key={item.id} item={item}/>
                    )
            })
            }
        </div>
    )
}


export default Test;