import React from "react";
import ModelCard from './modelcard';
import styles from './rightmodels.module.css';
import { useState, useEffect } from "react";
import axios from "axios";


function RightModels(props) {

    const { task, library } = props;
    const [docs, setDocs] = useState([]);
    useEffect(() => {
        axios.get('/api/models')
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
        <div style={{height: 'calc(100vh - 56px - 80px)' }}>
            <div className={styles.models}>
                Models
            </div>

            <div style={{padding: '20px', backgroundColor: 'magenta', height: 'calc(100vh - 56px - 80px - 50px)', width: '100%'}}>
                {docs && docs.map(doc => <ModelCard key={doc._id} clicked={0} doc={doc}/>)}
            </div>
        </div>
    );
}


export default RightModels;