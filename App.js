import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Hello! World!</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder={"New To Do"} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center'
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "300",
    marginBottom: 30
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width -25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  ...Platform.select({
    ios: {
      backgroundColor: 'red'
    },
    android: {
      backgroundColor: 'black'
    }
  })
  }
});
