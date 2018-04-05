import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import codePush from "react-native-code-push";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Sample App!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js.
        </Text>
        <Button
          onPress={this.onPressCrashApp}
          title="Crash"
          color="#841584"
          accessibilityLabel="CrashApp"
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        />
        <Button
          onPress={this.onPressUpdate}
          title="Update"
          color="#841584"
          accessibilityLabel="Update"
        />
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }


  onPressUpdate() {
      codePush.sync({
          updateDialog: true,
          installMode: codePush.InstallMode.IMMEDIATE
      });
  }

  onPressCrashApp() {
    console.log("Error will be thrown");
    throw new Error("Test error");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});