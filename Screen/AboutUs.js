import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const AboutUs = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Header}>How this App works!</Text>
      <View style={styles.about}>
        <Text style={styles.text}>How this App Works!</Text>
      </View>
      <View style={{marginTop: 25}}>
        <Text style={styles.worktextheader}>About Us!</Text>
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.worktext}>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AboutUs;

const {height} = Dimensions.get('window').height;
const {width} = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
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
  about: {
    backgroundColor: '#ffffff',
    height: '50%',
    width: '90%',
    marginTop: 20,
  },
  text: {
    fontSize: 22,
  },
  textcontainer: {
    backgroundColor: '#ffffff',
    height: '30%',
    width: '90%',
    marginTop: 10,
  },
  worktextheader: {
    color: '#000000',
    fontSize: 30,
    fontWeight: '600',
    fontFamily: 'Palatino',
    textShadowColor: 'rgba(0, 0, 0, 0.58)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 7,
  },
  worktext: {
    fontSize: 20,
  },
});
