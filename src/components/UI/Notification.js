import { View, Text, StyleSheet , Pressable } from "react-native";
import React from "react";
import { colors, fontSize, spacing } from "../../utils";
import Icon from "react-native-vector-icons/Ionicons";

export default function Notification({ message , removeNotification }) {
  

  return (
    <View style={styles.container}>
      <View
        style={styles.message}
      >
        <View style={{ padding : spacing.xs , borderRadius : 3 }}>
          <Icon name="checkmark" size={18} color={colors.white} />
        </View>
        <Text style={[{ color: colors.white } , styles.text ]}>{message}</Text>
        <Pressable onPress={removeNotification}>
          <Icon name="close" size={18} color={colors.lightgray} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 95 ,
    width: "100%",
    left : 0 , 
    zIndex: 999 ,
    justifyContent : "center" , 
    alignItems : "center"
  },
  message : {
    width: "80%",
    backgroundColor: "green",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: spacing.xs + 5 ,
  } , 
  text : {
      fontSize : fontSize.md ,
      textAlign : 'left' ,
      flexGrow : 1 ,
      paddingLeft : 5 
  }
});
