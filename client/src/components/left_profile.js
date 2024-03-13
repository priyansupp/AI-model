import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import styles from './left_profile.module.css';

function LeftProfile() {
    return (
        <div style={{height: 'calc(100vh - 56px - 80px)' }}>
            <div className={styles.left_new_btn}>
                <Button>New</Button>
            </div>
            <div className={styles.left_align}>
                <span className={styles.username}>Username</span>
                <span className={styles.left_options}>Profile</span>
                <span className={styles.left_options}>Inbox</span>
                <span className={styles.left_options}>Blogs</span>
            </div>
        </div>
    );
}


export default LeftProfile;
