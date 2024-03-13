import React from "react";
import styles from './spotlight.module.css';
import ModelCard from "./modelcard";
import Lists from './lists';

function Spotlight() {
    const list = [
        {name: 'Models', id: 1},
        {name: 'Blogs', id: 2}
    ];
    return (
        <div style={{height: 'calc(100vh - 56px - 80px)' }}>
            <div className={styles.spotlight}>
                Spotlight
            </div>
            <Lists list={list}/>

            <div style={{padding: '20px', backgroundColor: 'magenta', height: 'calc(100vh - 56px - 80px - 50px)', width: '100%'}}>
                <ModelCard />
                <ModelCard />
                <ModelCard />
                <ModelCard />
            </div>
        </div>
    );
}

export default Spotlight;