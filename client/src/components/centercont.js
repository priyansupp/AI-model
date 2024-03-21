import React from "react";
import styles from './center.module.css'
import SpeechInput from "./speechInput";

const CenterCont = () => {
    return (
        <div className={styles.container}>
        <SpeechInput />
        </div>
    );
  }
  
  
export default CenterCont;
