import { AppRegistry } from 'react-native';
import App from './App';
import codePush from "react-native-code-push";

var codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };
var root = codePush(codePushOptions)(App);

AppRegistry.registerComponent('NewTestApp', () => App);
