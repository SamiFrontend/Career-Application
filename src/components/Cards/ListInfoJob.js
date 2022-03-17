import { View, Text } from 'react-native'
import React from 'react'
import ItemInfoJob from './ItemInfoJob' ; 

export default function ListInfoJob({ informationJob , style = {} }) {
  
  return (
    <View style={[{ flexDirection : 'row' , justifyContent : "space-between" } , style ]}>
        <ItemInfoJob title={informationJob.work} iconName={"time"} />
        { informationJob.company && <ItemInfoJob title={informationJob.company} iconName={"business"} /> }
        <ItemInfoJob title={informationJob.position} iconName={"person"} />
        <ItemInfoJob title={informationJob.city} iconName={"location"} />
    </View>
  )
}