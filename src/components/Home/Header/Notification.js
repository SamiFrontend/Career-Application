import { View, Text , StyleSheet } from 'react-native'
import React from 'react' ;
import Icon from 'react-native-vector-icons/MaterialIcons' ; 
import { colors, spacing } from '../../../utils';

export default function Notification() {
  return (
    <View style={styles.container}>
      <View style={styles.alert}></View>
      <Icon name="notifications" size={25} color={colors.primary} />
    </View>
  )
}


const styles = StyleSheet.create({
    container : { backgroundColor : colors['primary-lighten'][200] , width : 37 , height : 37 , borderRadius : 5  , alignItems : 'center' , justifyContent : 'center' , shadowColor : colors.primary , shadowOffset : { width : 0 , height : 1 } , shadowOpacity : .2 , shadowRadius : 0 } , 
    alert : {} ,
})