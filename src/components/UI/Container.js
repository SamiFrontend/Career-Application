import React from 'react' ; 
import {SafeAreaView ,  View, StyleSheet } from 'react-native';
import { spacing } from '../../utils/index' ; 

export default function Container({ children , style = {} , paddingX = spacing.xxl , paddingY = spacing['5xl']  }){


 return (
 <SafeAreaView>
    <View style={[ styles.container , { paddingHorizontal : paddingX } ,  style ]}>
      { children }
    </View>
 </SafeAreaView>
 )}

 
 const styles = StyleSheet.create({
   container : {  
   }
 })