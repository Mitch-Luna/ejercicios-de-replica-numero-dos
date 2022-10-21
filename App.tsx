import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import  Cabecera  from './Componentes/Cabecera';
import Perfil from './Componentes/perfil';
import CajitaUno from './Componentes/cajitaUno';
import CajitaDos from './Componentes/cajitaDos';
import CajitaTres from './Componentes/cajitaTres';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
    <StatusBar backgroundColor={"white"} />
    <ScrollView>
    <View style={styles.container}>
      <Cabecera
      />
      <Perfil/>
      <CajitaUno/>
      <CajitaDos/>
      <CajitaTres/>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imagen:{
    width:23,
    height:45,
  }

});

