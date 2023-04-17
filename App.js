import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Texto = (props) => {
  const { style } = props;

  const [text, setText] = useState("Hello World!");

  const updateText = (text) => {
    setText("Chao Mundo!");
  };

  return (
    <Text style={[styles.text, style]} onPress={updateText}>
      {text}
    </Text>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.red} />
      <Texto style={styles.green} />
      <Texto style={styles.blue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  red: {
    flex: 1,
    backgroundColor: "red",
  },
  green: {
    flex: 2,
    backgroundColor: "green",
  },
  blue: {
    flex: 3,
    backgroundColor: "blue",
  },
  text: {
    color: "white",
    fontSize: 24,
    height: 100,
    width: 100,
  },
});
