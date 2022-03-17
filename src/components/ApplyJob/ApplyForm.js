import { View, Text, StyleSheet  } from "react-native";
import React from "react";
import Container from "../UI/Container";
import { colors, fontSize, spacing } from "../../utils";
import FormApplyToJob from "../Forms/Apply";

export default function ApplyForm() {
  return (
    <Container paddingY={0} style={styles.container}>
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

const styles = StyleSheet.create({
  contianer: { flex: 1, paddingTop: 50 } ,
  containerForm : {
      paddingBottom : 450 , 
      flex : 1 ,
      minHeight : "100%"
  }
});
