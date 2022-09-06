import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import getHeadlinesData from "../services/getHeadlines";

//
const NewsDetail = () => {
  const [data, setData] = useState([]);
  const route = useRoute();

  // fetching the data from the api call
  useLayoutEffect(() => {
    const getData = async () => {
      const headlineData = await getHeadlinesData();
      setData(headlineData);
    };
    getData();
  }, []);

  // receiving the params?.id from each Headline component
  const headlineId = route.params?.id;
  const headline = data.find((item) => item.id.toString() === headlineId); // filtering the list of data to match the passed id param?

  // if headline is not foud, do this
  if (!headline) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "800" }}>Page Not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: headline.urlToImage }} style={styles.image} />
      <View
        style={{
          height: StyleSheet.hairlineWidth,
          backgroundColor: "#ccc",
          marginTop: 10,
        }}
      />

      {/* content of the card */}
      <View style={styles.content}>
        <Text style={styles.author}>{headline.source.name}</Text>
        <Text style={styles.titleText}>{headline.title}</Text>
        <Text style={styles.contentText} numberOfLines={4}>
          {headline.content}
        </Text>
      </View>
    </View>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    marginTop: 8,
  },
  image: {
    borderWidth: 2,
    width: "100%",
    resizeMode: "cover",

    height: 200,
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
  contentText: {
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20,
  },
});
