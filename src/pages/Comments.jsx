import React from 'react';
import "./Article.css"

const Comments = () => {
    return (
        <>
            <h4>Comments:</h4>
            <form action="">
                <input className="name" type="text" placeholder="Введите ФИО"/>
                <br/>
                <textarea name="" id="" cols="50" rows="10"></textarea>
                <br/>
                <input className="submit" type="submit"/>
            </form>
            <div className="userComments">
                <h5>radneck 22.03.2022 в 20:32</h5>
                <p>Давно калий стал радиоактивным?</p>
            </div>
        </>
    );
};

export default Comments;