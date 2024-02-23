import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Value from "./src/components/Value";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.values}>
        <Value label="Steps" value="1230" />
        <Value label="Distance" value="0.75km" />
        <Value label="Flights Climbed" value="13" />
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 12,
  },
  values: {
    flexDirection: "row",
    gap: 25,
    flexWrap: "wrap",
  },
  text: {
    color: "#fff",
  },
});
