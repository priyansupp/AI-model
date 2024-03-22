import React from "react";
import ModelCard from './modelcard';
import styles from './rightmodels.module.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { MdForum } from "react-icons/md";

function RightBlogs(props) {

    const { task, library } = props;
    const [docs, setDocs] = useState([]);
    useEffect(() => {
        axios.get('https://ai-model-api.azurewebsites.net/'+'/api/blogs')
        .then((response) => {
            const data = response.data;
            const res1 = data.filter(x => {
                return ((x.category === task) || (task === 'All'));
            });
            const res2 = res1.filter(x => {
                return ((x.library === library) || (library === 'All'));
            });
            setDocs(res2);
        })
        .catch(e => {
            console.log(`Error : ${e}`);
        })
    }, [task, library]);

    return (
        <div classname={styles.modelcontainer}>
            <div className={styles.heading}>
                Discussion Forum <MdForum />
            </div>

            <div className= {styles.display}>
                {docs && docs.map(doc => <ModelCard key={doc._id} clicked={1} doc={doc}/>)}
            </div>
        </div>
    );
}


export default RightBlogs;