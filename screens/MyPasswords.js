import {FlatList, StyleSheet, Text, View } from "react-native";
import React, {useLayoutEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore/lite";
import { auth, db } from "../firebase";

const MyPasswords = () => {
  const [data, setData] = useState([]); // set the state management

  // pinging firebase-firestore
  useLayoutEffect(() => {
    let documents = []; // create an empy array to store data
    const getDocuments = async () => {
      const querySnapshot = await getDocs(collection(db, "passwords"));
      querySnapshot.forEach((doc) => {
        if (doc.data().owner === auth.currentUser?.email) {
          const document = {
            id: doc.id,
            ...doc.data(),
          }; // filter the result "if the owner of the document fetched is the currentUser"
          documents.push(document); // push to the empty document array
          setData(documents); // push to the state management
        }
      });
    };

    getDocuments(); // calling/pinging frebase here
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
            <Text style={{ fontSize: 15, marginBottom: 8 }}>
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
