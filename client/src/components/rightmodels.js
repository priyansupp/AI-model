import React from "react";
import ModelCard from './modelcard';
import styles from './rightmodels.module.css';
import { useState, useEffect } from "react";
import axios from "axios";

// TODO: Implement the filter functionality

const filter = () => {
    return "Hello";
}

function RightModels() {
    const [docs, setDocs] = useState([]);
    useEffect(() => {
        axios.get('/api/models')
        .then((response) => {
            setDocs(response.data);
        })
        .catch(e => {
            console.log(`Error : ${e}`);
        })
    }, [])
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