import { TextInput ,  View, Text , StyleSheet } from 'react-native'
import React from 'react'
import Container from '../../components/UI/Container'
import { colors, fontSize, spacing } from '../../utils'
import Input from '../../components/UI/Input'
import HeaderText from '../../components/Account/HeaderText'
import Button from '../../components/UI/Button';
import { StackActions } from '@react-navigation/native'
import FormLogin from '../../components/Forms/Login' ; 

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
        <Container>
         
         <HeaderText title={"Welcome back !"} description={"Sign in into Account"} />
          <FormLogin navigation={navigation} />
        </Container>
    </View>
  )
}


const styles = StyleSheet.create({
  container : {
    backgroundColor : colors.bgColor , 
    flex : 1 
  } , 
 
})