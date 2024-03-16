import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import styles from './left_profile.module.css';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function LeftProfile() {

    const [cookie, _] = useCookies(['userid']);
    const path = `/profile/${cookie.userid}`;
    // console.log(cookie.userid);
    


    return (
        <div style={{height: 'calc(100vh - 56px - 80px)' }}>
            <div className={styles.left_new_btn}>
                <Button>New</Button>
            </div>
            <div className={styles.left_align}>
                <span className={styles.username}>Username</span>
                <Link to={path}><span className={styles.left_options}>Profile</span></Link>
            </div>
        </div>
    );
}


export default LeftProfile;
