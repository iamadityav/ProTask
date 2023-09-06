import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import InputText from '../components/InputText';
import {useDispatch, useSelector} from 'react-redux';
import {RemoveTask} from '../components/redux/Addslice';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AddTask} from '../components/redux/Addslice';

const MainScreen = () => {
  const dispatch = useDispatch();
  const taskData = useSelector(state => state.add.data);
  const [list, setList] = useState([]);

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
  const onPressaddMeHandler = item => {
    if (item !== '') {
      dispatch(AddTask(item));
      setList(item);
    }
  };

  const onPressHandler = item => {
    dispatch(RemoveTask(item));
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
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headetText}>Today</Text>
      </View>
      {/* INPUT TEXT */}
      <View>
        <InputText />
      </View>
      {/* ADDMEBUTTON */}
      <TouchableOpacity onPress={onPressaddMeHandler}>
        <View style={styles.addmeContainer}>
          <Text style={styles.addme}>Add me</Text>
        </View>
      </TouchableOpacity>
      {/* LINES */}
      <View style={styles.vertical} />
      <View style={styles.horizontal} />
      {/* TASK BOX */}
      <View style={styles.touch}>
        <ScrollView>
          {taskData.map((item, index) => (
            <TouchableOpacity key={index} onPress={onPressHandler}>
              <View style={styles.textcontainer}>
                <Text
                  style={[
                    styles.todotext,
                    {left: getRandom().left, right: getRandom().top},
                    {color: getColor(item)},
                  ]}>
                  • {item}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
const {height} = Dimensions.get('window').height;
const {width} = Dimensions.get('window').width;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    height: height,
    width: width,
  },
  // todotext: {
  //   fontSize: 20,
  //   fontFamily: 'Noteworthy',
  //   fontWeight: '500',
  // },
  // button: {
  //   backgroundColor: 'black',
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   borderRadius: 8,
  // },
  // text: {
  //   color: '#00C9C8',
  //   fontSize: 18,
  // },
  header: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
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
  // line: {
  //   backgroundColor: '#000000f',
  //   width: '40%',
  //   height: 5,
  // },
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
    width: '75%',
    height: '80%',
    borderTopEndRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 0.5,
    borderColor: '#ffffff',
    marginTop: 25,
    alignSelf: 'center',
  },
  // todoContainer: {
  //   height: '72%',
  //   width: '75%',
  //   marginTop: 20,
  //   borderTopEndRadius: 10,
  //   borderBottomRightRadius: 10,
  //   borderTopLeftRadius: 10,
  //   borderBottomLeftRadius: 10,
  //   borderColor: '#ffffff',
  // },
  addmeContainer: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    width: '20%',
    height: 30,
    alignSelf: 'center',
    marginTop: 10,
    borderTopEndRadius: 2,
    borderBottomRightRadius: 2,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  addme: {
    color: '#000000',
    fontSize: 18,
    top: 3,
  },
});

const renderItem = ({item, index}) => (
  <TouchableOpacity onPress={() => onPressHandler(item, index)}>
    <View activeOpacity={getColor()} style={styles.textcontainer}>
      <Text
        style={[
          styles.todotext,
          {left: getRandom().left, right: getRandom().top},
          {color: getColor({item})},
        ]}>
        • {item}
      </Text>
    </View>
  </TouchableOpacity>
);
