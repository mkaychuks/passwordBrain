import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


const Headline = (props) => {
  const { imageUrl, authorName, title, id } = props.headlineCard;

  // handling the navigation
  const navigation = useNavigation();

  return (
    // main container
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("NewsDetail", {id})}
    >
      {/* housing the image */}
      <View style={styles.imageWrapper}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
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
        <Text style={styles.author}>
          {authorName}
          <Text>{id}</Text>
        </Text>
        <Text style={styles.titleText} numberOfLines={2} ellipsizeMode="tail">
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

export default Headline;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: "blue",
    borderRadius: 5,
    marginBottom: 4,
  },
  imageWrapper: {
    width: "100%",
    borderRadius: 5,
  },
  image: {
    borderTopRadius: 5,
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
  titleText: {
    fontSize: 14,
    fontWeight: "800",
    marginTop: 8,
    lineHeight: 20,
  },
});
