import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Texto = (props) => {
  const { text } = props;
  return <Text>{text}</Text>;
};

export default function App() {
  return (
    <View style={styles.container}>
      <Texto text={"Hello"} />
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
});
