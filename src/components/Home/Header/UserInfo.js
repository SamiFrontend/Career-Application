import { View, Text , Image , StyleSheet } from 'react-native'
import React , { useContext } from 'react'
import { colors, fontSize, spacing } from '../../../utils';
import { AuthContext } from '../../../store/Auth';

const initialSizeImage = 37 ; 


export default function UserInfo() {
  const { user } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={{ uri : user.avatar }}/>
      <View style={styles.contentInfo}>
          <Text style={styles.username}>{ user.email }</Text>
          <Text style={styles.jobTitle}>{ user.jobTitle }</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container : {
        flexDirection : 'row' , 
        alignItems : "center" 
    } , 
    Image : {
        width : initialSizeImage , 
        height : initialSizeImage ,
        borderRadius : 50 , 
        borderWidth : 2 , 
        borderColor : colors.secondry ,
    } , 
    username : {
        fontSize : fontSize.md ,
        fontWeight : "500"
    } , 
    jobTitle : {
        fontSize : fontSize.sm, 
        marginTop : 2 , 
        color : colors.muted,
    } , 
    contentInfo : {
        marginLeft : spacing.sm
    }
})