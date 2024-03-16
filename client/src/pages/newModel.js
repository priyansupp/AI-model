import React, { useState } from 'react';
import styles from './newModel.module.css';

function NewModelPage() {
  const [userName, setUserName] = useState('');
  const [modelName, setModelName] = useState('');
  const [category, setCategory] = useState('');
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

    setUserName('');
    setModelName('');
    setCategory('');
    setGithubLink('');
    setModelDescription('');
    setValidationError('');
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
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
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
                    <option value=''>Select category</option>
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
