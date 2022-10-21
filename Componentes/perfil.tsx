import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function Perfil() {
  const [fontsLoaded] = useFonts({
    'IBM Plex Sans': require('../assets/Font/IBMPlexSans-BoldItalic.ttf'),
    'Oswald': require('../assets/Font/Oswald-VariableFont_wght.ttf'),
    'Ubuntu': require('../assets/Font/Ubuntu-Medium.ttf'),
})
if (!fontsLoaded) return null;
    return(
    <View style={styles.container}>
    <Image
    style={styles.perfil}
    source={{uri:'https://pandrama.net/news/wp-content/uploads/2020/09/1600571586_19_5-korean-actors-who-look-way-younger-than-their-age.jpg'}}
    />
    <View style={styles.contenedorTexto}>
    <Text style={styles.textito}> Andrew Ainsley</Text>
    <Text style={styles.textitodos}> UI/UX Designer at Paypal inc.</Text>
    </View>
    <Octicons style={styles.lapicito} name="pencil" size={25} color="rgb(26, 163, 255)" />

    </View>

    );
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        marginTop:18,
        alignSelf:'center',
        width:'90%',
        height:103,
        borderBottomWidth:1,
        borderColor:'rgb(223, 223, 223)',
    },
    perfil:{
      alignItems:'center',
      width:84,
      height:85,
      borderRadius:74,
  
    },
    contenedorTexto:{
      marginHorizontal:2,
      alignSelf:'center',
      width:'65%',
      height:54,
    },
    textito:{
        fontFamily:'Oswald',
        marginTop:-15,
        fontSize:27,
      },
    textitodos:{
        color:'rgb(102, 90, 80)',
        fontSize:14,
      },
      lapicito:{
        alignSelf:'center',
        marginLeft:'auto',
      }

  });