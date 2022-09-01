import {
  StyleSheet,
  View,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  FlatList,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import FloatingActionButton from "../components/FloatingActionButton";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";

// local imports
import Headline from "../components/Headline";
import getHeadlinesData from "../services/getHeadlines";

const Home = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

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
        <Pressable style={{ marginRight: 10 }} onPress={() => navigation.navigate("UploadPassword")}>
          <EvilIcons name="pencil" size={34} color="#fff" />
        </Pressable>
      ),
    });
  }, []);

  // handle api calling
  useEffect(() => {
    const getData = async () => {
      const headlineData = await getHeadlinesData();
      setData(headlineData);
    };
    getData();
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* headline view */}
      <View style={styles.headlineWrapper}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Sports Headlines
        </Text>
        <View
          style={{
            height: StyleSheet.hairlineWidth,
            backgroundColor: "#ccc",
            marginTop: 4,
            marginBottom: 10,
          }}
        />
      </View>

      {/* the card for each news */}

      <FlatList
        data={data}
        keyExtractor={(item) => {
          item.id
        }}
        renderItem={({ item }) => (
          <Headline
            headlineCard={{
              title: item.title,
              authorName: item.source.name,
              imageUrl: item.urlToImage,
              id: item.id
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headlineWrapper: {
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 10,
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
