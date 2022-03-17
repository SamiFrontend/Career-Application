import { TextInput ,  View, Text , StyleSheet } from 'react-native'
import React from 'react'
import Container from '../../components/UI/Container'
import { colors, fontSize, spacing } from '../../utils'
import Input from '../../components/UI/Input'
import HeaderText from '../../components/Account/HeaderText'
import Button from '../../components/UI/Button'

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
        <Container>
         
        <HeaderText title={"Create Account"} description={"Create account and apply on favorite jobs"} />

          <View style={styles.form}>
             <Input label={"Email"} placeholder={"enter your email"} />
             <Input type={"password"} label={"Password"} placeholder={"enter your password"} />
             <Input type={"password"} label={"Confirm Password"} placeholder={"confirm your password"} />
          </View>

          <View style={styles.containerButton}>
              <Button title={"Create Account"} />
              <Button secondry={true} onPress={() => navigation.replace('Login')} title={"Already have an Account ? Login"} />
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