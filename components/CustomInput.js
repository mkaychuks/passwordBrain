import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import { Controller } from "react-hook-form";

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View style={styles.textInputwrapper}>
            <TextInput
              placeholder={placeholder}
              style={styles.input}
              value={value}
              onChangeText={(value) => onChange(value)}
              onBlur={onBlur}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={{ color: "red", alignSelf: "stretch", fontSize: 8 }}>
              {error.message || "error"}
            </Text>
          )}
        </>
      )}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  textInputwrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderTopColor: "white",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    borderRightColor: "white",
    borderLeftColor: "white",
    padding: 8,
    marginVertical: 5,
  },
  input: {
    width: "100%",
  },
});
