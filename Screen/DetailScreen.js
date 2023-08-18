import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import EventPicker from '../Screen/EventPicker';
import {SafeAreaView} from 'react-native-safe-area-context';

const DetailScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.Header}>WALL</Text>
      </SafeAreaView>
      <EventPicker />
    </>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Header: {
    color: '#000000',
    fontSize: 30,
    fontWeight: '600',
    fontFamily: 'Palatino',
    textShadowColor: 'rgba(0, 0, 0, 0.58)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 7,
  },
});
