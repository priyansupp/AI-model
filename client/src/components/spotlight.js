import React, { useEffect } from "react";
import styles from './spotlight.module.css';
import ModelCard from "./modelcard";
import Lists from './lists';
import { useState } from "react";
import axios from "axios";

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
            setDocs(response.data);
        })
        .catch(e => {
            console.log(`Error : ${e}`);
        })
    }, [clicked])

    return (
        <div style={{height: 'calc(100vh - 56px - 80px)' }}>
            <div className={styles.spotlight}>
                Spotlight
            </div>
            <Lists list={list} setClicked={setClicked} clicked={clicked}/>

            <div style={{padding: '20px', backgroundColor: 'magenta', height: 'calc(100vh - 56px - 80px - 50px)', width: '100%'}}>
                {docs && docs.map(doc => <ModelCard key={doc._id} clicked={clicked} doc={doc}/>)}
            </div>
        </div>
    );
}

export default Spotlight;