import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import InputText from '../components/InputText';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import {RemoveTask} from '../components/redux/Addslice';
import Position from '../components/Position';

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
    const minValue = 180;
    const range = 256 - minValue;

    const randomValue = Math.floor(Math.random() * range) + minValue;

    const grayShade = randomValue.toString(16).padStart(2, '0');

    const color = `#${grayShade}${grayShade}${grayShade}`;

    return color;
  };

  const onPressHandler = () => {
    dispatch(RemoveTask(list));
    setList('');
  };
  const getRandom = () => {
    const maxX = 100;
    const maxY = 100;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    return {left: randomX, top: randomY};
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.headetText}>Today</Text>
      </View>
      <InputText />
      <View style={styles.vertical} />
      <View style={styles.horizontal} />
      <View style={styles.touch}>
        <FlatList
          data={taskData}
          keyExtractor={item => item.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={onPressHandler}>
                <View activeOpacity={getColor} style={styles.textcontainer}>
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
            );
          }}
        />
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  todotext: {
    fontSize: 20,
    fontFamily: 'Noteworthy',
    fontWeight: '500',
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
    backgroundColor: '#000000',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
  },
  headetText: {
    color: '#ff4534',
    fontSize: 30,
    fontWeight: '600',
    fontFamily: 'Palatino',
    textShadowColor: 'rgba(255, 255, 255, 0.4)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 7,
  },
  line: {
    backgroundColor: '#d03737f',
    width: '40%',
    height: 5,
  },
  textcontainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    borderColor: '#fffff',
  },
  vertical: {
    width: 1.2,
    position: 'absolute',
    top: 0,
    right: 40,
    height: '40%',
    backgroundColor: '#ffa11a',
  },
  horizontal: {
    width: 1.2,
    position: 'absolute',
    bottom: 0,
    left: 40,
    height: '42%',
    backgroundColor: '#ffa11a',
  },
  touch: {
    backgroundColor: '#000000',
    width: '70%',
    height: '50%',
    top: 230,
    position: 'absolute',
  },
});
