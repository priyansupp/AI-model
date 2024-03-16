import React from 'react';
import styles from './left_profile.module.css';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Dropdown from 'react-bootstrap/Dropdown';

function LeftProfile() {

    const [cookie, _] = useCookies(['userid']);
    const path = `/profile/${cookie.userid}`;
    // console.log(cookie.userid);
    


    return (
        <div style={{height: 'calc(100vh - 56px - 80px)' }}>
            <div className={styles.left_new_btn}>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        New
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/newModel">New Model</Dropdown.Item>
                        <Dropdown.Item href="/newBlog">New Blog</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className={styles.left_align}>
                <span className={styles.username}>Username</span>
                <Link to={path}><span className={styles.left_options}>Profile</span></Link>
            </div>
        </div>
    );
}


export default LeftProfile;
