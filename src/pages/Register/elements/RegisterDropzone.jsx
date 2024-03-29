import React from 'react';
import RegisterPreviewImage from './RegisterPreviewImage';
import RegisterPreviewName from './RegisterPreviewName';
import uploadEditIcon from '../../../images/svg/upload-edit.svg';

const RegisterDropzone = ({
  files,
  getRootProps,
  getInputProps,
  value,
  onChange,
  isTypeImg,
  uploadPlaceholderImg,
  changePlaceholderText,
}) => {
  return (
    <label
      htmlFor="logo"
      className="register-form-upload-label"
      {...getRootProps({ onClick: (e) => e.preventDefault() })}
    >
      {isTypeImg && (
        <RegisterPreviewImage
          files={files}
          uploadPlaceholderImg={uploadPlaceholderImg}
        />
      )}

      {!isTypeImg && (
        <RegisterPreviewName
          files={files}
          uploadPlaceholderImg={uploadPlaceholderImg}
        />
      )}

      {files.length === 0 &&
        (changePlaceholderText ? (
          <p className="register-form-upload-label-text">Upload Image</p>
        ) : (
          <p className="register-form-upload-label-text">
            Drag and drop, or
            <span className="upload-label-text-custom"> browse</span> your files
          </p>
        ))}

      {files.length > 0 && (
        <img
          src={uploadEditIcon}
          alt="edit icon"
          className="upload-edit-icon"
        />
      )}

      <input
        type="file"
        className="register-form-upload-input"
        {...getInputProps({ value, onChange })}
        defaultValue=""
      />
    </label>
  );
};

export default RegisterDropzone;
