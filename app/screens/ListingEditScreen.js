import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import {  AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  category: Yup.object().required().nullable().label('Category'),
  description: Yup.string().label('Description')
})

function ListingEditScreen() {
  const [selectedCategory, setSelectedCategory] = useState()
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{title:'', price:'', category:null, description:''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
        >
        <AppFormField 
          maxLength={255}
          name="title"
          placeholder="Title"
          />
        <AppFormField 
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          />
        <AppFormPicker 
          items={[{label: "Fourniture", value: 1},{label: "Clothing", value: 2},]}
          placeholder="Category"
          name="category"
        />
        <AppFormField 
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
          />
        <SubmitButton title="post"/>
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container:{ padding:10 }
})

export default ListingEditScreen
