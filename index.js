/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import StarterView from './src/starter/StarterView';

AppRegistry.registerComponent(appName, () => StarterView);
AppRegistry.runApplication("App", {
    rootTag: document.getElementById("root")
});

