import React, { useState, useRef, useEffect } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/clike/clike'; // Import c, c++, java modes
import 'codemirror/mode/python/python';
import 'codemirror/mode/r/r';
import CodeMirror from 'codemirror';
import Button from 'react-bootstrap/Button';

const initCode = '# pip install bitsandbytes accelerate\nfrom transformers import AutoTokenizer, AutoModelForCausalLM, BitsAndBytesConfig\nquantization_config = BitsAndBytesConfig(load_in_8bit=True)\ntokenizer = AutoTokenizer.from_pretrained("google/gemma-7b")\nmodel = AutoModelForCausalLM.from_pretrained("google/gemma-7b", quantization_config=quantization_config)\ninput_text = "Write me a poem about Machine Learning."\ninput_ids = tokenizer(input_text, return_tensors="pt").to("cuda")\noutputs = model.generate(**input_ids)\nprint(tokenizer.decode(outputs[0]))';

const CodeEditor = () => {
  const [code, setCode] = useState(initCode);
  const [language, setLanguage] = useState('python');
  const codeMirrorRef = useRef(null);
  const modeMap = {
    'javascript': 'javascript',
    'c++': 'clike',
    'c': 'clike',
    'python': 'python',
    'java': 'clike',
    'r': 'r'
  };

  useEffect(() => {
    const options = {
      mode: modeMap[language],
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
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
          <option value="c++">C++</option>
          <option value="c">C</option>
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