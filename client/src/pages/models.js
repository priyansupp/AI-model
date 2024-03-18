import React from "react";
import styles from './models.module.css';
import Categories from "../components/categories";
import RightModels from "../components/rightmodels";
import { useState } from "react";

function Models() {
    const [task, setTask] = useState('All');
    const [library, setLibrary] = useState('All');

    return (
        <div className={styles.modelsPage}>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <Categories setTask={setTask} setLibrary={setLibrary} />
                </div>
                <div className={styles.display}>
                    <RightModels task={task} library={library} />
                </div>
            </div>
        </div>
    );
}

export default Models;