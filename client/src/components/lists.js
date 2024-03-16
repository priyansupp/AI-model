import React from "react";
import styles from './lists.module.css';

function Lists(props) {

    const handleClick = (e) => {
        props.setClicked(!props.clicked);
    }

    return (
        <div className={styles.list}>
            <ul>
                {
                    props.list.map((item) => <li onClick={handleClick} key={item.id}>{item.name}</li>)
                }
            </ul>
        </div>
    );
}


export default Lists;