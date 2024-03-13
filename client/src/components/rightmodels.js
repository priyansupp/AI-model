import React from "react";
import ModelCard from './modelcard';
import styles from './rightmodels.module.css';

function RightModels() {
    return (
        <div style={{height: 'calc(100vh - 56px - 80px)' }}>
            <div className={styles.models}>
                Models
            </div>

            <div style={{padding: '20px', backgroundColor: 'magenta', height: 'calc(100vh - 56px - 80px - 50px)', width: '100%'}}>
                <ModelCard />
                <ModelCard />
                <ModelCard />
                <ModelCard />
            </div>
        </div>
    );
}


export default RightModels;