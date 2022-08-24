import {
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const AuthenticationFields = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // change the icon when this happens
  const iconChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      {/* email  */}
      <View style={styles.emailInput}>
        <TextInput
          placeholder="email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <MaterialIcons name="email" size={24} color="black" />
      </View>

      {/* password  */}
      <View style={styles.passwordInput}>
        <TextInput
          secureTextEntry={showPassword}
          placeholder="password"
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {/* Icon */}
        <TouchableWithoutFeedback onPress={iconChange}>
          <FontAwesome
            name={showPassword ? "lock" : "unlock"}
            size={24}
            color="black"
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default AuthenticationFields;

const styles = StyleSheet.create({
  emailInput: {
    flexDirection: "row",
    backgroundColor: "green",
  },
  passwordInput: {
    flexDirection: "row",
    backgroundColor: "red",
  },
  input: {
    padding: 8,
    fontSize: 13.5,
  },
});
