import { View, StyleSheet , ScrollView } from "react-native";
import React from "react";
import Container from "../components/UI/Container";
import BackButton from "../components/UI/BackButton";
import { colors, spacing } from "../utils";
import HeaderInformation from '../components/ApplyJob/HeaderInformation' ;
import ApplyForm from "../components/ApplyJob/ApplyForm";

export default function ApplyJob({ route }) {
  // alert(route.params.id)
  return (
    <ScrollView style={styles.container}>
      <Container>
        <BackButton style={{ marginVertical: spacing.xs }} />
        <HeaderInformation  />
      </Container>
      <ApplyForm />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : colors.white , 
    flex : 1 ,
  },
});
