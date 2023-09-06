import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {React, useState, useEffect} from 'react';

const Loading = ({navigation}) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <View style={{marginTop: '5%'}}>
        {/* TIME */}
        <Text style={styles.date}>
          {new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          })}
        </Text>
      </View>
      {/* TITLE */}
      <View style={styles.titleContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Today')}
          style={styles.button}>
          <Text style={styles.text}>PROTASK</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Loading;

const {height} = Dimensions.get('window').height;
const {width} = Dimensions.get('window').width;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
    height: height,
    width: width,
    flexDirection: 'column',
    //justifyContent: 'space-between',
  },
  date: {
    fontSize: 10,
    color: '#7e7e7e',
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  text: {
    color: '#f2f2f2',
    fontSize: 18,
    fontFamily: 'Arial',
    fontWeight: '500',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
