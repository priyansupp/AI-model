import React, { useEffect, useState } from 'react';
import styles from './newModel.module.css';
import axios from 'axios';
import { UserContext } from '../context/userContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

function NewModelPage() {

  const { isAuthenticated } = useContext(AuthContext);
  const { user } = useContext(UserContext);
  console.log(user.username);
  console.log(`User is: ${isAuthenticated}`);

  const navigator = useNavigate();
  const [modelName, setModelName] = useState('');
  const [category, setCategory] = useState('');
  const [library, setLibrary] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [modelDescription, setModelDescription] = useState('');
  const [validationError, setValidationError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    const words = modelDescription.trim().split(/\s+/);
    if (words.length > 250) {
      setValidationError('Model description should be less than 250 words.');
      return;
    }
    const data = {
      Userid: user._id,
      Modelname: modelName,
      Desc: modelDescription,
      Url: githubLink,
      Cat: category,
      Lib: library
    }
    axios.post('/models', data)
    .then(response => {
      console.log(response.data.success);
      navigator('/');
    })
    .catch(e => {
      console.log(`Error in posting model: ${e}`);
    })
  };

  return (
    <div className="container">
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <h2 className='card-title text-center'>Create a new model</h2>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label className= {styles.label}>User Name:</label>
                  <input
                    type='text'
                    className='form-control'
                    value={user.username}
                    required
                  />
                </div>
                {/* { isAuthenticated ? <p>ha logged in hai</p> : <p>Nhi hai logged in</p> } */}
                <div className='form-group'>
                  <label className= {styles['label']}>Model Name:</label>
                  <input
                    type='text'
                    className='form-control'
                    value={modelName}
                    onChange={(e) => setModelName(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label className= {styles['label']}>Category:</label>
                  <select
                    className='form-control'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option value=''>Select Category</option>
                    <option value='A'>A</option>
                    <option value='B'>B</option>
                    <option value='C'>C</option>
                    <option value='D'>D</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label className= {styles['label']}>Library:</label>
                  <select
                    className='form-control'
                    value={library}
                    onChange={(e) => setLibrary(e.target.value)}
                    required
                  >
                    <option value=''>Select Library</option>
                    <option value='A'>A</option>
                    <option value='B'>B</option>
                    <option value='C'>C</option>
                    <option value='D'>D</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label className= {styles['label']}>Github Link:</label>
                  <input
                    type='text'
                    className='form-control'
                    value={githubLink}
                    onChange={(e) => setGithubLink(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label className= {styles['label']}>Model Description:</label>
                  <textarea
                    className='form-control'
                    value={modelDescription}
                    onChange={(e) => setModelDescription(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group text-center'>
                  <button type='submit' className="btn btn-primary">Create Model</button>
                </div>
                {validationError && (
                  <div className='alert alert-danger'>{validationError}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewModelPage;
