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

// Local imports
import Button from "../components/Button";

const AuthenticationFields = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // change the icon when this happens
  const iconChange = () => {
    setShowPassword(!showPassword);
  };

  // handle user log in
  const loginUser = () => {
    console.warn("User has been logged in");
    //  < -------- setup navigation and firebase here ------>
  };

  return (
    <View>
      {/* email  */}
      <View style={styles.emailInput}>
        <MaterialIcons name="email" size={24} color="black" />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      {/* password  */}
      <View style={styles.passwordInput}>
        <TouchableWithoutFeedback onPress={iconChange}>
          <FontAwesome
            name={showPassword ?  'lock' : 'unlock'}
            size={24}
            color="black"
          />
        </TouchableWithoutFeedback>
        <TextInput
          secureTextEntry={showPassword}
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      {/* Custom Button and text */}
      <Button color={"#2450a8"} title={"Login"} textColor={"#fff"} onPressHandler={loginUser} />
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
    marginVertical: 5
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
    
  }
});
