import { TextInput ,  View, Text , StyleSheet } from 'react-native'
import React from 'react'
import Container from '../../components/UI/Container'
import { colors, fontSize, spacing } from '../../utils'
import Input from '../../components/UI/Input'
import HeaderText from '../../components/Account/HeaderText'
import Button from '../../components/UI/Button'
import FormRegister from '../../components/Forms/Register'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
        <KeyboardAwareScrollView>
        <Container>
         
         <HeaderText title={"Create Account"} description={"Create account and apply on favorite jobs"} />
          <FormRegister navigation={navigation} />
         </Container>
        </KeyboardAwareScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container : {
    backgroundColor : colors.bgColor , 
    flex : 1 
  } , 
 
})