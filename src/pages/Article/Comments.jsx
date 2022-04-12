import React, {useEffect, useState} from 'react';
import styles from "./Comments.module.css"
import {BASE_URL} from '../../constant';
import {toast} from "react-hot-toast";
import {getCurrentDate} from "../../helpers";

const Comments = (props) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const getName = (event)=> {
        setName(event.currentTarget.value)
    }

    const getComment = (event)=>{
        setComment(event.currentTarget.value)
    }
    const getCommentsByPostId = () =>{
        const url = BASE_URL + '/comments?postId=' + props.postId
        fetch(url)
            .then(response=>{
                if(response.status === 200){
                    return response.json();
                }else{
                    toast.error('Загрузка комментариев не удалась');
                }
            })
            .then(data => setComments(data))
    }
    const addComment = () =>{

        const obj = {
            author:name,
            text:comment,
            postID:props.postId,
            date:getCurrentDate()

        }
        const url = BASE_URL + '/comments'

        const options = {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        }
        fetch(url,options)
            .then(response =>{
                if(response.status === 201){
                    toast.success('Ваш комментарий успешно добавлен');
                    getCommentsByPostId()
                }else{
                    toast.error('Что-то пошло не так. Попробуйте заново!');
                }
            })
    }

   useEffect(() => {
        getCommentsByPostId()
    },[])

    return (
        <div className={styles.comments}>
            <h4>Комментарии</h4>
            <div className={styles.container}>
                <img src="https://sevelina.ru/images/uploads/2014/02/287.png" alt=""/>
                <input onChange={getName} className={styles.container1} type="text" placeholder='Введите имя'/>
                <input onChange={getComment} type="text" placeholder='Введите текст комментария'/>
                <button onClick={addComment}>Оставить комментарий</button>
            </div>
            <br/> <br/>
            <h5>122 комментариев {
                comments.map((item) => {
                    return <>
                        <div key={item.id} className={styles.container}>
                            <p>{item.author}</p> <br/>
                        </div>
                        <p>{item.text}</p>
                        <h6>Ответить</h6>
                    </>
                })
            }
            </h5>
        </div>
    );
};

export default Comments;