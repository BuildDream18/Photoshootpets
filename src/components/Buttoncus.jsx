import React, { useRef } from "react";
import "./Buttoncus.css";
import { useNavigate } from "react-router-dom";

const STYLES = ["btncus--primary", "btncus--outline"];
const SIZES = ["btncus--medium", "btncus--large", "btncus--mobile", "btncus--wide", "btncus--huge"];
const COLOR = ["primary", "blue", "red", "green"];

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const Buttoncus = ({
  children,
  type,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  const navigate = useNavigate();
  const fileInputField = useRef(null);

  const handleFileChange = async (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      const base64 = await convertToBase64(newFiles[0]);
      navigate("/theme", { state: { base64Image: base64 } });
    }
  };

  const handleButtonClick = () => {
    fileInputField.current.click();
  };

  return (
    <>
      <button
        className={`btncus ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
        onClick={handleButtonClick}
        type={type}
      >
        {children}
      </button>
      <input
        type="file"
        ref={fileInputField}
        onChange={handleFileChange}
        accept=".jpg,.png,.jpeg"
        style={{ display: "none" }}
      />
    </>
  );
};
