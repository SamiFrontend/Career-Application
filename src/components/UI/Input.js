import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { colors, fontSize, spacing } from "../../utils";
import Error from "./Error";

export default function Input({
  onChangeText,
  value,
  error,
  errorText , 
  label = "",
  placeholder = "",
  type = null,
  style = {},
  ...props
}) {
  const [focus, setFocus] = useState(false);
  const [validation, setValidation] = useState(false);

  const setBorder = () => {
    return error ? colors.danger : focus ? colors.primary : colors.borderColor;
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        secureTextEntry={type === "password" && true}
        onChangeText={onChangeText}
        style={[styles.Input, style, { borderColor: setBorder() }]}
        onFocus={() => setFocus(true)}
        onBlur={onBlur}
        placeholder={placeholder}
        {...props}
      />
      { error &&  <Error text={errorText} /> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    marginBottom: spacing.md  ,
  },
  label: {
    fontSize: fontSize.initial,
    fontWeight: "500",
    color: colors.primary,
  },
  Input: {
    fontSize: fontSize.md,
    padding: spacing.md,
    backgroundColor: colors.bgInput,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    marginTop: 8,
  },
});
