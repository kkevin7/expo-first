import React, { useState, useEffect } from "react";
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
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    setLoading(true);
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    if (resp && resp.ok) {
      const data = await resp.json();
      setUsers(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => String(item.id)}
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
});
