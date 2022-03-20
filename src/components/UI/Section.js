import { View, Text } from 'react-native'
import React from 'react'
import Title from './Title'
import { colors, fontSize, spacing } from '../../utils'

export default function Section({ text , title }) {
  return (
    <View style={{ marginTop : spacing.xs }}>
      <Title title={title} />
      <Text style={{ fontSize : fontSize.md + 1  , marginTop : spacing.xs + 2 , color : colors.muted , lineHeight : 21}}>
        { text }
      </Text>
    </View>
  )
}