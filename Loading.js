import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
  return <View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <Text style={styles.Text}>Getting the weather information</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical:100,
    backgroundColor: "#eef1f9"
  },
  Text: {
    color: "#353d75",
    fontSize: 30
  }
})