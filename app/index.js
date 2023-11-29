import React, { useState } from 'react';
import Schedule from './schedule';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Appointments from './appointments';

export default function Index() {
  const [tab, setTab] = useState('ag');
  const [apList, setApList] = useState([]);

  return (
    <View style={{ flex: 1}}>
      {tab === 'ag' ? <Schedule setTab={setTab} setApList={setApList} /> : <Appointments apList={apList} />}
      <View style={{ height: 90, width: '100%', backgroundColor: 'lightgray', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => setTab('ag')}>
          <Text style={{ color: tab === 'ag' ? 'purple' : '#282828', fontWeight: 'bold', textTransform: 'uppercase'}}>Agendar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab('co')}>
          <Text style={{ color: tab === 'co' ? 'purple' : '#282828', fontWeight: 'bold', textTransform: 'uppercase'}}>Consultas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
