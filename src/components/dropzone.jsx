import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Info from "./info";

export default function MyDropzone(props) {
    const {uploadHandler, data, currentElement, active} = props;
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      uploadHandler(file);
    });
  }, [uploadHandler]);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Info
        data={data}
        currentElement={currentElement}
        active={active}
        uploadHandler={uploadHandler}
      />
    </div>
  );
}
