import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

interface ValueProps {
  label: string;
  value: string;
}

const Value = ({ label, value }: ValueProps) => (
  <View style={styles.valueContainer}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Value label="Steps" value="1229" />
        <Value label="Distance" value="0.75km" />
      </View>
      <Value label="Flights Climbed" value="12" />

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
  text: {
    color: "#fff",
  },
  valueContainer: {
    marginRight: 50,
    marginVertical: 10,
  },
  label: {
    color: "white",
    fontSize: 20,
  },
  value: {
    fontSize: 35,
    color: "#AFB3BE",
    fontWeight: "500",
  },
});
