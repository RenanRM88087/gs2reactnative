import React from 'react';
import { Text, View } from 'react-native';

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

const Appointments = ({apList}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 60}}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textTransform: 'uppercase', color: 'purple', marginBottom: 50}}>Consultas agendadas</Text>
      {apList.map((a, index) => (
        <>
        <View style={{ marginLeft: 20, alignSelf: 'flex-start', marginVertical: 10}}>
          <Text style={{ fontSize: 20}}>{types.find(t => t.value === a.doctorType).label}</Text>
          <Text style={{ fontSize: 20}}>{`${a.date.toDateString()} ${a.date.getHours()}:${a.date.getMinutes()}`}</Text>
        </View>
        {index < apList.length - 1 && (
          <View style={{ width: '90%', height: 1, backgroundColor: '#282828'}} />
        )}
        </>
      ))}
    </View>
  )
};

export default Appointments;