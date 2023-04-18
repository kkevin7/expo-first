import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  Dimensions,
  StyleSheet,
  View,
  Text,
  FlatList,
  SectionList,
} from "react-native";

const data = [
  { key: "1", name: "Kevin" },
  { key: "2", name: "Jose" },
  { key: "3", name: "Dayana" },
  { key: "4", name: "Django" },
  { key: "5", name: "Benji" },
  { key: "6", name: "Kevin" },
  { key: "7", name: "Jose" },
  { key: "8", name: "Dayana" },
  { key: "9", name: "Django" },
  { key: "10", name: "Benji" },
  { key: "11", name: "Kevin" },
  { key: "12", name: "Jose" },
  { key: "13", name: "Dayana" },
  { key: "14", name: "Django" },
  { key: "15", name: "Benji" },
  { key: "16", name: "Kevin" },
  { key: "17", name: "Jose" },
  { key: "18", name: "Dayana" },
  { key: "19", name: "Django" },
  { key: "20", name: "Benji" },
];

export default function App() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            title: "Grupo 1",
            data: [
              { key: "1", name: "Kevin" },
              { key: "2", name: "Jose" },
              { key: "3", name: "Dayana" },
              { key: "4", name: "Django" },
              { key: "5", name: "Benji" },
            ],
          },
          {
            title: "Grupo 2",
            data: [
              { key: "5", name: "Benji" },
              { key: "6", name: "Kevin" },
              { key: "7", name: "Jose" },
              { key: "8", name: "Dayana" },
              { key: "9", name: "Django" },
              { key: "10", name: "Benji" },
            ],
          },
          {
            title: "Grupo 3",
            data: [
              { key: "11", name: "Kevin" },
              { key: "12", name: "Jose" },
              { key: "13", name: "Dayana" },
              { key: "14", name: "Django" },
              { key: "15", name: "Benji" },
            ],
          },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.section}>{section.title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
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
  section: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#eee",
    paddingTop: 2,
    paddingLeft: 10,
    paddingBottom: 2,
    paddingRight: 10,
  },
});
