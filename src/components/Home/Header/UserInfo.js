import { View, Text , Image , StyleSheet } from 'react-native'
import React from 'react'
import { colors, fontSize, spacing } from '../../../utils';

const initialSizeImage = 37 ; 


export default function UserInfo() {
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={require('../../../assets/profile.png')}/>
      <View style={styles.contentInfo}>
          <Text style={styles.username}>sami.work.scl@gmail.com</Text>
          <Text style={styles.jobTitle}>Frontend Developer</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container : {
        flexDirection : 'row' , 
        alignItems : "center" 
    } , 
    Image : {
        width : initialSizeImage , 
        height : initialSizeImage ,
        borderRadius : 50 , 
        borderWidth : 2 , 
        borderColor : colors.secondry ,
    } , 
    username : {
        fontSize : fontSize.md ,
        fontWeight : "500"
    } , 
    jobTitle : {
        fontSize : fontSize.sm, 
        marginTop : 2 , 
        color : colors.muted,
    } , 
    contentInfo : {
        marginLeft : spacing.sm
    }
})