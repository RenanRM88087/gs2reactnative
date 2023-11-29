import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';

const types = [
  {
    value: 'cg',
    label: 'Clínica Geral',
  },
  {
    value: 'car',
    label: 'Cardiologia',
  },
  {
    value: 'end',
    label: 'Endocrinologia',
  },
  {
    value: 'ped',
    label: 'Pediatria',
  },
  {
    value: 'uro',
    label: 'Urologia',
  },
];

const Input = ({ title, dateInput = false, value, setValue }) => {
  const handleDate = (event, date) => {
    setValue(date);
  }

  return (
    <View style={{ width: '80%', marginBottom: 20}}>
      <Text style={{ marginBottom: 5}}>{title}</Text>
      <View style={{ width: '100%', borderColor: 'lightgray', borderRadius: 8, justifyContent: 'center', alignItems: 'flex-start'}}>
        {dateInput ? (
          <DateTimePicker mode="datetime" value={value} style={{ alignSelf: 'center'}} onChange={handleDate} />
        ) : (
          <Picker
            style={{ width: '100%'}}
            selectedValue={value}
            onValueChange={(itemValue, itemIndex) =>
              setValue(itemValue)
            }>
              {types.map(t => (
                <Picker.Item key={t.value} label={t.label} value={t.value} />
              ))}
          </Picker>
        )}
      </View>
    </View>
  )
};

export default Input;