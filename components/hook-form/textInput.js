import React from "react";
import { StyleSheet, TextInput, Text } from "react-native";
import { Controller } from "react-hook-form";

export default ({
  title,
  control,
  isPassword,
  name,
  rules,
  defaultValue,
  errorMessage,
}) => {
  return (
    <>
      <Text style={styles.label}>{title}</Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            secureTextEntry={isPassword}
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
      />
      {<Text style={styles.errorMessage}>{errorMessage}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    margin: 20,
    marginTop: '5%',
    marginLeft: 40,
    fontSize: 25,
  },
  errorMessage: {
    marginLeft: 35,
    fontSize: 12,
  },
  input: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius: 4,
    borderBottomWidth: 1,
    marginLeft: '5%',
    marginRight: '5%',
    fontSize: 20,
  },
});
