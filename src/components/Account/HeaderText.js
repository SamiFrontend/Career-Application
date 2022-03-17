import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import { colors, fontSize , spacing } from '../../utils' ; 
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function HeaderText({ title = "" , description = "" }) {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>{ title }</Text>
       <Text style={styles.desc}>{description}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container : {
        marginVertical : spacing['3xl']
    } , 
    title : {
        fontSize : fontSize['4xl'],
        fontWeight : "600" , 
    } , 
    desc : {
        fontSize : fontSize.initial ,
        color : colors.muted ,
        marginTop : 5
    }
})