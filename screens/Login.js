import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Button from "../components/Button";

const Login = () => {
  // handle user log in
  const loginUser = () => {
    console.warn("User has been logged in");
    //  < -------- setup navigation and firebase here ------>
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          {/* Import button from components */}
          <Button title={"Login"} color="##7676f4" textColor={"#ffff"} onPressHandler={loginUser}/>

          {/* don't have an account? Register  START*/}
          <Text>
            Don't have and Account? &nbsp; <Text>Register</Text>
          </Text>
          {/* don't have an account? Register  END*/}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
