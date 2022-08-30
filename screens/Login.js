import {
  StyleSheet,
  Text,
  // SafeAreaView,
  KeyboardAvoidingView,
  Image,
  View,
  Pressable,
  ToastAndroid,
} from "react-native";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from 'react-native-safe-area-context';

//  local imports
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { auth } from "../firebase";

// MAIN LOGIN COMPONENT
const Login = () => {
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

  // getting the useNavigation hook for navigation
  const navigation = useNavigation();

  // REGULAR EXPRESSION FOR THE EMAIL VALIDATION
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // handle user log in
  const loginUser = (data) => {
    const { email, password } = data;
    // handle the signin process
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigation.replace("Home"))
      .catch((e) => {
        if (e.code == "auth/user-not-found" || "auth/wrong-password") {
          ToastAndroid.showWithGravityAndOffset(
            (message = "invalid credentials"),
            ToastAndroid.SHORT,
            ToastAndroid.TOP,
            25,
            50
          );
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark"/>
      <KeyboardAvoidingView style={styles.container}>
        {/* Image */}
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.image}
        />

        {/* UnderPass */}
        <View style={styles.titleWrapper}>
          <View style={styles.hairline} />
          <Text style={styles.logoText}>lastPass</Text>
          <View style={styles.hairline} />
        </View>

        {/*  the whole authentication system for LOgiN is housed here */}
        <View style={styles.authentication}>
          {/* email textfield */}
          <CustomInput
            name="email"
            control={control}
            keyboardType={"email-address"}
            placeholder={"Email"}
            rules={{
              required: "Email is required",
              pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
            }}
          />

          {/* password textfield */}
          <CustomInput
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

          {/* Button custom */}
          <View style={{ alignItems: "stretch" }}>
            <CustomButton
              color={"#0f5af0"}
              title={"login"}
              textColor={"#fff"}
              onPressHandler={handleSubmit(loginUser)}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              marginTop: 8,
            }}
          >
            <Text>Don't have an account?&nbsp;</Text>
            <Pressable onPress={() => navigation.navigate("Register")}>
              <Text style={{ fontSize: 15, color: "#0f5af0" }}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
        {/* ends */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 60,
    height: 60,
  },
  logoText: {
    fontWeight: "bold",
    fontSize: 24,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hairline: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#cccc",
    width: 77,
    marginHorizontal: 10,
  },
  authentication: {
    marginTop: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
});
