import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from 'react-bootstrap/Button';

const TextEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');
  const quillRef = useRef();

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const copyContent = () => {
    const quill = quillRef.current.getEditor();
    const content = quill.root.innerHTML;
    navigator.clipboard.writeText(content).then(() => {
      console.log('Content copied to clipboard');
    }).catch((error) => {
      console.error('Failed to copy content: ', error);
    });
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={handleChange}
        modules={TextEditor.modules}
        formats={TextEditor.formats}
        ref={quillRef}
      />
      <div className="quill-toolbar">
        <Button variant="success mt-2 ms-2" onClick={copyContent}>Copy</Button>
      </div>
    </div>
  );
};

// Quill modules
TextEditor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
};

// Quill formats
TextEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

export default TextEditor;
