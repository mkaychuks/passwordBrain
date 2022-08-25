import {
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";

// Local imports
import Button from "../components/Button";

const AuthenticationFields = () => {
  const [showPassword, setShowPassword] = useState(true);

  //  react-hook-form init
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // REGULAR EXPRESSION FOR THE EMAIL VALIDATION
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // handle user log in
  const loginUser = (data) => {
    const { email, password } = data;
    console.log(email, password);
    // console.warn("User has been logged in");
    //  < -------- setup navigation and firebase here ------>
  };

  return (
    <View>
      {/* email  */}

      <Controller
        control={control}
        name="email"
        rules={{
          required: "Email is required",
          pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
        }}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <View style={styles.emailInput}>
              <MaterialIcons name="email" size={24} color="black" />
              <TextInput
                placeholder="Email"
                style={styles.input}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType={"email-address"}
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

      {/* password  */}
      <Controller
        name="password"
        rules={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password should be at least 8 characters long",
          },
        }}
        control={control}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <View style={styles.passwordInput}>
              <TouchableWithoutFeedback
                onPress={() => setShowPassword(!showPassword)}
              >
                <FontAwesome
                  name={showPassword ? "lock" : "unlock"}
                  size={24}
                  color="black"
                />
              </TouchableWithoutFeedback>
              <TextInput
                secureTextEntry={showPassword}
                placeholder="Password"
                style={styles.input}
                value={value}
                onChangeText={onChange}
                keyboardType="default"
                onBlur={onBlur}
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

      {/* Custom Button and text */}
      <Button
        color={"#2450a8"}
        title={"Login"}
        textColor={"#fff"}
        onPressHandler={handleSubmit(loginUser)}
      />
    </View>
  );
};

export default AuthenticationFields;

const styles = StyleSheet.create({
  emailInput: {
    flexDirection: "row",
    alignItems: "center",
    borderTopColor: "white",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderRightColor: "white",
    borderLeftColor: "white",
    padding: 8,
    marginVertical: 5,
  },
  input: {
    paddingHorizontal: 8,
    width: "100%",
  },
  passwordInput: {
    flexDirection: "row",
    alignItems: "center",
    borderTopColor: "white",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderRightColor: "white",
    borderLeftColor: "white",
    padding: 8,
  },
});
