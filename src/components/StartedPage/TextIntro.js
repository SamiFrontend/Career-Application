import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import { colors, fontSize, spacing } from '../../utils'


export default function TextIntro() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Get Your Best Job</Text>
      <Text style={styles.text}>With <Text style={{ textTransform : 'uppercase' , color : colors.primary }}>Al-readh</Text></Text>

      <Text style={styles.descripton}>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container : {
        marginVertical : spacing.xl
    }, 
    text : { fontSize : fontSize['4xl'] - 2 ,  textAlign : 'center' , fontWeight : '700'} , 
    descripton : {
        textAlign : 'center' , 
        color : colors.muted , 
        lineHeight : 24 , 
        fontSize : fontSize.initial , 
        letterSpacing : .2 , 
        marginVertical : spacing['3xl'] 
    }
})