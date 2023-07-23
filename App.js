import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import TimerScreen from "./screens/TimerScreen"
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  TimerScreen : TimerScreen
})

const AppContainer = createAppContainer(AppNavigator)



