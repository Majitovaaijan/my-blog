import React from 'react';
import styles from "./Cards.module.css";

const Cards = (props) => {
    return (
        <div className={styles.container1}>
            <p className={styles.name}>Name: <span>{props.name}</span> <button className={styles.btn}>Follow</button></p>
            <p>email: <span>{props.item.email}</span></p>
            <p>phone: <span>{props.item.phone}</span></p>
            <p>website: <span>{props.item.website}</span></p>
            <br/>
            <p className={styles.name}>Company name: <span>{props.companyName}</span></p>
        </div>
    );
};

export default Cards;