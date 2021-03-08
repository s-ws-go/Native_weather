import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconname: "cloud-lightning",
    colors: ["#1F1C2C", "#928DAB"],
    title: "Thunderstorm",
    subtitle: "Thor, the god of lighting, is crying.",
  },
  Drizzle: {
    iconname: "cloud-drizzle",
    colors: ["#3C3B3F", "#605C3C"],
    title: "Drizzle",
    subtitle: "Oh What a God Damn Weather.",
  },
  Rain: {
    iconname: "cloud-rain",
    colors: ["#000046", "#1CB5E0"],
    title: "Rainy",
    subtitle: "It's raining, It reminds me of you.",
  },
  Snow: {
    iconname: "cloud-snow",
    colors: ["#abbaab", "#ffffff"],
    title: "Snowy",
    subtitle: "It's white trash!! -KOR ARMY",
  },
  Atmosphere: {
    iconname: "cloud-off",
    colors: ["#1F1C2C", "#928DAB"],
    title: "Atmosphere",
    subtitle: "What is going to do now..???",
  },
  Clear: {
    iconname: "sun",
    colors: ["#ffffff", "#f12711"],
    title: "Sunny",
    subtitle: "Sun and Sun and Sun. Good to eat Sunchip.",
  },
  Clouds: {
    iconname: "cloud",
    colors: ["#91EAE4", "#f5af19"],
    title: "Cloud",
    subtitle: "Shout more loudly to the dark cloud, young man.",
  },
};

export default function Weather({ temp, condition, city }) {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={weatherOptions[condition].colors}
      style={styles.container}
    >
      <StatusBar Style="light" />
      <View style={styles.halfcontainer}>
        <Feather
          name={weatherOptions[condition].iconname}
          size={90}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
        <Text style={styles.temp}>{city}</Text>
      </View>
      <View style={{ ...styles.halfcontainer, ...styles.textcontainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
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
  ]),
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
    color: "white",
  },
  title: {
    color: "white",
    fontSize: 40,
    marginBottom: 20,
  },
  subtitle: {
    color: "white",
    fontSize: 30,
  },
  textcontainer: {
    paddingHorizontal: 50,
    alignItems: "flex-start",
  },
});
