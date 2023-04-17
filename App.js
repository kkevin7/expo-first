import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Texto = (props) => {
  const [text, setText] = useState("Hello World!");

  const updateText = (text) => {
    setText("Chao Mundo!");
  };

  return (
    <Text style={styles.text} onPress={updateText}>
      {text}
    </Text>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Texto></Texto>
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
  text: {
    color: "red",
    fontSize: 24,
  },
});
