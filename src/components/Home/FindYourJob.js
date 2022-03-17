import { View, Text , StyleSheet , FlatList } from 'react-native'
import React from 'react'
import Title from '../UI/Title' ; 
import { spacing } from '../../utils';
import JobCategorie from '../Cards/JobCategorie';

const Cards = [
    {
        id : "card1" , 
        icon : "home" , 
        amount : "44k" , 
        title : "Remote" 
    } , 
    {
        id : "card2" , 
        icon : "time" , 
        amount : "34k" , 
        title : "part Time" 
    } , 
    {
        id : "card3" , 
        icon : "briefcase" , 
        amount : "12k" , 
        title : "Full time" 
    } , 
]


export default function FindYourJob() {


  return (
    <View style={styles.container}>
      <Title title={"Find Your Job"} />
      <View style={{ flexDirection : 'row' , justifyContent : 'space-between' , marginTop : spacing.md }}>
          { Cards.map(( card , index ) => {
              return <JobCategorie width={( 95 / Cards.length )} key={card.id + index } title={card.title} amount={card.amount} icon={card.icon} />
          })}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container : {
        padding : spacing.xxl ,
    }
})