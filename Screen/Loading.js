import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const Loading = ({navigation}) => {
  return (
    <SafeAreaView style={styles.root}>
      <TouchableOpacity
        onPress={() => navigation.navigate('MainScreen')}
        style={styles.button}>
        <Text style={styles.text}>Click Me !</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Loading;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  text: {
    color: '#fffafa',
    fontSize: 18,
  },
});
