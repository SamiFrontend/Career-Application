import { View, Text } from 'react-native'
import React from 'react'
import { colors, fontSize } from '../../utils'

export default function Title({ title , style }) {
  return (
    <View style={style}>
      <Text style={{ fontSize : fontSize.xxl , fontWeight : '700' , color : colors.primary }}>{title}</Text>
    </View>
  )
}