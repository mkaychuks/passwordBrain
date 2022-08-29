import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import React from "react";
import { useForm } from "react-hook-form";

//  local imports
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

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

  // handle user log in
  const loginUser = (data) => {
    const { email, password } = data;
    console.log(email, password);
    console.log("REGISTER BUTTON PRESSED");
    // console.warn("User has been logged in");
    //  < -------- setup navigation and firebase here ------>
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
