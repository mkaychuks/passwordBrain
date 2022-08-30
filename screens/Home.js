import { StyleSheet, View, Image, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import FloatingActionButton from "../components/FloatingActionButton";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable style={{ marginLeft: 10 }}>
          <Image
            source={require("../assets/images/logo.png")}
            style={{ height: 24, width: 24, borderRadius: 100 }}
          />
        </Pressable>
      ),
      headerRight: () => (
        <Pressable style={{ marginRight: 10 }}>
          <Ionicons name="notifications" size={24} color="#fff"/>
        </Pressable>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ position: "absolute", right: 10, bottom: 20 }}>
        <FloatingActionButton
          onPressHandler={() => console.warn("Fab button pressed")}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

// HANDLESTHE SIGN OUT AND SIGN INS

// const handleSignOut = () => {
//   signOut(auth)
//     .then(() => {
//       navigation.replace("Login");
//     })
//     .catch((err) => alert(err.message));
// };

// import { signOut } from "firebase/auth";

// //  local imports
// import { auth } from "../firebase";

// const user = auth.currentUser?.email;
