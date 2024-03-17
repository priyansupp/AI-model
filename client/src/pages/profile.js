import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import ModelCard from "../components/modelcard";
import styles from './profile.module.css'; 

function Profile() {
    const models = [
        { id: 1, userid: "user1", title: "Model 1", category: "Category 1", likes: 10, rating: 4, desc: "Description for Model 1" },
        { id: 2, userid: "user2", title: "Model 2", category: "Category 2", likes: 20, rating: 5, desc: "Description for Model 2" },
    ];

    return (
        <Container fluid className={styles.container}>
            <Row className={styles.row}>
                <Col md={4} className={styles['left-container']}>
                    <div className={styles.name}>Riya Shishodia</div>
                    <div className={styles.picture}>
                    <img src="default_profile_pic.jpg" alt="Profile" className="img-fluid" />
                    </div>
                </Col>
                <Col md={8} className={styles['right-container']}>
                    <card>
                        <Card.Body>
                            <h3>Models</h3>
                            <div className={styles.modelSection}>
                                {models.map((model) => (
                                    <ModelCard key={model.id} doc={model} clicked={false} />
                                ))}
                            </div>
                        </Card.Body>
                    </card>
                    <Card>
                        <Card.Body>
                            <h3>Blogs</h3>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;
