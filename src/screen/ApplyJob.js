import { View, StyleSheet , Platform } from "react-native";
import React from "react";
import Container from "../components/UI/Container";
import BackButton from "../components/UI/BackButton";
import { colors, spacing } from "../utils";
import HeaderInformation from "../components/ApplyJob/HeaderInformation";
import ApplyForm from "../components/ApplyJob/ApplyForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function ApplyJob({ route , navigation }) {
  
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView >
        <Container>
          <BackButton style={{ marginBottom: spacing.xs }} />
          <HeaderInformation />
        </Container>
        <View
          style={{
            width: "100%",
            height: 15,
            marginVertical: spacing.lg,
            backgroundColor: colors.bgColor,
          }}
        ></View>
        <ApplyForm  />
     </KeyboardAwareScrollView>
  </View>
  );
}

const isAndroid = Platform.OS === "android" ; 

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    minHeight : "100%" , 
    paddingTop : isAndroid ? spacing["3xl"] : 0 
  },
});
