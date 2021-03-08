import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowview}>
        <Text style={styles.text}>What the Fuck?</Text>
      </View>
      <View style={styles.greenview}>
        <Text style={styles.text}>What the Fuck?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  yellowview: {
    flex: 1,
    backgroundColor: "yellow",
  },
  greenview: {
    flex: 2,
    backgroundColor: "green",
  },
});
