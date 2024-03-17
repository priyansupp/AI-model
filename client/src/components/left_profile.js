import React from 'react';
import styles from './left_profile.module.css';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Dropdown from 'react-bootstrap/Dropdown';

function LeftProfile() {

    const [cookie, _] = useCookies();
    const path = `/profile/${cookie.userid}`;

    return (
        <div className={styles.leftcontainer}>
            <div className={styles.header}>
                <Dropdown>
                    <Dropdown.Toggle  className={styles.dropdown} id="dropdown-basic">
                        Create
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/newModel">New Model</Dropdown.Item>
                        <Dropdown.Item href="/newBlog">New Blog</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className={styles.content}>
                <span className={styles.username}>{cookie.username}</span>
                <Link className={styles.left_options_link} to={path}><span className={styles.left_options}>Profile</span></Link>
            </div>
        </div>
    );
}


export default LeftProfile;
