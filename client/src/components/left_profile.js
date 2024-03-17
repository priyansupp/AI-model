import React, {useContext} from 'react';
import styles from './left_profile.module.css';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { AuthContext } from '../context/authContext';
import axios from 'axios';

function LeftProfile() {

    const [cookie, _] = useCookies(['userid']);
    const path = `/profile/${cookie.userid}`;
    // console.log(cookie.userid);

    const { setIsAuthenticated } = useContext(AuthContext);

    
    const handleLogout = (e) => {
        e.preventDefault();
        axios.get('/auth/logout')
        .then(() => {
          console.log(`Logged out`);
        })
        .catch(e => {
          console.log(`Error in logging out: ${e}`);
        });
        // removeCookie('userid');
        // removeCookie('token');
        setIsAuthenticated(false);
      }
    

    return (
        <div className={styles.leftcontainer}>
            <div className={styles.header}>
                <Dropdown>
                    <Dropdown.Toggle className={styles.dropdown} variant= "success" id="dropdown-basic">
                        Create
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/newModel">New Model</Dropdown.Item>
                        <Dropdown.Item href="/newBlog">New Blog</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className={styles.content}>
                <div className={styles.username}>Username</div>
                <Link to={path}><div className={styles.left_options}>Profile</div></Link>
                    <Button onClick={handleLogout} eventKey="4" variant= "success">Logout</Button>
            </div>
        </div>
    );
}


export default LeftProfile;
