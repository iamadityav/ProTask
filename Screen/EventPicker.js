import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';
import DatePicker from 'react-native-date-picker';
import {useDispatch, useSelector} from 'react-redux';
import {AddEvent, RemoveEvent} from '../components/redux/Eventslice';
import {SafeAreaView} from 'react-native-safe-area-context';

const EventPicker = () => {
  const dispatch = useDispatch();
  const work = useSelector(state => state.event.data);

  const getColor = () => {
    const letters = '89ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  };

  const [eventTitle, setEventTitle] = React.useState('');
  const [eventLocation, setEventLocation] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [dateValue, setDateValue] = React.useState('');

  React.useEffect(() => {
    RNCalendarEvents.requestPermissions()
      .then(res => {
        console.log('Permission Response', res);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const createEvent = () => {
    const newDate = new Date(date);
    newDate.setHours(newDate.getHours() + 2);

    const newEventColor = getColor();

    RNCalendarEvents.saveEvent(eventTitle, {
      calendarId: '3',
      startDate: date.toISOString(),
      endDate: newDate.toISOString(),
      location: eventLocation,
    })
      .then(value => {
        console.log('Event Id--->', value);
        dispatch(
          AddEvent({
            eventTitle,
            eventLocation,
            dateValue: dateValue.toString(),
            color: newEventColor,
          }),
        );
      })
      .catch(error => {
        console.log(' Did Not work Threw an error --->', error);
      });

    setEventTitle('');
    setEventLocation('');
    setDateValue('');
  };

  const deletEvent = () => {
    dispatch(
      RemoveEvent({
        eventTitle,
        eventLocation,
        dateValue: dateValue.toString(),
      }),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.singleElement}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Event"
                placeholderTextColor="rgba(0,0,0, 0.3)"
                value={eventTitle}
                onChangeText={value => {
                  setEventTitle(value);
                }}
              />
            </View>
          </View>
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.singleElement}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Location"
                placeholderTextColor="rgba(0,0,0, 0.3)"
                value={eventLocation}
                onChangeText={value => {
                  setEventLocation(value);
                }}
                multiline={true}
                numberOfLines={2}
              />
            </View>
          </View>
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.singleElement}>
            <View style={styles.dateInputContainer}>
              <TextInput value={dateValue} style={styles.dateInput} />

              <TouchableOpacity
                style={styles.dateIcon}
                onPress={() => setOpen(true)}>
                <Text style={styles.Datetime}> Select Date/Time </Text>
              </TouchableOpacity>
              <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={date => {
                  var currentdate = new Date(date);
                  var datetime =
                    +currentdate.getDate() +
                    '/' +
                    (currentdate.getMonth() + 1) +
                    '/' +
                    currentdate.getFullYear() +
                    ' - ' +
                    currentdate.getHours() +
                    ':' +
                    currentdate.getMinutes();

                  setOpen(false);
                  setDate(date);
                  // setdateValue(datetime.toString());
                  setDateValue(datetime.toString());
                }}
                minimumDate={new Date()}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={createEvent}>
          <View style={styles.saveButton}>
            <Text style={styles.saveText}>Save</Text>
          </View>
        </TouchableOpacity>
        <ScrollView>
          {work.map((item, index) => (
            <View
              key={index}
              style={[
                {alignItems: 'center'},
                {backgroundColor: item.color},
                styles.cardcontainer,
              ]}>
              <TouchableOpacity onPress={deletEvent}>
                <View style={styles.cardcontainer}>
                  <Text style={styles.text}>• {item.eventTitle}</Text>
                  <Text style={styles.text}>• {item.eventLocation}</Text>
                  <Text style={styles.text}>• {item.dateValue}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginTop: 40,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },

  singleElement: {
    display: 'flex',
    flex: 4,
    flexDirection: 'column',
  },

  textInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginBottom: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    color: '#000000',
  },

  dateInputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 1,
    margin: 2,
  },
  Datetime: {
    color: 'rgba(0,0,0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  save: {
    color: '#000000',
  },
  dateIcon: {
    padding: 10,
  },
  cardcontainer: {
    alignItems: 'flex-start',
    marginBottom: 25,
    height: 80,
    width: 300,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 15,
    marginBottom: 1,
    margin: 2,
  },
  text: {
    fontSize: 20,
    color: '#555555',
    fontWeight: '600',
  },
  saveButton: {
    flex: 2,
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    marginBottom: 1,
    margin: 2,
    backgroundColor: '#ffffff',
    marginBottom: 20,
  },
  saveText: {
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default EventPicker;
