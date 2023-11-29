import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Input from './components/Input';
import { useState } from 'react';

export default function Schedule({ setTab, setApList }) {
  const [doctorType, setDoctorType] = useState('cg');
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textTransform: 'uppercase', color: 'purple'}}>Agendar consulta</Text>
      <StatusBar style="auto" />
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Input value={doctorType} setValue={setDoctorType} title="Área médica" />
        <Input value={date} setValue={setDate} title="Data Agendamento" dateInput />
      </View>
      <TouchableOpacity 
        style={{ width: '40%', backgroundColor: 'purple', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 16}}
        onPress={() => {
          setApList(prev => [...prev, { doctorType, date }]);
          setTab('co');
        }}
      >
        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textTransform: 'uppercase'}}>Agendar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
