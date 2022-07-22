import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from './elements/updateAction';
import { useDropzone } from 'react-dropzone';
import './Register.css';
import RegisterLeft from './elements/RegisterLeft';
import RegisterDropzone from './elements/RegisterDropzone';
import uploadDocument from '../../images/upload-document.png';

const RegisterFormFour = (props) => {
  const { value, onChange, name = 'document', error } = props;
  const navigate = useNavigate();

  const { register, setValue, setError, clearErrors, watch, handleSubmit } =
    useForm({
      mode: 'all',
    });
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    navigate('/register/company/success');
  };

  const [files, setFiles] = useState([]);
  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles && rejectedFiles.length > 0) {
        setValue(name, []);
        setFiles([]);
        setError(name, {
          type: 'manual',
          message: rejectedFiles && rejectedFiles[0].errors[0].message,
        });
      } else {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      }
      clearErrors(name);
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');
        reader.onloadend = () => {
          setValue(name, file, { shouldValidate: true });
        };
        reader.readAsDataURL(file);
      });
    },
    [[name, setValue, setError, clearErrors]]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'text/plain': ['.txt'],
      'text/html': ['.html', '.htm'],
      'text/csv': ['.csv'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        ['.docx'],
      'application/pdf': ['.pdf'],
    },
    maxFiles: 1,
    multiple: false,
  });

  useEffect(() => {
    register('document');
  }, []);

  return (
    <div className="register register-com">
      <RegisterLeft />
      <div className="register-form-right">
        <div className="register-form-ctn ">
          <p className="register-form-title">Upload Document or license</p>
          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <RegisterDropzone
              files={files}
              getRootProps={getRootProps}
              getInputProps={getInputProps}
              value={value}
              onChange={onchange}
              uploadPlaceholder={uploadDocument}
              showPreview="name"
            />
            {files[0] && (
              <button className="register-form-button register-form-upload-button-next">
                Next
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterFormFour;