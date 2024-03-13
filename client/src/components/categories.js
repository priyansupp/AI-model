import React from "react";
import Lists from "./lists";
import Category from "./category";
import styles from './categories.module.css';

function Categories() {
    const list = [
        {name: 'Models', id: 1},
        {name: 'Blogs', id: 2}
    ];
    return (
        <div className={styles.listings}>
            <Lists list={list}/>
            <Category name='Text to Image'/>
            <Category name='CNN implementation to Image'/>
            <Category name='Deep learning stuff'/>
            <Category name='Depth estimation'/>
            <Category name='Text to Image'/>
            <Category name='Text to Image'/>
            <Category name='Text to Image'/>
            <Category name='Text to Image'/>
            <Category name='Text to Image'/>
            <Category name='Text to Image'/>
            <Category name='Text to Image'/>
        </div>
    );
}

export default Categories;