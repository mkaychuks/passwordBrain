import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

const FormField = ({
  formName,
  placeholder,
  name,
  control,
  rules = {},
  secureTextEntry,
}) => {
  return (
    // <View>
    //   <Text style={styles.formName}>{formName}:</Text>
    //   <TextInput style={styles.input} placeholder={placeholder}/>
    // </View>

    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View>
            <Text style={styles.formName}>{formName}:</Text>
            <TextInput
              style={styles.input}
              placeholder={placeholder}
              value={value}
              onChangeText={(text) => onChange(text)}
              onBlur={onBlur}
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

export default FormField;

const styles = StyleSheet.create({
  formName: {
    fontSize: 14,
    fontWeight: "300",
    color: "#595150",
    marginTop: 12,
    marginBottom: 4
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 8,
    height: 40,
    borderRadius: 5,
    // marginTop: 12,
  },
});
