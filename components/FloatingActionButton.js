import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

const FloatingActionButton = ({ onPressHandler }) => {
  return (
    <Pressable style={styles.fab} onPress={onPressHandler}>
      <EvilIcons name="pencil" size={40} color="#fff" />
    </Pressable>
  );
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  fab: {
    backgroundColor: "#0f5af0",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});
