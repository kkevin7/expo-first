import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Dimensions, StyleSheet, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={require("./assets/icon.png")} />
      <Image
        style={styles.photo2}
        source={{ uri: "http://placekitten.com/200/200" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 22,
  },
  scrollView: {
    width: Dimensions.get("window").width,
  },
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  photo: {
    height: 60,
    width: 60,
  },
  photo2: {
    height: 200,
    width: 200,
  },
});
