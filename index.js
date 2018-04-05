import { AppRegistry } from 'react-native';
import App from './App';
import codePush from "react-native-code-push";

var codePushOptions = { updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE };
var root = codePush(codePushOptions)(App);

AppRegistry.registerComponent('NewTestApp', () => App);
