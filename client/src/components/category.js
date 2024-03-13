import React from 'react';
import styles from './category.module.css';

function Category(props) {
    return (
        <div className={styles.catdiv}>
            <span className={styles.category}>
                {props.name}
            </span>
        </div>
    );
}

export default Category;