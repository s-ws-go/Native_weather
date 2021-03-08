import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Weather({ temp }) {
  return (
    <View style={styles.container}>
      <View style={styles.halfcontainer}>
        <Ionicons name="rainy" size={90} />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.halfcontainer}></View>
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  halfcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 40,
    marginTop: 10,
  },
});
