import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import InputText from '../components/InputText';
import {useDispatch, useSelector} from 'react-redux';
import {RemoveTask} from '../components/redux/Addslice';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const MainScreen = () => {
  const dispatch = useDispatch();
  const taskData = useSelector(state => state.add.data);
  const taskDataa = useSelector(state => state.remove.data);
  const [list, setList] = useState(taskDataa.data);

  console.log('MainScreen', taskData);

  const getColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getRandomColor = () => {
    const minValue = 0;
    const range = 256 - minValue;
    const randomValue = Math.floor(Math.random() * range) + minValue;
    const blackShade = randomValue.toString(16).padStart(2, '0');
    const color = `#${blackShade}${blackShade}${blackShade}`;
    return color;
  };

  const onPressHandler = () => {
    dispatch(RemoveTask(list));
    setList('');
  };

  const getRandom = () => {
    const maxX = 90;
    const maxY = 50;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    return {left: randomX, top: randomY};
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.headetText}>Today</Text>
      </View>
      <InputText />
      <View style={styles.vertical} />
      <View style={styles.horizontal} />
      <ScrollView style={styles.touch}>
        {taskData.map((item, index) => (
          <TouchableOpacity key={index} onPress={onPressHandler}>
            <View activeOpacity={getColor()} style={styles.textcontainer}>
              <Text
                style={[
                  styles.todotext,
                  {left: getRandom().left, top: getRandom().top},
                  {color: getRandomColor({item})},
                ]}>
                • {item}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  todotext: {
    fontSize: 20,
    fontFamily: 'Noteworthy',
    fontWeight: '500',
    height: 30,
    top: 5,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  text: {
    color: '#00C9C8',
    fontSize: 18,
  },
  header: {
    marginTop: 20,
    height: 70,
    width: '100%',
    backgroundColor: '#f2f2f2',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
  },
  headetText: {
    color: '#000000',
    fontSize: 30,
    fontWeight: '600',
    fontFamily: 'Palatino',
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 7,
  },
  line: {
    backgroundColor: '#000000f',
    width: '40%',
    height: 5,
  },
  textcontainer: {
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    // borderRadius: 8,
    // borderColor: '#fffff',
    // borderTopEndRadius: 10,
    // borderBottomRightRadius: 10,
    // borderTopLeftRadius: 10,
    // borderBottomLeftRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    alignSelf: 'auto',
  },
  vertical: {
    width: 1.2,
    position: 'absolute',
    top: 0,
    right: 40,
    height: '40%',
    backgroundColor: '#000000',
  },
  horizontal: {
    width: 1.2,
    position: 'absolute',
    bottom: 0,
    left: 40,
    height: '40%',
    backgroundColor: '#000000',
  },
  touch: {
    backgroundColor: '#f2f2f2',
    width: '70%',
    height: '75%',
    top: 230,
    position: 'absolute',
    marginTop: 10,
    borderTopEndRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 0.3,
    borderColor: '#ffffff',
  },
});
