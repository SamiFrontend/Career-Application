import { View , Text, StyleSheet , Platform } from "react-native";
import React from "react";
import Container from "../UI/Container";
import { colors, fontSize, spacing } from "../../utils";
import FormApplyToJob from "../Forms/Apply";

export default function ApplyForm() {
  
  return (
    <Container  style={styles.container}>
      <View style={styles.containerForm}>
        <Text
          style={{
            fontSize: fontSize["3xl"],
            fontWeight: "600",
            color: colors.dark,
          }}
        >
          Apply Now
        </Text>
        <FormApplyToJob />
      </View>
    </Container>
  );
}

const isAndroid = Platform.OS === "android"

const styles = StyleSheet.create({
  contianer: { flex: 1, paddingTop: 50  } ,
  containerForm : {
      paddingBottom : isAndroid ? 80 : 20  , 
  }
});
