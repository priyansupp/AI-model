import React, { useEffect } from "react";
import styles from './spotlight.module.css';
import ModelCard from "./modelcard";
import Lists from './lists';
import { useState } from "react";
import axios from "axios";

// dummy function to pass in <Lists> component
const foo = () => {
    return;
}

function Spotlight() {
    const [clicked, setClicked] = useState(0);
    const [docs, setDocs] = useState([]);
    const list = [
        {name: 'Models', id: 0},
        {name: 'Blogs', id: 1}
    ];

    useEffect(() => {
        console.log(clicked);
        const url = (clicked ? '/api/blogs' : '/api/models');
        axios.get(url)
        .then((response) => {
            setDocs(response.data.filter(doc => {
                if(doc.likes.length >= 1) return true;
            }).sort((a, b) => {
                return b.likes.length - a.likes.length;
            }));
        })
        .catch(e => {
            console.log(`Error : ${e}`);
        })
    }, [clicked])

    return (
        <div className={styles.spotlight}>
            <div className={styles.heading}> Spotlight</div>
            <Lists list={list} setTask={foo} setLibrary={foo} setClicked={setClicked} clicked={clicked}/>

            <div className={styles.spotlightcontainer}>
                {docs && docs.map(doc => <ModelCard key={doc._id} clicked={clicked} doc={doc}/>)}
            </div>
        </div>
    );
}

export default Spotlight;