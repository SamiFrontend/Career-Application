import { TextInput ,  View, Text , StyleSheet } from 'react-native'
import React from 'react'
import Container from '../../components/UI/Container'
import { colors, fontSize, spacing } from '../../utils'
import Input from '../../components/UI/Input'
import HeaderText from '../../components/Account/HeaderText'
import Button from '../../components/UI/Button';
import { StackActions } from '@react-navigation/native'

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
        <Container>
         
         <HeaderText title={"Welcome back !"} description={"Sign in into Account"} />

          <View style={styles.form}>
             <Input label={"Email"} placeholder={"enter your email"} />
             <Input type={"password"} label={"Password"} placeholder={"enter your password"} />
          </View>

          <View style={styles.containerButton}>
              <Button title={"Sign In"} onPress={() => { navigation.reset({ index : 0 , routes : [{ name : "HomeScreen"}]})}} />
              <Button secondry={true} onPress={() => navigation.replace('Register')} title={"Don't have an Account ? Create Account"} />
          </View>
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