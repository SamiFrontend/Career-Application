import { View, Text , Pressable , FlatList } from 'react-native'
import React from 'react'
import Title from '../UI/Title'
import Container from '../UI/Container'
import { colors, spacing } from '../../utils'
import CardJob from '../Cards/CardJob' ; 

const JOBS = [
  {
    id : 'sdfsdfsdf' ,
    title : "UI/UX Designer" , 
    company : "Ebttikar Company" , 
    work : "Remote" ,
    position : "Junior" , 
    city : "Yanbu" , 
  } ,
  {
    id : "gjorpo" , 
    title : "Frontend Developer" , 
    company : "AL-Readah" , 
    work : "Full-Time" ,
    position : "Senior" , 
    city : "Riyadh" , 
  } ,
  {
    id : "dlkfnspdnpf" , 
    title : "Ticnical Support" , 
    company : "Aramco" , 
    work : "Part Time" ,
    position : "Senior" , 
    city : "Jubail" , 
  } ,
  {
    id : "dslfmsofpef" , 
    title : "Web Developer" , 
    company : "Elm Company" , 
    work : "Full Stack" ,
    position : "Senior" , 
    city : "Riyadh" , 
  } ,
]



export default function JobList() {

  const ItemJob = (({ item }) => {
    return <CardJob data={item} />
  })

  return (
    <Container>
      <View style={{ flexDirection : 'row' , justifyContent : 'space-between' , alignItems : 'baseline'}}>
          <Title title={"Job List"} />
          <Pressable>
              <Text style={{ color : colors.primary}}>See All</Text>
          </Pressable>
      </View>
      <FlatList contentContainerStyle={{ paddingBottom : 500 }} showsVerticalScrollIndicator={false} style={{ marginTop : spacing.md }}  data={JOBS} renderItem={ItemJob} keyExtractor={ item => item.id }  />
    </Container>
  )
}