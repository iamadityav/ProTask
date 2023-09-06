import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {React, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddTask} from './redux/Addslice';

const InputText = () => {
  const dispatch = useDispatch();
  const task = useSelector(state => state.add);

  const [list, setList] = useState('');

  const onChangeTextHandler = txt => {
    setList(txt);
    console.log('inputtext', list);
  };


  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <TextInput
          placeholder="Todo..."
          value={list}
          placeholderTextColor="rgba(0,0,0, 0.3)"
          blurOnSubmit
          style={style.input}
          onChangeText={onChangeTextHandler}
        />
      </View>
      {/* <TouchableOpacity style={style.touch} onPress={onPressHandler}>
        <View style={style.button}>
          <Text style={style.addme}>Add me</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

export default InputText;

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    width: 300,
    height: 40,
    borderTopEndRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // inputContainer: {
  //   justifyContent: 'flex-start',
  //   alignItems: 'center',
  //   top: 50,
  //   position: 'absolute',
  //   borderTopEndRadius: 10,
  //   borderBottomRightRadius: 10,
  //   borderTopLeftRadius: 10,
  //   borderBottomLeftRadius: 10,
  // },
  // input: {
  //   paddingTop: 2,
  //   color: '#000000',
  //   paddingHorizontal: 10,
  //   borderRadius: 5,
  //   fontSize: 20,
  //   fontWeight: '400',
  //   top: 4,
  // },
  // touch: {
  //   backgroundColor: '#ffffff',
  //   justifyContent: 'flex-start',
  //   alignItems: 'center',
  //   width: '20%',
  //   height: 30,
  //   top: 5,
  // },
  // addme: {
  //   color: '#000000',
  //   fontSize: 18,
  //   top: 3,
  // },
});
