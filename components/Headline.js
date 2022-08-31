import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Headline = () => {
  return (
    // main container
    <View style={styles.container}>
      {/* housing the image */}
      <View style={styles.imageWrapper}>
        <Image
          source={require("../assets/images/gas.jpg")}
          style={styles.image}
        />
      </View>
      {/* divider SPACER */}
      <View
        style={{
          height: StyleSheet.hairlineWidth,
          backgroundColor: "#ccc",
          marginTop: 10,
        }}
      />

      {/* content of the card */}
      <View style={styles.content}>
        <Text style={styles.author}>author</Text>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          Texting the microphone
          jkngajkdgnjkagbjkandgkangjknadgjknagjknagjkwengiowngoiwebnweivnweoivmweoivmweiovmweovnweionviowevniowenvoiwenviowenvioweniowenviowevnio
        </Text>
      </View>
    </View>
  );
};

export default Headline;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: "blue",
    borderRadius: 5,
  },
  imageWrapper: {
    width: "100%",
    borderRadius: 5,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  content: {
    paddingHorizontal: 15,
    marginTop: 8,
    marginBottom: 8,
  },
  author: {
    fontSize: 10,
    fontWeight: "600",
  },
  title: {
    fontSize: 14,
    fontWeight: "800",
    marginTop: 8,
    lineHeight: 20,
  },
});