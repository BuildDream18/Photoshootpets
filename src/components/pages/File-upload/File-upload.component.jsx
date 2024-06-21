import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FileUploadContainer,
  DragDropText,
  UploadFileBtn,
  FormField,
} from "./File-upload.styles";

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

const FileUpload = () => {
  const navigate = useNavigate();
  const fileInputField = useRef(null);

  const handleUploadBtnClick = () => fileInputField.current.click();

  const handleNewFileUpload = async (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      const base64 = await convertToBase64(newFiles[0]);
      navigate("/theme", { state: { base64Image: base64 } });
    }
  };

  return (
    <FileUploadContainer>
      <DragDropText>Drag and drop your files anywhere or</DragDropText>
      <UploadFileBtn onClick={handleUploadBtnClick}>
        <i className="fas fa-file-upload" />
        Upload a file
      </UploadFileBtn>
      <FormField
        type="file"
        ref={fileInputField}
        onChange={handleNewFileUpload}
        accept=".jpg,.png,.jpeg"
      />
    </FileUploadContainer>
  );
};

export default FileUpload;
