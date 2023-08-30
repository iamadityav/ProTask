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

  const [list, setList] = useState(task.data);

  const onChangeTextHandler = txt => {
    setList(txt);
    console.log('inputtext', list);
  };

  const onPressHandler = item => {
    if (list !== '') {
      dispatch(AddTask(list));
      setList('');
    }
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
      <TouchableOpacity style={style.touch} onPress={onPressHandler}>
        <View style={style.button}>
          <Text style={style.addme}>Add me</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputText;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
    width: '75%',
    height: '5%',
    top: 50,
    position: 'absolute',
    borderTopEndRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  input: {
    paddingTop: 2,
    color: '#000000',
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: '400',
    top: 4,
  },
  touch: {
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 150,
    width: '20%',
    height: 30,
    top: 5,
    position: 'absolute',
    borderTopEndRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  addme: {
    color: '#000000',
    fontSize: 18,
    top: 3,
  },
});
