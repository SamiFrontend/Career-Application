import { View, Text , TextInput , StyleSheet } from 'react-native'
import React , { useState } from 'react'
import { colors, fontSize, spacing } from '../../utils'

export default function Input({ label = "" , placeholder="" , type = null , style = {} , ...props }) {
  const [ focus , setFocus ] = useState(false) ; 

  return (
    <View style={styles.container}>
       <Text style={styles.label}>{ label }</Text>
       <TextInput secureTextEntry={ type === "password" && true } style={[styles.Input , style , { borderColor : focus ? colors.primary : colors.borderColor } ]} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} placeholder={placeholder} {...props} />
    </View>
  )
}


const styles = StyleSheet.create({
    container : {
        marginBottom : spacing.xl
    } , 
    label : {
        fontSize : fontSize.initial , 
        fontWeight : "500" , 
        color : colors.primary
    } , 
    Input : {
        fontSize : fontSize.md , 
        padding : spacing.md , 
        backgroundColor : colors.bgInput  ,
        borderRadius : 5 ,  
        borderStyle : 'solid' , 
        borderWidth : 1 , 
        marginTop : 8
    } 
})