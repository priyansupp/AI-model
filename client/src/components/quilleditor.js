import React, { useState, useRef, useEffect } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import CodeMirror from 'codemirror';
import Button from 'react-bootstrap/Button';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const codeMirrorRef = useRef(null);

  useEffect(() => {
    const options = {
      mode: language,
      theme: 'material',
      lineNumbers: true,
      lineWrapping: true
    };

    const editor = CodeMirror.fromTextArea(codeMirrorRef.current, options);

    editor.on('change', (cm) => {
      setCode(cm.getValue());
    });

    return () => {
      editor.toTextArea();
    };
  }, [language]);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      console.log('Code copied to clipboard');
    }).catch((error) => {
      console.error('Failed to copy code: ', error);
    });
  };

  return (
    <div>
      <div className="mb-3">
        <select value={language} onChange={handleLanguageChange}>
          <option value="javascript">JavaScript</option>
          <option value="c++">C++</option>
          <option value="c">C</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="r">R</option>
        </select>
      </div>
      <textarea
        ref={codeMirrorRef}
        value={code}
        style={{ display: 'none' }}
      />
      <div className="quill-toolbar">
        <Button variant="success" onClick={handleCopy}>Copy Code</Button>
      </div>
    </div>
  );
};

export default CodeEditor;
