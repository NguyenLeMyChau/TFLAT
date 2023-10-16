import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import Navigator from "./src/navigator/Navigator";
import Main from './src/component/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width : "100%",
    height : "100%",
    backgroundColor: '#EEEEEE',
  },
});
