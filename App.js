import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Modal,
  Button,
} from "react-native";

export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {}}
      >
        <View style={styles.center}>
          <View style={styles.content}>
            <Text>Soy un Modal</Text>
            <Button title="Cerrar modal" onPress={() => setModal(!modal)} />
          </View>
        </View>
      </Modal>
      <Text>No soy un modal</Text>
      <Button title={"Abrir Modal"} onPress={() => setModal(!modal)} />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: Dimensions.get("window").width,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  center: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  content: {
    backgroundColor: "#eee",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 25,
  },
});
