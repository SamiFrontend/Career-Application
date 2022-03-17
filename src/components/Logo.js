import { View, Image , StyleSheet } from 'react-native'
import React from 'react'

const initialSize = 180 ; 

export default function Logo( size = initialSize , style = {}) {
  return (
    <View style={[styles.contentImage ]}>
      <Image source={require('../assets/logo.png')} style={[styles.image , style , { width : initialSize , height : initialSize } ]} />
    </View>
  )
}


const styles = StyleSheet.create({
    contentImage : {
      justifyContent : 'center' ,
      alignItems : 'center' ,   
      marginTop : 50
    } ,
    image : {
        
    }
})