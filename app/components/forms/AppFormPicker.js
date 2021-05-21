import React from 'react'
import { useFormikContext } from 'formik'

import AppPicker from '../AppPicker'
import AppErrorMessage from './AppErrorMessage'

function AppFormPicker({ name, ...otherProps }) {
    const { errors, handleChange, setFieldTouched, touched } = useFormikContext()
    return (
        <>
            <AppPicker
                onBlur={()=>setFieldTouched(name)}
                onChangeText= {handleChange(name)}
                {...otherProps}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
}

export default AppFormPicker
