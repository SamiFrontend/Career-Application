import React from 'react' ; 
import { View, StyleSheet } from 'react-native';
import { spacing } from '../../utils/index' ; 

export default function Container({ children , style = {} , paddingX = spacing.xxl , paddingY = spacing['5xl']  }){


 return (
 <View style={[ styles.container , { paddingHorizontal : paddingX , paddingVertical : paddingY } ,  style ]}>
    { children }
 </View>
 )}
 
 const styles = StyleSheet.create({
   container : { }
 })