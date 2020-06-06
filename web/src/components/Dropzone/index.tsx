import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { FiUpload } from "react-icons/fi";

import './style.css'

interface Props {
    onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({onFileUploaded}) => {
    const [selectedFileUrl, setselectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]; //pq só tenho um arquivo
    const fileUrl = URL.createObjectURL(file);

    setselectedFileUrl(fileUrl);
    onFileUploaded(file);

  }, [onFileUploaded])
  const {getRootProps, getInputProps} = useDropzone({onDrop, accept:'image/*'})

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

        { selectedFileUrl
            ? <img src={selectedFileUrl} alt="Imagem"/>
            : (
                <p><FiUpload/> Imagem do estabelecimento</p>
            )
         
        }
    </div>
  )
}

export default Dropzone;