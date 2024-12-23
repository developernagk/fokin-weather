import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>fokin weather app</Text> */}
      {/* <Text style={styles.text}>모든 텍스트는 text 안에</Text> */}
      <View style={styles.yellowView}>
        <Text>yellow</Text>
      </View>
      <View style={styles.whiteView}>
        <Text>White</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    backgroundColor: 'navy',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: "white",
    fontSize: 33,
    fontWeight:"bold"
  },
  yellowView: {
    flex: 1,
    backgroundColor: "yellow"
  },
  whiteView: {
    flex: 2,
    backgroundColor: "white"
  }
});
