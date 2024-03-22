import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import ModelCard from "../components/modelcard";
import styles from './profile.module.css';
import logo from '../assets/logo192.png';
import axios from "axios";
import { useLocation } from "react-router-dom";

function Profile() {
    const location = useLocation();
    const id = location.pathname.split('/')[2];

    const [models, setModels] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get('https://ai-model-api.azurewebsites.net/'+`/api/models/profile/${id}`)
        .then(response => {
            setModels(response.data);
        })
        .catch(e => {
            console.log(`Error in fetching models: ${e}`);
        });

        axios.get('https://ai-model-api.azurewebsites.net/'+`/api/blogs/profile/${id}`)
        .then(response => {
            setBlogs(response.data);
        })
        .catch(e => {
            console.log(`Error in fetching blogs: ${e}`);
        });

        axios.get('https://ai-model-api.azurewebsites.net/'+`/api/profile/${id}`)
        .then(response => {
            setUser(response.data);
        })
        .catch(e => {
            console.log(`Error in fetching user: ${e}`);
        });
    }, [id]);

    return (
        <Container fluid className={styles.container}>
            <Row className={styles.row}>
                <Col md={3} className={styles['left-container']}>
                    <div className={styles.name}>
                        <div style={{ fontSize: '40px', fontWeight: '800' }}>{user.username}</div>
                        <div style={{ fontSize: '24px' }}>{user.name}</div>
                        <div style={{ fontSize: '16px', fontStyle: 'italic' }}>{user.email}</div>
                    </div>
                    <div className={styles.picture}>
                        <img src={logo} alt="Profile" className="img-fluid" />
                    </div>
                </Col>
                <Col md={9} className={styles['right-container']}>
                    <Card> 
                        <Card.Body>
                            <h3>Models</h3>
                            <div className={styles.modelSection}>
                                {models.map((model) => (
                                    <ModelCard key={model._id} doc={model} clicked={false} />
                                ))}
                            </div>
                        </Card.Body>
                     </Card>
                    <div className={styles.gap}></div>
                    <Card>
                        <Card.Body>
                            <h3>Queries</h3>
                            <div className={styles.modelSection}>
                                {blogs.map((blog) => (
                                    <ModelCard key={blog._id} doc={blog} clicked={true} />
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;
