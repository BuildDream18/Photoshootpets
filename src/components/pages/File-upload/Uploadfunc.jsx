import React, { useState } from "react";
import FileUpload from "./File-upload.component";

function Uploadfunc() {
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  });

  const [base64String, setBase64String] = useState("");

  const updateUploadedFiles = (files, base64) => {
    setNewUserInfo({ ...newUserInfo, profileImages: files });
    setBase64String(base64);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    //logic to create new user...
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FileUpload
          accept=".jpg,.png,.jpeg"
          label="Profile Image(s)"
          multiple
          updateFilesCb={updateUploadedFiles}
        />
      </form>
    </div>
  );
}

export default Uploadfunc;
