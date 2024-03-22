import React from "react";
import Lists from "./lists";
import Category from "./category";
import styles from './categoriesHolder.module.css';
import { useState } from "react";

const tasks = ['All', 'Text to Image', 'Sentiment Analysis', 'Image Classification', 'Summarization', 'Translation', 'Voice Activity Detection', 'Reinforcement Learning', 'Robotics', 'Video Classification', 'Feature Extraction', 'Object Detection', 'Sentiment Analysis', 'GLOW Model'];
let taskObject = [];
let x = 1;
for(let i = 0; i < tasks.length; i++) {
    taskObject.push({
    name: tasks[i],
    id: x++
  });
}

const libraries = ['All', 'Pytorch', 'Tensorflow', 'Keras', 'Transformers', 'NeMo', 'OpenCLIP', 'Rust', 'spaCy', 'paddlenlp', 'Diffusers', 'fastText'];
let libObject = [];
x = 1;
for(let i = 0; i < libraries.length; i++) {
  libObject.push({
    name: libraries[i],
    id: x++
  });
}


function Categories(props) {

    const { setTask, setLibrary } = props;
    const [clicked, setClicked] = useState(0);
    const list = [
        {name: 'Category', id: 0},
        {name: 'Libraries', id: 1}
    ];
    return (
        <div className={styles.listings}>
            <Lists list={list} setTask={setTask} setLibrary={setLibrary} setClicked={setClicked} />
            {
                clicked
                ?
                <div className={styles.category}>
                    {libObject.map((cat) => <Category clicked={1} setTask={setTask} setLibrary={setLibrary} name={cat.name} key={cat.id} />)}
                </div>
                :
                <div className={styles.library}>
                    {taskObject.map((cat) => <Category clicked={0} setTask={setTask} setLibrary={setLibrary} name={cat.name} key={cat.id} />)}
                </div>
            }
        </div>
    );
}

export default Categories;