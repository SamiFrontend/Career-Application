import { View , StyleSheet  } from 'react-native'
import React , { useEffect , useContext } from 'react'
import { colors } from '../utils/index' ; 
import Container from '../components/UI/Container' ; 
import Logo from '../components/Logo';
import TextIntro from '../components/StartedPage/TextIntro';
import Button from '../components/UI/Button' ; 
import { getUserData } from '../services/Auth';
import { AuthContext } from '../store/Auth';


export default function StartScreen({ navigation }) {

  const goToRegister = () => { navigation.navigate('Account' , { screen : 'Register' } ) } ; 

  const goToLogin = () => {  navigation.navigate('Account' , { screen : 'Login' } )  }

  const userCtx = useContext(AuthContext) ; 

  useEffect(() => {
    let canceled = false ; 
    let getDataOfStorage = async () => {
      let data = await getUserData() ; 

      if(!canceled && data !== null ) {
        userCtx.setUser(JSON.parse(data)) ;
        navigation.replace('HomeScreen') ;
      }
    }

    getDataOfStorage().catch(( error ) => {
      console.log( error.message )
    })


    return () => {
      canceled = true ; 
    }

  } , [])


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