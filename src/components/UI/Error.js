import { View, Text } from 'react-native'
import React from 'react'
import { colors, spacing } from '../../utils'

export default function Error({ text , align = 'auto' }) {
  return (
    <>
      <Text style={{ color : colors.danger , marginTop : spacing.xs , textAlign : align }}>{ text }</Text>
    </>
  )
}