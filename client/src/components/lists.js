import React from "react";
import styles from './lists.module.css';

function Lists(props) {

    const { list, setTask, setLibrary, setClicked } = props;

    const handleClick = (e, id) => {
        if(id) setClicked(1);
        else setClicked(0);
        setTask('All');
        setLibrary('All');
    }

    return (
        <div className={styles.list}>
            <ul>
                {
                    list.map((item) => <li onClick={(e) => handleClick(e, item.id)} key={item.id}>{item.name}</li>)
                }
            </ul>
        </div>
    );
}


export default Lists;