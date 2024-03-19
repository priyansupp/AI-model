import React, { useState } from 'react';
import styles from './newModel.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';


const libraries = ['Pytorch', 'Tensorflow', 'Keras', 'Transformers', 'NeMo', 'OpenCLIP', 'Rust', 'spaCy', 'paddlenlp', 'Diffusers', 'fastText'];
let libObject = [];
let x = 1;
for(let i = 0; i < libraries.length; i++) {
  libObject.push({
    name: libraries[i],
    id: x++
  });
}

const categories = ['Text to Image', 'Sentiment Analysis', 'Image Classification', 'Summarization', 'Translation', 'Voice Activity Detection', 'Reinforcement Learning', 'Robotics', 'Video Classification', 'Feature Extraction', 'Object Detection', 'Sentiment Analysis', 'GLOW Model'];
let catObject = [];
x = 1;
for(let i = 0; i < categories.length; i++) {
  catObject.push({
    name: categories[i],
    id: x++
  });
}


function NewBlogPage() {
  
  const navigator = useNavigate();
  const [modelName, setModelName] = useState('');
  const [category, setCategory] = useState('');
  const [library, setLibrary] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [modelDescription, setModelDescription] = useState('');
  const [validationError, setValidationError] = useState('');
  
  const [cookie, _] = useCookies();


  const handleSubmit = (e) => {
    e.preventDefault();

    const words = modelDescription.trim().split(/\s+/);
    if (words.length > 250) {
      setValidationError('Model description should be less than 250 words.');
      return;
    }
    const data = {
      Userid: cookie.userid,
      Modelname: modelName,
      Desc: modelDescription,
      Url: githubLink,
      Cat: category,
      Lib: library
    }
    axios.post('/api/blogs', data)
    .then(response => {
      // console.log(response.data.success);
      console.log('Blog has been posted');
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
              <h2 className='card-title text-center'>Post a new blog</h2>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label className= {styles.label}>User Name:</label>
                  <input
                    type='text'
                    className='form-control'
                    value={cookie.username}
                    readOnly={true}
                    required
                  />
                </div>
                {/* { isAuthenticated ? <p>ha logged in hai</p> : <p>Nhi hai logged in</p> } */}
                <div className='form-group'>
                  <label className= {styles['label']}>Blog Name:</label>
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
                    {
                      catObject.map(cat => <option key={cat.id} value={cat.name}>{cat.name}</option>)
                    }
                  </select>
                </div>
                <div className='form-group'>
                  <label className= {styles['label']}>Blog Description:</label>
                  <textarea
                    className='form-control'
                    value={modelDescription}
                    onChange={(e) => setModelDescription(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group text-center'>
                  <button type='submit' className="btn btn-success">Post Blog</button>
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

export default NewBlogPage;
