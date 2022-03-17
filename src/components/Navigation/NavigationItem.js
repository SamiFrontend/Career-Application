import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import { colors, fontSize, spacing } from '../../utils'
import { useState } from 'react/cjs/react.development'
import Icon from 'react-native-vector-icons/Ionicons'

export default function NavigationItem({ onPress = () => {} , iconName , name  , size = null , active = false , colorIcon = null  , colorText = null }) {
 
  const [ isActive , setActive ] = useState(active) ; 


  let setColorActive = isActive ? colors.primary : colors.muted

  return (
    <View style={styles.container} onPress={onPress}>
      { active && <View style={styles.line}></View> }
      <Icon style={styles.icon } name={iconName} size={ size || 23 } color={ colorIcon || setColorActive } />
      <Text style={[styles.name , { color : colorText || setColorActive }]}>{ name } </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  line : { height : 4 , backgroundColor : colors['primary-lighten'][400] , width : 34 , borderBottomEndRadius : 5 , borderBottomStartRadius : 5 , position : 'absolute' , top : 0 },
  container : { justifyContent : 'center' , alignItems : 'center', paddingTop : spacing.md - 5} ,
  name : { fontSize : fontSize.md - 2 , textTransform : 'capitalize' , textAlign : 'center'} , 
})