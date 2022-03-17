import { View, Text } from 'react-native'
import React , { useState } from 'react'
import Input from '../UI/Input'
import { spacing } from '../../utils'
import UploadInput from '../UI/UploadInput'; 


export default function Apply({ style = { paddingVertical : spacing.xl }}) {

  const [ FileRepsonse , setFileResponse ] = useState('')

  return (
    <View style={[style]}>
      <Input placeholder='enter your first name' label='First name' />
      <Input placeholder='enter your first name' label='Last Name' />
      <Input placeholder='enter url your account in linked in' label='LinkedIn' />
      <Input placeholder='enter url your account in linked in' label='LinkedIn' />
      <Input placeholder='enter url your account in linked in' label='LinkedIn' />
      <Input placeholder='enter url your account in linked in' label='LinkedIn' />
      <UploadInput setFile={setFileResponse} label="upload Resume" />
    </View>
  )
}