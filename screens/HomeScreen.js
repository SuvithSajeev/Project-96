import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AppHeader from '../components/AppHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import TimerScreen from './TimerScreen';
import Alarm from './Alarm';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      timer: '',
    };
  }
  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item: timer }) => {
    return <TimerScreen timer={timer} />;
  };
  render() {
    return (
      <View style={styles.containerView}>
        <AppHeader />
        <View>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
        <View style={styles.instContainer}>
          <Text style={styles.gInstText}>General Instructions :</Text>
          <Text style={styles.instText}>
            1. Click on the add button to customize your timer.
          </Text>
          <Text style={styles.instText}>
            2. You can delete your timer whenever needed from the home screen.
          </Text>
        </View>
        <Alarm />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('TimerScreen')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#F12C00',
  },
  instContainer: {
    flex: 1,
  },
  instText: {
    fontSize: 15,
    color: 'black',
    justifySelf: 'center',
    marginRight: RFValue(5),
    marginLeft: RFValue(20),
    fontFamily: 'Courier',
  },
  gInstText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginTop: RFValue(10),
    marginRight: RFValue(30),
    marginLeft: RFValue(20),
    fontFamily: 'Courier',
  },
  logo: {
    width: RFValue(120),
    height: RFValue(150),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'yellow',
    width: RFValue(60),
    height: RFValue(60),
    borderRadius: RFValue(40),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: RFValue(210),
    marginLeft: RFValue(230),
    marginTop: RFValue(-60),
  },
  buttonText: {
    fontSize: RFValue(40),
    color: '#F12C00',
    fontFamily: 'Courier',
  },
});
