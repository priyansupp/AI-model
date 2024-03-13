import React from "react";
import styles from './lists.module.css';

function Lists(props) {
    
    return (
        <div className={styles.list}>
            <ul>
                {
                    props.list.map((item) => <li key={item.id}>{item.name}</li>)
                }
            </ul>
        </div>
    );
}


export default Lists;