import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';

export default class AppHeader extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor={'orange'}
            centerComponent={{
              text: 'Health Keeper',
              style: {
                color: '#fff',
                fontSize: RFValue(20),
                fontWeight: 'bold',
                fontFamily: 'Courier',
              },
            }}
          />
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopRadius: 33,
  },
});
