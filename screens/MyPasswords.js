import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore/lite";
import { auth, db } from "../firebase";

const MyPasswords = () => {
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    let documents = [];
    const getDocuments = async () => {
      const querySnapshot = await getDocs(collection(db, "passwords"));
      querySnapshot.forEach((doc) => {
        if (doc.data().owner === auth.currentUser?.email) {
          const document = {
            id: doc.id,
            ...doc.data(),
          };
          documents.push(document);
          setData(documents);
        }
      });
    };

    getDocuments();
  }, []);

  return (
    <View style={{ justifyContent: "center", flex: 1, paddingHorizontal: 8 }}>
      <FlatList
        renderItem={({ item }) => (
          <View
            style={{
              borderColor: "#ccc",
              borderWidth: 1,
              backgroundColor: "#fff",
              paddingHorizontal: 8,
              borderRadius: 8,
              marginBottom: 4,
              marginTop: 4,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 4,
                marginTop: 4,
              }}
            >
              {item.app_name}
            </Text>
            <View
              style={{
                height: StyleSheet.hairlineWidth,
                backgroundColor: "#ccc",
                marginTop: 4,
                marginBottom: 10,
              }}
            />
            <Text style={{ fontSize: 15, marginBottom: 4 }}>
              {item.password}
            </Text>
          </View>
        )}
        data={data}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MyPasswords;

const styles = StyleSheet.create({});
