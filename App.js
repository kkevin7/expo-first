import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

export default function App() {
  const [text, setText] = useState("Nice Day :)");

  return (
    <View style={styles.container}>
      <Text>Texto: {text}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your text"
        onChangeText={(t) => setText(t)}
        defaultValue={text}
      />
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
  input: {
    height: 40,
    backgroundColor: "#ccc",
    borderBottomWidth: 1,
    width: width,
  },
});
