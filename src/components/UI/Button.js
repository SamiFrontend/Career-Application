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
}) {

  if( secondry ){
    style = { backgroundColor : 'transparent' , marginTop : spacing.sm , shadowColor : 'transparent' }
    textStyle = { color : colors.secondry , fontWeight : '400'}
  }else{
    style = intialStyleButton ; 
    textStyle = intialStyleText 
  }
      
  const touchableOpacity = ({ pressed }) => {
    return [{ opacity: pressed ? 0.8 : 1, ...styles.button, ...style }];
  };

  return (
    <Pressable style={touchableOpacity} onPress={onPress}>
      <Text style={{ ...styles.text, ...textStyle }}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
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
