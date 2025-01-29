import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import './PrivacyPolicy.css'; 

const PrivacyPolicy = () => {
  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = (value) => {
    setEditorContent(value);
  };

  return (
    <div className="privacy-policy-container">
      <h2>POLICY OF YOUR COMPANY</h2>
      
      <div className="editor-container">
        {/* Privacy Policy Label */}
        <label className="editor-label">Privacy Policy</label>

        {/* Quill Editor */}
        <ReactQuill
          value={editorContent}
          onChange={handleEditorChange}
          modules={{
            toolbar: [
              [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
              [{ 'size': ['small', 'medium', 'large', 'huge'] }],
              [{ 'align': [] }],
              ['bold', 'italic', 'underline'],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              [{ 'indent': '-1'}, { 'indent': '+1' }],
              ['link', 'image', 'blockquote'],
              ['clean'],
            ],
          }}
          formats={[
            'header', 'font', 'size', 'align', 'bold', 'italic', 'underline', 'list', 'indent', 'link', 'image', 'blockquote', 'clean'
          ]}
          placeholder="Write or edit your company's privacy policy here..."
        />
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="action-button undo">Undo</button>
        <button className="action-button redo">Redo</button>
        <button className="action-button">Save</button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
