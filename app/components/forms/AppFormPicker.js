import React from 'react'
import { useFormikContext } from 'formik'

import AppPicker from '../AppPicker'
import AppErrorMessage from './AppErrorMessage'

function AppFormPicker({items, name, placeholder }) {
    const { errors, setFieldValue, touched, values } = useFormikContext()
    return (
        <>
            <AppPicker
                items={items}
                placeholder={placeholder}
                onSelectItem={(item) => setFieldValue(name, item)}
                selectedItem= {values[name]}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
}


export default AppFormPicker
