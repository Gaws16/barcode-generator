import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BarcodeGenerator from "./components/BarcodeGenerator";

export default function App() {
  return (
    <View style={styles.container}>
      <BarcodeGenerator />
      <StatusBar style="auto" />
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
