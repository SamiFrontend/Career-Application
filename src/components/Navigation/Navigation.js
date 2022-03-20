import { View, Text , StyleSheet , Platform } from 'react-native'
import React , { useContext } from 'react'
import { colors, spacing } from '../../utils'
import NavigationItem from './NavigationItem' ; 
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../store/Auth';
import { Logout } from '../../services/Auth';

export default function Navigation() {

  const user = useContext(AuthContext) ; 
  const navigation = useNavigation() ; 

  const logout = async () => {
     navigation.reset({ index : 0 , routes : [{ name : "Account"}]})
     await Logout() ; 
     user.logout() ; 
  }

  return (
    <View style={styles.navigation}>
      <NavigationItem iconName={"home"} name="home" active={true} />
      <NavigationItem iconName={"briefcase"} size={22.7} name="jobs" active={false} />
      <NavigationItem iconName={"list"} name="Applied Job" active={false} />
      <NavigationItem iconName={"log-out"} name="logout" onPress={logout} active={false} colorIcon={colors.danger} colorText={colors.danger} />
    </View>
  )
}


const styles = StyleSheet.create({
    navigation : {
        borderTopColor : colors.lightgray , 
        borderWidth : 1 , 
        backgroundColor : colors.white , 
        paddingBottom : Platform.OS === "android" ? spacing.md : spacing['3xl']  ,
        paddingHorizontal : spacing['3xl'] , 
        position : 'absolute' , 
        bottom : 0 , 
        left : 0 ,
        width : '100%' ,
        flexDirection : 'row' , 
        justifyContent : 'space-between' , 
        alignItems : 'center' , 
        zIndex : 999
    }
})