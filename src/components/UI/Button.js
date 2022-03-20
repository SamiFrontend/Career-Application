import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { spacing, colors } from "../../utils";

const intialStyleButton = {
  backgroundColor: colors.secondry,
};

const intialStyleText = {
  color: colors.white,
};

export default function Button({
  title,
  secondry ,
  style = {},
  textStyle = {},
  onPress,
  width = "100%" , 
  colorText = undefined  
}) {

  if( secondry ){
    style = { backgroundColor : 'transparent' , marginTop : spacing.sm , shadowColor : 'transparent' }
    textStyle = { color : colorText || colors.secondry , fontWeight : '400'}
  }else{
    style = intialStyleButton ; 
    textStyle =  colorText || intialStyleText
  }
      
  const touchableOpacity = ({ pressed }) => {
    return [{ opacity: pressed ? 0.8 : 1 , ...styles.button, ...style , width }];
  };

  return (
    <Pressable style={touchableOpacity} onPress={onPress}>
      <Text style={{ ...styles.text, ...textStyle }}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: spacing.lg,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: colors.secondry,
    shadowOpacity: 0.2,
  },
  text: {
    textAlign: "center",
    fontWeight: "700",
  },
});
