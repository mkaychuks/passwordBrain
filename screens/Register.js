import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  ToastAndroid,
} from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

//  local imports
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { auth } from "../firebase";

// MAIN REGISTER COMPONENT
const Register = () => {
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

  // getting the useNavigation hook for navigation
  const navigation = useNavigation();

  // handle user log in
  const registerUser = (data) => {
    const { email, password } = data;

    // using the firebase service
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        const { email, password } = user;
      })
      .then(() => navigation.replace("Login"))
      .catch((e) => {
        if (e.code == "auth/email-already-in-use") {
          ToastAndroid.showWithGravityAndOffset(
            (message = "invalid credentials"),
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50
          );
        }
      });
  };

  return (
    <View style={styles.container}>
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
              title={"register"}
              textColor={"#fff"}
              onPressHandler={handleSubmit(registerUser)}
            />
          </View>
        </View>
        {/* ends */}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Register;

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
