import { View, Text } from 'react-native'
import React from 'react'
import { colors, spacing } from '../utils'

export default function Validate({ message , type }) {
  return (
    <>
      <Text style={{ textAlign : 'center' , marginVertical : spacing['3xl'] , color : type === "success" ? colors.success : colors.danger }}>{ message }</Text>
    </>
  )
}