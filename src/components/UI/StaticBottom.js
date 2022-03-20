import { View, Text } from 'react-native'
import React from 'react'

export default function StaticBottom({ children , bottom = 0 , style }) {
  return (
    <View style={[{ position : 'absolute' , bottom  , width : "100%" , left : 0} , style]}>
        { children }
    </View>
  )
}