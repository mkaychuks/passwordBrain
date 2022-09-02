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
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";
import { db, auth } from "../firebase";

const UploadPassword = () => {
  //  react-hook-form init
  const {
    control,
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      app_name: "",
      password: "",
      confirm_password: "",
    },
  });

  // watch for the password
  const pwd = watch("password")

  // navigation hook
  const navigation = useNavigation();

  // handle write to the db
  const addPasswordToDB = async (data) => {
    const { app_name, password, confirm_password} = data
    try {
      const docRef = await addDoc(collection(db, "details"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
        author: auth.currentUser?.email
      });
      console.warn("button pressed")
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
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
          name="app_name"
          control={control}
          keyboardType={"default"}
          placeholder={"App_Name"}
          rules={{
            required: "App_Name is required",
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
          name="confirm_password"
          control={control}
          keyboardType={"default"}
          placeholder={"Confirm-Password"}
          rules={{
            validate: value => value === pwd || "Password do not match"
          }}
          secureTextEntry={true}
        />
        <CustomButton
          onPressHandler={handleSubmit(addPasswordToDB)}
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
