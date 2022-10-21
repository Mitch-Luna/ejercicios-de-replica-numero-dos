import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function Cabecera() {
  const [fontsLoaded] = useFonts({
    'IBM Plex Sans': require('../assets/Font/IBMPlexSans-BoldItalic.ttf'),
    'Oswald': require('../assets/Font/Oswald-VariableFont_wght.ttf'),
    'Ubuntu': require('../assets/Font/Ubuntu-Medium.ttf'),
})
if (!fontsLoaded) return null;
    return(
    <View style={styles.cabecera}>
      <AntDesign style={styles.textito} name="arrowleft" size={34} color="black" />
      <Text style={styles.textito}>Apply Job</Text>
      </View>

    );
}

const styles = StyleSheet.create({
    cabecera:{
      alignItems:'center',
      flexDirection:'row',
      marginTop:62,
      display:'flex',
      width:'100%',
      height:44,
  
    },
    textito:{
      fontFamily: 'Ubuntu',
      marginTop:-12,
      marginLeft:23,
      fontSize:26,
    },
    
  });