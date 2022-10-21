import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';



export default function CajitaTres() {
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
                    <Foundation name="graph-pie" size={30} color=" rgb(26, 163, 255)" />
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
                    <Text style={{fontSize:14, fontFamily: 'Ubuntu',marginHorizontal:5}}>$100,000 - $25,000/month</Text>
                    <Text style={{fontSize:10, color:'rgb(102, 90, 80)'}}>(only you see this)</Text>
                </View>
            </View>
            <View style={styles.subcajita}>
                <TouchableOpacity style={styles.boton}>
                    <Text style={styles.nombreBotones}>Submit</Text>
                </TouchableOpacity>

            </View>
        </View>



    );
}

const styles = StyleSheet.create({
    cajita: {
        flex:1,
        marginTop: 12,
        alignSelf: 'center',
        width: '90%',
        height: 217,
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
        marginTop: -22,
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
    textito: {
        flexDirection: 'row',
        width: '100%',
        height: 34,
    },
    check: {
        marginHorizontal: 12,
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
        marginHorizontal: 12,
        marginTop: 20,
        width: '80%',
        height: 110,
        flexDirection: 'row',
    },
    CajitaUno: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        width: 54,
        height: 110,
    },
    CajitaDos: {
        marginHorizontal: 12,
        flexDirection: 'row',
        width: '110%',
        height: 40,
    },
    textos: {
        fontSize: 15,
    },
    subcajita:{
        alignItems:'center',
        alignSelf:'center',
        marginHorizontal: 12,
        marginTop: -70,
        width: '120%',
        height: 110,
        borderColor: 'rgb(223, 223, 223)',
        borderWidth: 1,
    },
    boton:{
        marginTop:24,
        backgroundColor:'rgb(26, 163, 255)',
        width:'85%',
        height:54,
        borderRadius:20,

      },
      nombreBotones:{
        fontFamily:'Ubuntu',
        textAlign:'center',
        color:'white',
        fontSize:26,
      },
})