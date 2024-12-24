import React from "react";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, StatusBar } from "react-native";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-tornado",
    gradient: ["#29323c", "#485563"],
    title: "Thunderstorm",
    subtitle: "It's dangerous, so don't go out and stay indoors."
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#757f9a", "#d7dde8"],
    title: "Haze",
    subtitle: "Be careful driving on days with heavy fog."
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#525252", "#3d72b4"],
    title: "Drizzle",
    subtitle: "On a day like this, doesn’t the smell of wet earth feel good?"
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#283048", "#859398"],
    title: "Rain",
    subtitle: "I think the weather will get cooler soon."
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#c9d6ff", "#e2e2e2"],
    title: "Snow",
    subtitle: "I think it would be nice if it snowed in our area too."
  },
  Atmosphere: {
    iconName: "air-filter",
    gradient: ["#2b32b2", "#d4d3dd"],
    title: "Atmosphere",
    subtitle: "The atmosphere is not good, so wear a mask when you go out."
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#fdbb2d", "#22c1c3"],
    title: "Clear",
    subtitle: "Clear weather is perfect for watching baseball."
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#536976", "#bbd2c5"],
    title: "Clouds",
    subtitle: "I feel like I get depressed in cloudy weather."
  }
}

export default function Weather({ temp, condition }) {
  const weatherCondition = weatherOptions[condition] || weatherOptions.Clear;
  return (
    <LinearGradient
      colors={weatherCondition.gradient}
      style={styles.container}>
        <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weatherCondition.iconName} size={80} color="#fff" />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.title}>{weatherCondition.title}</Text>
        <Text style={styles.subtitle}>{weatherCondition.subtitle}</Text>
      </View>
    </LinearGradient>
)
}

Weather.PropTypes = {
  temp:PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist"
  ]).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 35,
    color: "#fff"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600"
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
})