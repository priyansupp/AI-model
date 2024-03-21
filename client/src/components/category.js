import React from 'react';
import styles from './category.module.css';

function Category(props) {
    const { setLibrary, setTask, name, clicked } = props;
    const handleClick = (e) => {
        // console.log(name);
        if(clicked) setLibrary(name);
        else setTask(name);
    }
    return (
        <div className={styles.catdiv}>
            <span onClick={handleClick} className={styles.category}>
                {name}
            </span>
        </div>
    );
}

export default Category;