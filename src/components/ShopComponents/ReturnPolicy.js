import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import "./ReturnPolicy.css"; // Custom CSS for styling

const ReturnPolicy = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (value) => {
    setEditorContent(value);
  };

  const handleSave = () => {
    console.log("Return Policy saved:", editorContent);
    alert("Return Policy saved successfully!");
  };

  return (
    <div className="terms-and-conditions-container">
      <h2>RETURN POLICY OF YOUR COMPANY</h2>

      <div className="editor-container">
        {/* Terms and Conditions Label */}
        <label className="editor-label" htmlFor="terms-editor">
          Return Policy
        </label>

        {/* Quill Editor */}
        <ReactQuill
          id="terms-editor"
          value={editorContent}
          onChange={handleEditorChange}
          modules={{
            toolbar: [
              [{ header: "1" }, { header: "2" }, { font: [] }],
              [{ size: ["small", "medium", "large", "huge"] }],
              [{ align: [] }],
              ["bold", "italic", "underline"],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ indent: "-1" }, { indent: "+1" }],
              ["link", "image", "blockquote"],
              ["clean"],
            ],
          }}
          formats={[
            "header",
            "font",
            "size",
            "align",
            "bold",
            "italic",
            "underline",
            "list",
            "indent",
            "link",
            "image",
            "blockquote",
            "clean",
          ]}
          placeholder="Write or edit your company's terms and conditions here..."
        />
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button
          className="action-button"
          onClick={() => document.execCommand("undo")}
        >
          Undo
        </button>
        <button
          className="action-button"
          onClick={() => document.execCommand("redo")}
        >
          Redo
        </button>
        <button className="action-button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default ReturnPolicy;
