import styled from "styled-components";

export const FileUploadContainer = styled.section`
  position: relative;
  margin: 25px 0 25px;
  border: 2px dashed #6c289c;
  padding: 35px 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2c1553;
`;

export const FormField = styled.input`
  font-size: 18px;
  display: block;
  width: 100%;
  border: none;
  text-transform: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;

  &:focus {
    outline: none;
  }
`;

export const InputLabel = styled.label`
  top: -21px;
  font-size: 13px;
  color: black;
  left: 0;
  position: absolute;
`;

export const DragDropText = styled.p`
  font-weight: bold;
  letter-spacing: 2.2px;
  margin-top: 0;
  margin-bottom: 25px;
  text-align: center;
`;

export const UploadFileBtn = styled.button`
  // Basic button properties
  box-sizing: border-box; // Specifies that the width and height properties include padding and border.
  appearance: none; // Removes default appearance for form elements.
  background-color: transparent; // The button's background is transparent.
  border: 2px solid #3498db; // The button has a 2-pixel solid blue border.
  cursor: pointer; // The cursor appears as a hand when hovering over the button, indicating it's clickable.
  font-size: 1rem; // The font size of the button text is set to 1rem.
  line-height: 1; // The spacing between lines of text is set to the height of the text.
  padding: 1.1em 2.8em; // Padding added around the button content.
  text-align: center; // Text is centered horizontally.
  text-transform: uppercase; // Converts the button text to uppercase.
  font-weight: 700; // The font weight is set to bold.
  border-radius: 6px; // Rounded corners for the button.
  color: #3498db; // Text color is blue.
  position: relative; // Sets the position context for absolutely positioned child elements.
  overflow: hidden; // Prevents overflow of child content or borders.
  z-index: 1; // Stacks order, ensuring the button stays above other elements.
  transition: color 250ms ease-in-out; // Smooth transition for color changes.
  font-family: "Open Sans", sans-serif; // Specific font family.
  width: 45%; // Button width is set to 45% of its container width.
  display: flex; // Makes the button a flex container.
  align-items: center; // Centers button content vertically.
  padding-right: 0; // Overrides right padding.
  justify-content: center; // Centers button content horizontally.

  // Icon styling
  i {
    font-size: 22px; // Icon font size.
    margin-right: 5px; // Margin to the right of the icon.
    border-right: 2px solid; // Adds a right border to the icon.
    position: absolute; // Absolute positioning relative to the button.
    top: 0;
    bottom: 0; // Stretches the icon vertically within the button.
    left: 0;
    right: 0; // Horizontal positioning.
    width: 20%; // Icon width.
    display: flex; // Makes the icon a flex container.
    flex-direction: column; // Arranges icon's children vertically.
    justify-content: center; // Centers the icon's children vertically.
  }

  // Media queries for responsiveness
  @media only screen and (max-width: 500px) {
    width: 70%; // Increases the button width to 70% on screens <= 500px.
  }

  @media only screen and (max-width: 350px) {
    width: 100%; // Increases the button width to 100% on screens <= 350px.
  }

  // Hover & focus styles
  &:hover {
    color: #fff; // Changes the text color to white on hover.
    outline: 0; // Removes the default outline.
    background: transparent;

    &:after {
      width: 110%; // Expands the width of the pseudo-element when hovered.
    }
  }

  &:focus {
    outline: 0; // Removes the default focus outline.
    background: transparent;
  }

  // Disabled button styles
  &:disabled {
    opacity: 0.4; // Reduces the opacity for a faded look.
    filter: grayscale(100%); // Converts the button to grayscale.
    pointer-events: none; // Disables all mouse interactions.
  }
`;

export const FilePreviewContainer = styled.article`
  margin-bottom: 35px;
  span {
    font-size: 14px;
  }
`;

export const PreviewList = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;

  @media only screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

export const FileMetaData = styled.div`
  display: ${(props) => (props.isImageFile ? "none" : "flex")};
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  background-color: rgba(5, 5, 5, 0.55);
  aside {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
  }
`;

export const RemoveFileIcon = styled.i`
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
`;

export const PreviewContainer = styled.section`
  padding: 0.25rem;
  width: 20%;
  height: 120px;
  border-radius: 6px;
  box-sizing: border-box;
  & > div:first-of-type {
    height: 100%;
    position: relative;
  }

  @media only screen and (max-width: 750px) {
    width: 25%;
  }

  @media only screen and (max-width: 500px) {
    width: 50%;
  }

  @media only screen and (max-width: 400px) {
    width: 100%;
    padding: 0 0 0.4em;
  }
`;

export const ImagePreview = styled.img`
  border-radius: 6px;
  width: 100%;
  height: 100%;
`;
