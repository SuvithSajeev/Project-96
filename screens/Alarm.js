import { View, Button, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

const Alarm = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(updateTime, 1000);
  return (
    <View>
      <Text style={styles.clock}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  clock: {
    width: RFValue(270),
    height: RFValue(60),
    backgroundColor: 'orange',
    borderRadius: RFValue(50),
    fontSize: RFValue(35),
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: 'black',
    shadowColor: 'black',
    marginTop: RFValue(50),
    fontFamily: 'Courier',
    fontWeight: 'bold',
    color: '#A12C00'
    
  },
});

export default Alarm;
