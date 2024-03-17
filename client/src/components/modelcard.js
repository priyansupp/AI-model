import React, { useEffect } from "react";
import logo from '../assets/logo192.png';
import styles from './modelcard.module.css';
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ModelCard(props) {
    const doc = props.doc;
    const path = `/profile/${doc.userid}`;

    const [username, setUsername] = useState('');
    useEffect(() => {
        axios.get(`/api/profile/${doc.userid}`)
        .then(response => {
            console.log(response.data);
            setUsername(response.data.username)
        })
        .catch(e => console.log(`Error: ${e}`));
    }, []);

    // rating-stars
    const filledStar = '★', emptyStar = '☆';
    let rating = '';
    for(let i = 0; i < doc.rating; i++) rating += filledStar;
    for(let i = doc.rating; i < 5; i++) rating += emptyStar;

    if(props.clicked) {
        return (
        <div className={styles.model}>
                <div className= {styles.header}>
                    <div className={styles.model_logo}>
                        <img src={logo}/>
                    </div>
                    <div className={styles.details}>
                        <div><Link to={path}>{username}</Link> / {doc.title}</div>
                            <div>{doc.category}</div>
                            </div>
                            </div>
                            <div className={styles.modelcontent}>
                            <div>Likes: {doc.likes}</div>
                            <div className={styles.desc}>
                                 <p>{doc.content}</p>
                            </div>
                            </div>
                     </div>
        );
    } else {
        return (
            <div className={styles.model}>
                <div className= {styles.header}>
                    <div className={styles.model_logo}>
                        <img src={logo}/>
                    </div>
                    <div className={styles.details}>
                        <div><Link to={path}>{username}</Link> / {doc.modelname}</div>
                            <div>{doc.category}</div>
                            </div>
                            </div>
                            <div className={styles.modelcontent}>
                            <div>Likes: {doc.likes}</div>
                            <div className={styles.rating_stars}>
                                <span>Rating: </span>
                                <span className="rating-stars">{rating}</span>
                            </div>
                            <div className={styles.desc}>
                                 <p>{doc.desc}</p>
                            </div>
                            </div>
                     </div>
        );
    }
}


export default ModelCard;