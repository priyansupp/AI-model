import React from "react";
import styles from './models.module.css';
import Categories from "../components/categories";
import RightModels from "../components/rightmodels";

function Models() {
    return (
        <div className={styles.modelsPage}>
            <div className={styles.cont}>
                <div className={styles.left}>
                    <Categories />
                </div>
                <div className={styles.center}>
                    <RightModels />
                </div>
            </div>
        </div>
    );
}

export default Models;