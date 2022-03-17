import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons' ; 
import { colors, fontSize, spacing } from '../../utils';


export default function ItemInfoJob({ title , iconName , style = {} }) {
  return (
    <View style={[{ flexDirection : 'row' , alignItems : 'center'} , style ]}>
      <Icon name={iconName} color={colors['third-lighten']} size={15} />
      <Text style={{ marginLeft : spacing.xs , fontSize : fontSize.md - 1 , opacity : .6}}>{ title }</Text>
    </View>
  )
}