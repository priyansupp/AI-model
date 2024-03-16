import React from "react";
import styles from './models.module.css';
import Categories from "../components/categories";
import RightModels from "../components/rightmodels";
import { useState } from "react";

function Models() {
    const [task, setTask] = useState('');
    const [library, setLibrary] = useState('');

    return (
        <div className={styles.modelsPage}>
            <div className={styles.cont}>
                <div className={styles.left}>
                    <Categories setTask={setTask} setLibrary={setLibrary} />
                </div>
                <div className={styles.center}>
                    <RightModels task={task} library={library} />
                </div>
            </div>
        </div>
    );
}

export default Models;