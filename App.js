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
import Analytics from 'appcenter-analytics';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Sample App!
        </Text>
        <Button
          onPress={this.onPressCrashApp}
          title="Crash"
          color="#841584"
          accessibilityLabel="CrashApp"
        />
        <TextInput
          style={{height: 40, width: 200, margin: 10, borderColor: 'gray', borderWidth: 1}}
          placeholder="Type here!"
        />
        <Button
          onPress={this.onPressUpdate}
          title="Update"
          color="#841584"
          accessibilityLabel="Update"
        />
        <Text style={styles.instructions}>
          Click update button to verify and install latest version!
        </Text>
      </View>
    );
  }


  onPressUpdate() {
    Analytics.trackEvent('Update button clicked');

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