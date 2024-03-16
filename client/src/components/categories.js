import React from "react";
import Lists from "./lists";
import Category from "./category";
import styles from './categories.module.css';
import { useState } from "react";



const tasks = [{name:'All', id:0}, {name:'Text to Image', id:1}, {name:'Sentiment Analysis', id:2}, {name:'Generative AI model', id:3}];
const libraries = [{name:'All', id:0}, {name:'Pytorch', id:1}, {name:'Pandas', id:2}, {name:'Numpy', id:3}, {name:'Tensorflow', id:4}, {name:'Keras', id:5}, {name:'Sci-py', id:6}];

function Categories(props) {

    const { setTask, setLibrary } = props;
    const [clicked, setClicked] = useState(0);
    const list = [
        {name: 'Tasks', id: 0},
        {name: 'Libraries', id: 1}
    ];
    return (
        <div className={styles.listings}>
            <Lists list={list} setTask={setTask} setLibrary={setLibrary} setClicked={setClicked} />
            {
                clicked
                ?
                <div>
                    {libraries.map((cat) => <Category clicked={1} setTask={setTask} setLibrary={setLibrary} name={cat.name} key={cat.id} />)}
                </div>
                :
                <div>
                    {tasks.map((cat) => <Category clicked={0} setTask={setTask} setLibrary={setLibrary} name={cat.name} key={cat.id} />)}
                </div>
            }
        </div>
    );
}

export default Categories;