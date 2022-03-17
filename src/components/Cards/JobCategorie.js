import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { colors, fontSize, spacing } from "../../utils";

export default function JobCategorie({ icon, title, amount, width }) {
  return (
    <View style={[styles.container, { width: width + "%" }]}>
      <View style={styles.contentIcon}>
        <Icon size={22} color={colors.primary} name={icon} />
      </View>
      <Text style={styles.amount}>{amount}</Text>
      <Text style={styles.type}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["primary-lighten"][200],
    borderRadius: 10 ,
    alignItems: "center",
    padding: spacing.xl,
  },
  contentIcon: {
    backgroundColor: colors.white,
    borderRadius: 50,
    padding: spacing.sm ,
    justifyContent : 'center' , 
    alignItems : 'center'
  },
  amount: {
    marginVertical: spacing.md - 3 ,
    fontSize: fontSize.xxl ,
    fontWeight: "700",
  },
  type: {
    fontSize: fontSize.md,
    color: colors.dark ,
    opacity: .8,
    textTransform : "capitalize"
  },
});
