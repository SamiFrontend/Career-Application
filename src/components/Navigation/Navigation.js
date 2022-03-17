import { View, Text , StyleSheet , StatusBar } from 'react-native'
import React from 'react'
import { colors, spacing } from '../../utils'
import NavigationItem from './NavigationItem' ; 


export default function Navigation() {
  return (
    <View style={styles.navigation}>
      <NavigationItem iconName={"home"} name="home" active={true} />
      <NavigationItem iconName={"briefcase"} size={22.7} name="jobs" active={false} />
      <NavigationItem iconName={"list"} name="Applied Job" active={false} />
      <NavigationItem iconName={"log-out"} name="logout" active={false} colorIcon={colors.danger} colorText={colors.danger} />
    </View>
  )
}



const styles = StyleSheet.create({
    navigation : {
        borderTopColor : colors.lightgray , 
        borderWidth : 1 , 
        backgroundColor : colors.white , 
        paddingBottom : spacing['3xl'] ,
        paddingHorizontal : spacing['3xl'] , 
        position : 'absolute' , 
        bottom : 0 , 
        left : 0 ,
        width : '100%' ,
        flexDirection : 'row' , 
        justifyContent : 'space-between' , 
        alignItems : 'center'
    }
})