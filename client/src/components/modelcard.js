import React from "react";
import logo from '../assets/logo192.png';
import styles from './modelcard.module.css';

function ModelCard() {
    return (
        <div className={styles.model}>
            <div className={styles.model_grid}>
                <div className={styles.model_logo}>
                    <img src={logo}/>
                </div>
                <div className={styles.details}>
                    <div>Username / Modelname</div>
                    <ul>
                        <li>Category</li>
                        <li>Likes</li>
                        <li className={styles.rating_stars}>
                            <span>Rating: </span>
                            <span className="rating-stars">★★★★☆</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.desc}>
                <p>description of the best AI model the worldd would have jai ho nfifjernjb jfbjeb jiwebfjeb jk erbg jkrekbgjirebgjirengkmdfbijsbf jngijb ever seen with naked eyes and stuff.</p>
            </div>
        </div>
    );
}


export default ModelCard;