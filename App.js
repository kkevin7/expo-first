import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Button,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
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
      <TouchableHighlight
        underlayColor={"#999"}
        activeOpacity={0.2}
        onPress={() => {
          setSubmit(text);
          alert("Text Succesfully Sent");
        }}
      >
        <Text>Aceptar</Text>
      </TouchableHighlight>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#00f", true)}
        onPress={() => {
          setSubmit(text);
          alert("Text Succesfully Sent");
        }}
      >
        <View style={styles.view}>
          <Text>Aceptar</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {
          setSubmit(text);
          alert("Text Succesfully Sent");
        }}
      >
        <View style={styles.view}>
          <Text>Aceptar</Text>
        </View>
      </TouchableOpacity>
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
  view: {
    height: 40,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  touchableOpacity: {
    backgroundColor: "#EEE",
  },
  input: {
    height: 40,
    backgroundColor: "#ccc",
    borderBottomWidth: 1,
    width: width,
  },
});
