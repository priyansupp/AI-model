import React, {useContext} from 'react';
import styles from './left_profile.module.css';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LeftProfile() {

    const navigator = useNavigate();
    const [cookie, _] = useCookies();
    const path = `/profile/${cookie.userid}`;

    
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
      }
    
      const handleLogin = (e) => {
        navigator('/login');
      }

    return (
        <div className={styles.leftcontainer}>
            {
                cookie.authenticated
                ?
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
                :
                <></>
            }
            {
                cookie.authenticated
                ?
                <div className={styles.divider} />
                :
                <></>
            }
            <div className={styles.content}>
                {
                    cookie.authenticated
                    ?
                    <>
                        <span className={styles.username}>{cookie.username}</span>
                        <Link className={styles.left_options_link} to={path}><Button className={styles.left_options} variant="success">Visit Profile</Button></Link>
                    </>
                    :
                    <></>
                }
            </div>
                {
                    cookie.authenticated
                    ?
                    <div className={styles.divider} />
                    :
                    <></>
                }
            <div className={styles.content}>
                <Button className={styles.button} onClick={ cookie.authenticated ? handleLogout : handleLogin } eventKey="4" variant= "success">
                    {
                        cookie.authenticated
                        ?
                        <>Logout</>
                        :
                        <>Login</>
                    }
                </Button>
            </div>
        </div>
    );
}


export default LeftProfile;
