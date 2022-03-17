import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import { colors, spacing } from '../utils/index' ; 
import Container from '../components/UI/Container' ; 
import Logo from '../components/Logo';
import TextIntro from '../components/StartedPage/TextIntro';
import Button from '../components/UI/Button' ; 


export default function StartScreen({ navigation }) {

  const goToRegister = () => { navigation.navigate('Account' , { screen : 'Register' } ) } ; 

  const goToLogin = () => {  navigation.navigate('Account' , { screen : 'Login' } )  }

  return (
    <View style={styles.container} >
        <Container>
            <Logo  />
            <TextIntro />
            <View>
              <Button title={"Create Account"} onPress={goToRegister}  /> 
              <Button title={"Already have an account ? Login"} onPress={goToLogin} secondry={true}  /> 
            </View>
        </Container>
    </View>
  )
}


const styles = StyleSheet.create({
    container : {
        flex : 1 , 
        backgroundColor : colors.bgColor 
    }
})