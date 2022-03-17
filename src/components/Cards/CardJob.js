import { View, Text , StyleSheet , TouchableOpacity } from 'react-native'
import React from 'react'
import ListInfoJob from './ListInfoJob' ; 
import { colors, fontSize, spacing } from '../../utils';
import { useNavigation } from '@react-navigation/native'



export default function CardJob({ data }) {

  let { company , title , id , ...infoWork } = data  ;
  const navigation = useNavigation() ; 

  const moveToJob = () => {
      navigation.navigate("ApplyJob" , { id : 'Hello world'})
  }

  return (
    <TouchableOpacity activeOpacity={.5} onPress={moveToJob} style={styles.card}>
      <View style={styles.top}>
          <Text style={styles.title}>{ data.title }</Text>
          <Text style={styles.company}>{ data.company }</Text>
      </View>
      <View style={styles.bottom}>
          <ListInfoJob informationJob={infoWork} />
      </View>
    </TouchableOpacity>
  )
}


const configStyleCard = {
  radius : 10 ,
  borderColor : colors.lightgray ,
  colorBottom : colors['primary-lighten'][200]
}

const styles = StyleSheet.create({
  card : {
    backgroundColor : colors.white ,
    borderRadius : configStyleCard.radius , 
    borderWidth : 1 , 
    borderColor : configStyleCard.borderColor , 
    marginBottom : spacing.xs + 2       
  } , 
  top : {
    padding : spacing.lg , 
  } , 
  bottom : {
    paddingHorizontal : spacing.md  ,
    paddingVertical : spacing.xs + 4 , 
    backgroundColor : configStyleCard.colorBottom , 
    borderBottomStartRadius : configStyleCard.radius , 
    borderBottomEndRadius : configStyleCard.radius , 
  } , 
  title : {
    fontSize : fontSize.xl ,
    fontWeight : '600' , 
    marginBottom : 5
  } , 
  company : {
    color : colors.muted ,
    textTransform : 'capitalize' , 
    fontSize : fontSize.md
  } , 
})