import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



export default function CajitaUno() {
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
                <FontAwesome5 name="user-alt" size={34} color="rgb(26, 163, 255)" />
                </View>
                <View style={styles.contenedorletras}>
                    <Text style={{ fontFamily: 'Ubuntu', fontSize: 19 }}> Contact Information</Text>
                </View>
                <View style={styles.figurita}>
                    <Octicons style={styles.lapicito} name="pencil" size={25} color="rgb(26, 163, 255)" />
                </View>
            </View>

            <View style={styles.cajitaInformacion}>
                <View style={styles.CajitaUno}>
                <Feather name="map-pin" size={28} color="black" />
                <Ionicons name="ios-call-outline" size={28} color="black" />
                <Feather name="mail" size={28} color="black" />
                </View>
                <View style={styles.CajitaDos}>
                <Text style={styles.textos}>New Your, United States</Text>
                <View style={styles.textito}>
                <Text style={styles.textos}>+1 111 467 378 399</Text>
                <MaterialCommunityIcons style={styles.check} name="check-decagram" size={24} color="rgb(26, 163, 255)" />
                </View>
                <Text style={styles.textos}>adrew_ainsley@yourdomain.com</Text>
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
        justifyContent:'space-between',
        flexDirection:'column',
        width: '86%',
        height: 110,
    },
    textos:{
        fontSize:14,
    }
})