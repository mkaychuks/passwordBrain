import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const Button = ({ color, title, onPressHandler, textColor }) => {
  return (
    <Pressable
      onPress={onPressHandler}
      style={[styles.button, { backgroundColor: color }]}
    >
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 16
  },
  title: {
    fontSize: 15.5,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});
