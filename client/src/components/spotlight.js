import React, { useEffect } from "react";
import styles from './spotlight.module.css';
import ModelCard from "./modelcard";
import { SiSpotlight } from "react-icons/si";
import { useState } from "react";
import axios from "axios";

function Spotlight() {
    const [docs, setDocs] = useState([]);

    // const [clicked, setClicked] = useState(0);
    // const list = [
    //     {name: 'Models', id: 0},
    //     {name: 'Blogs', id: 1}
    // ];

    useEffect(() => {
        // console.log(clicked);
        // const url = (clicked ? '/api/blogs' : '/api/models');
        const url = '/api/models';
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
    }, [])

    return (
        <div className={styles.spotlight}>
            <div className={styles.heading}> Spotlight <SiSpotlight /></div>
            {/* <Lists list={list} setTask={foo} setLibrary={foo} setClicked={setClicked} clicked={clicked}/> */}

            <div className={styles.spotlightcontainer}>
                {docs && docs.map(doc => <ModelCard key={doc._id} clicked={0} doc={doc}/>)}
            </div>
        </div>
    );
}

export default Spotlight;