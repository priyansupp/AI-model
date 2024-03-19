import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from './modelDesc.module.css'
import TextEditor from '../components/quilleditor';
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import RatingComponent from '../components/rating';


function ModelDesc() {

  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [user, setUser] = useState({});
  const [model, setModel] = useState({});
  const [likes, setLikes] = useState(0);
  const [cookie, setCookie] = useCookies();

  useEffect(() => {
    axios.get(`/api/models/${id}`)
    .then(response => {
      setModel(response.data);
      axios.get(`/api/profile/${response.data.userid}`)
      .then(res2 => {
        setUser(res2.data);
      })
      .catch(e => {
        console.log(`Error in fetching user: ${e}`);
      })
    })
    .catch(e => {
      console.log(`Error in fetching model: ${e}`);
    });
  }, [id]);

  const handleLike = async (e) => {
    e.preventDefault();
    await axios.patch(`/api/models/${id}`, {likedBy: cookie.userid})
    .then(response => {
      console.log(response.data);
    })
    .catch(e => {
      console.log(`Error in fetching model: ${e}`);
    });
  }

  const path = `/profile/${user._id}`;
  
  return (
    <div className ={styles.container}>
    <div className={styles.header}>
      <Link to={path}><span>{user.username}</span></Link>
      <span>/</span>
      <span>{model.modelname}</span>
      </div>
      <div className={styles.column}>
        <div className={styles.tabs}>
            <Tabs defaultActiveKey="description" id="model-tabs" className="mb-3">
              <Tab eventKey="description" title="Description">
               <div className={styles.desc}>
                <p>
                  {model.desc}
                </p>
               </div>
              </Tab>
              <Tab eventKey="code" title="Code">
                <div className={styles.modelCode}>
                  <TextEditor/>
                </div>
              </Tab>
            </Tabs>
        </div>
        <div className={styles.metadata}>
        <section class="pt-8 border-gray-100 md:col-span-5 pt-6 md:pb-24 md:pl-6 md:border-l order-first md:order-none">
          <div class="flex justify-between pb-2">
            <dl>
              <dt class="-mb-1 text-sm text-gray-500">
                Downloads last Month
              </dt>
              <dd class="font-semibold">10,765</dd>
            </dl>
            <div className={styles.divider}></div>
            <div className={styles.button} >{model.category}</div>
            <div className={styles.divider}></div>
            <div className={styles.button} >{model.library}</div>
            <div className={styles.divider}></div>
            <div className={styles.bcontainer}>
            <div
              className={styles.like}
              onClick={handleLike}>
              {model.likes ? model.likes.length : 0} Likes
            </div>
            
            <div
              className={styles.like}
              >
              Rating: {model.rating}
            </div>
            <RatingComponent id={id} />
            </div>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
}

export default ModelDesc;