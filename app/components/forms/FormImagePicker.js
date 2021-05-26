import React from 'react';
import { useFormikContext } from 'formik';

import ImageInputList from '../ImageInputList';
import AppErrorMessage from './AppErrorMessage';

function FormImagePicker({name}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => setFieldValue([...imageUris, uri])
  const handleRemove = (uri) => setFieldValue(imageUris.filter(imageUri => imageUri !== uri))

  return (
    <ImageInputList
      imageUris={imageUris}
      onAddImage={handleAdd}
      onRemoveImage={handleRemove}
    />
    <AppErrorMessage 
      error={errors[name]}
      visible={touched[name]}
    />
  );
}

export default FormImagePicker;