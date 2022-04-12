import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"

import styles from "./Article.module.css"
import Comments from './Comments';
import {BASE_URL} from "../../constant"



const Article = () => {
    const params = useParams()

    const[post, setPost] = useState({})
    const postId = parseInt(params.id);

    useEffect(() =>{

        const url = BASE_URL + '/posts/' + postId;
        fetch(url)
            .then(response => response.json())
            .then(data => setPost(data))
    },[])



    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <img
                    src={post.userImg} alt=""/>
                <p>{post.name}{post.data}</p> <br/>
            </div>
            <h1>{post.title}</h1>
            <div className={styles.df}>
            {
                post.tag
            }
            </div>
            <img src={post.imageUrl}/> <br/>
            <p>{post.desc}</p>
             <br/> <br/>
            <Comments postId={postId}/>
        </div>
    );
};
export default Article;