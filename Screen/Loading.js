import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
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
      <Text style={styles.date}>
        {new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })}
        {/* {time} */}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Today')}
        style={styles.button}>
        <Text style={styles.text}>PROTASK</Text>
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
  date: {
    fontSize: 10,
    textAlign: 'center',
    position: 'absolute',
    top: 50,
    color: '#696969',
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
});
