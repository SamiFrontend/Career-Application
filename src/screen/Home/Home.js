import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import Container from '../../components/UI/Container'
import Header from '../../components/Home/Header/Header' ; 
import { colors } from '../../utils';
import FindYourJob from '../../components/Home/FindYourJob';
import JobList from '../../components/Home/JobList';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <FindYourJob />
      <JobList />
    </View>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    position : 'relative' , 
    backgroundColor : colors.white
  }
})