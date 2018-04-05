import { AppRegistry } from 'react-native';
import App from './App';
import codePush from "react-native-code-push";

var root = codePush(App);

AppRegistry.registerComponent('NewTestApp', () => App);
