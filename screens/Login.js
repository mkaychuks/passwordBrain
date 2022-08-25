import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import React from "react";
import AuthenticationFields from "../components/AuthenticationFields";

const Login = () => {
  return (
    <SafeAreaView>
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
          <AuthenticationFields />
        </View>
        {/* endsd */}
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
    // backgroundColor: 'red'
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
    alignItems: "center"
  },
  hairline: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '',
    width: 77,
    marginHorizontal: 10
  },
  authentication: {
    paddingHorizontal: 20
  }
});
