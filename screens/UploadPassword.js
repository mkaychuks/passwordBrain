import {
  Button,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";

import { useForm } from "react-hook-form";

import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";

const UploadPassword = () => {
  //  react-hook-form init
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // REGULAR EXPRESSION FOR THE EMAIL VALIDATION
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const post = (data) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <Image
          source={require("../assets/images/logo.png")}
          style={{
            width: 55,
            height: 55,
            marginBottom: 15,
            alignSelf: "center",
          }}
        />
        <FormField
          formName={"App Name"}
          name="email"
          control={control}
          keyboardType={"email-address"}
          placeholder={"Email"}
          rules={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
          }}
        />
        <FormField
          formName={"Password"}
          name="password"
          control={control}
          keyboardType={"default"}
          placeholder={"Password"}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
          secureTextEntry={true}
        />
        <FormField
          formName={"Confirm-Password"}
          name="password"
          control={control}
          keyboardType={"default"}
          placeholder={"Password"}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
          secureTextEntry={true}
        />
        <CustomButton
          onPressHandler={handleSubmit(post)}
          textColor={"white"}
          title="Submit"
          color={"#0f5af0"}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default UploadPassword;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: 10,
    width: "100%",
  },
});
