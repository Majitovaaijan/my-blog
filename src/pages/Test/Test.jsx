import React, {useState} from 'react';
import Cards from "../Cards/Cards";
import {toast} from "react-hot-toast";
import {BASE_URL} from "../../constant";
import Button from "../../components/Button/Button";
import styles from"./Test.module.css"
import rightIcon from "../../media/icons/Vector 2.svg"



const Test = () => {
    const [number, setNumber] = useState(0)
    const [data, setData] = useState([])

    const increment =() => {
         setNumber(number +1);
    }
     const decrement = () => {
         setNumber(number -1);
    }
    const getUsers = () =>{
        const url = BASE_URL+'/users';
        fetch(url)
            .then((response) => response.json())
            .then((data) => console.log(data))
        }

    const addUsers = () =>{
        const url = BASE_URL + '/users';

        const user = {
            name:"Sasha",
            age:18
        }
        const options = {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user)
        }
        fetch(url,options)
            .then((response) => response.json())
            .then((data) => console.log(data))
    }

    const getData = () => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
    }
    const updateUser= () =>{
        const url = BASE_URL+'/users/2';

        const users = {
            name:'Aijan',
            age:23
        }
        const options = {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(users)
        }

        fetch(url,options)
            .then((response) => console.log(response))



    }

    const deleteUser = () =>{
        const url = BASE_URL + '/users/1';
        const options = {
            method:'DELETE'
        }
        fetch(url,options)
            .then((response) => {
                if(response.status === 200){
                    toast.success('Пользователь успешно удален')
                }else if(response.status === 404) {
                    toast.error('Пользователь не найден');
                }else{
                    toast.error("Повторите попытку")
                }
            })
    }
    return (
        <div className="container">
            <button className={styles.myButton} onClick={getUsers}>Получить пользователей</button>
            <button className={styles.myButton} onClick={addUsers}>Добавить пользователей</button>
            <button className={styles.myButton} onClick={updateUser}>Изменить пользователя</button>
            <button className={styles.myButton} onClick={getData}>Запрос данных</button>
            <button className={styles.myButton} onClick={deleteUser}>Удалить пользователя</button>
            <h1>{number}</h1>
            <Button myClass='mainBtn' handleClick={getUsers}>В корзину</Button>
            <Button myClass="secondaryBtn" handleClick={addUsers}>В корзину</Button>
            <Button myClass='mainBtn' handleClick={addUsers}>В корзину  <img src={rightIcon}/></Button>
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