import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



export default function CajitaDos() {
    const [fontsLoaded] = useFonts({
        'IBM Plex Sans': require('../assets/Font/IBMPlexSans-BoldItalic.ttf'),
        'Oswald': require('../assets/Font/Oswald-VariableFont_wght.ttf'),
        'Ubuntu': require('../assets/Font/Ubuntu-Medium.ttf'),
    })
    if (!fontsLoaded) return null;
    return (
        <View style={styles.cajita}>
            <View style={styles.cabecera}>
                <View style={styles.icono}>
                <Entypo name="text-document-inverted" size={34} color=" rgb(26, 163, 255)" />
                </View>
                <View style={styles.contenedorletras}>
                    <Text style={{ fontFamily: 'Ubuntu', fontSize: 19 }}> Summary</Text>
                </View>
                <View style={styles.figurita}>
                    <Octicons style={styles.lapicito} name="pencil" size={25} color="rgb(26, 163, 255)" />
                </View>
            </View>
            <View style={styles.cajitaInformacion}>
                <View style={styles.CajitaDos}>
                <Text style={{ fontSize:13, color:'rgb(102, 90, 80)'}}> Hello, I,am Adrew. I am a designer with more
                than 5 years experience.My main fieldsb are UI/
                UX Desing, illustration and Graphic Desing.You
                can check the portfolio on my profile
                </Text>
                </View>
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    cajita: {
        marginTop: 12,
        alignSelf: 'center',
        width: '90%',
        height: 230,
        borderRadius: 33,
        borderColor: 'rgb(223, 223, 223)',
        borderWidth: 1,
    },
    cabecera: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 12,
        alignSelf: 'center',
        width: '90%',
        height: 64,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    icono: {
        marginTop:-22,
        alignItems: 'center',
        alignSelf: 'center',
        width: 50,
        height: 40,
        
    },
    contenedorletras: {
        alignSelf: 'center',
        width: '75%',
        height: 53,
        marginLeft: 6,
        flexDirection: 'column',
    },
    textito:{
        flexDirection:'row',
        width:'100%',
        height:34,
    },
    check:{
        marginHorizontal:12,
    },
    lapicito: {
        alignSelf: 'center',
        marginLeft: 'auto',
    },
    figurita: {
        alignSelf: 'center',
        marginLeft: 'auto',
    },
    perfil: {
        marginTop: 12,
        width: 23,
        height: 32,
    },
    cajitaAbajo: {
        marginTop: 12,
        alignItems: 'center',
        alignSelf: 'center',
        width: '65%',
        height: 54,
    },
    lugar: {
        fontSize: 18,
        color: 'rgb(113, 107, 107)',
        fontFamily: 'Oswald'
    },
    precios: {
        fontSize: 18,
        fontFamily: 'Ubuntu',
        color: ' rgb(26, 163, 255)'
    },
    cajitaInformacion: {
        marginHorizontal:12,
        marginTop: 20,
        width: '80%',
        height: 110,
        flexDirection: 'row',
    },
    CajitaUno: {
        justifyContent:'space-between',
        flexDirection:'column',
        width: 54,
        height: 110,
    },
    CajitaDos: {
        marginHorizontal:12,
        justifyContent:'space-between',
        flexDirection:'column',
        width: '110%',
        height: 110,
    },
    textos:{
        fontSize:15,
    }
})