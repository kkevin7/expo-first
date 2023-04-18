import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Button,
} from "react-native";

const width = Dimensions.get("window").width;

export default function App() {
  const [text, setText] = useState("Nice Day :)");
  const [submit, setSubmit] = useState("");

  return (
    <View style={styles.container}>
      <Text>Texto: {submit}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your text"
        onChangeText={(t) => setText(t)}
        defaultValue={text}
      />
      <Button
        onPress={() => {
          setSubmit(text);
          alert("Text Succesfully Sent");
        }}
        title="Aceptar"
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
