import React, { Component } from 'react';
import { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const TimerScreen = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmtime = (time) => {
    console.warn('A time has been picked: ', time);
    hidetimePicker();
  };

  return (
    <View style={styles.container}>
      <AppHeader />
      <View>
        <Button
          title="Show Date Picker"
          onPress={showDatePicker}
          style={styles.button}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>

      <View>
        <Button
          title="Show Time Picker"
          onPress={showTimePicker}
          style={styles.button}
        />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirmtime}
          onCancel={hideTimePicker}
        />
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text style={styles.buttonText}> Back </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9EFF22',
  },
  button: {
    backgroundColor: 'green',
    width: RFValue(100),
    height: RFValue(60),
    borderRadius: RFValue(40),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: RFValue(455),
    marginBottom: RFValue(40),
  },
  buttonText: {
    fontSize: RFValue(25),
    color: '#9EFF22',
    fontFamily: 'Courier',
    fontWeight: 600,
  },
});

export default TimerScreen;
