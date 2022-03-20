import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import { fontSize, spacing } from '../../utils'
import ListInfoJob from '../Cards/ListInfoJob'
import Section from '../UI/Section' ; 

const data =  {
  company : "Ebttikar Company" , 
  work : "Remote" ,
  position : "Junior" , 
  city : "Yanbu" , 
} 

const lorem = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam."

export default function HeaderInformation() {
  return (
    <View style={ styles.container }>
       <Text style={styles.title }>Frontend Developer </Text>
       <ListInfoJob informationJob={data} style={{ marginVertical : spacing.xxl }} />
       <Section title={"Description"} text={lorem} />
    </View>
  )
}


const styles = StyleSheet.create({
    container : {
      paddingTop : spacing.md
    } , 
    title : {
      fontSize : fontSize['3xl'] , 
      textAlign : 'center' , 
      fontWeight : '600'
    } , 
})