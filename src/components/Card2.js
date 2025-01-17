import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

import Sound from 'react-native-sound';

import Colors from '../constants/Colors';

Sound.setCategory('Ambient', true);   

/**
 * Tarjeta utilizada para mostrar la información de las pantallas: Información de Covid, Exhibiciones, Preguntas Frecuentes, Busqueda    
 * @param {style} color - Cambia el color del fondo del titulo de nuestra tarjeta.
 * @param {string} textBtn - Cadena de texto que almacena el nombre que tendra el boton de la tarjeta.
 * @param {prop} navigation - Contiene información básica de navegación
 * @property {function} exhibition - Método de acceso indirecto para acceder a parametros.
 * @property {function} imageURL - Método de acceso
 * @see https://reactnative.dev/docs/intro-react
 * @see https://reactnative.dev/docs/text
 * @see https://reactnavigation.org/docs/navigation-prop/  
 * @see https://reactnative.dev/docs/safeareaview
 * @return {SafeAreaView} Retorna un layout cuyos limites se encuentran en un area segura.
 }}
 */

const Card = ({ exhibition, color, textBtn, navigation }) => {
  const { sound, images, sponsorLogo, name, _id } = exhibition;
  const [imageURL] = images;
  const [logoURL] = sponsorLogo;

  const exhibitSound = new Sound(sound, '', error =>  {
    if(error) {
      console.log('No se pudo cargar el sonido', error);
      return;
    }
  });

  const exhibitButton = () => { 
    exhibitSound.setVolume(0.8).play();
    setTimeout(() => {
      exhibitSound.stop();
    }, 10000);
  };
  
    return (
      <SafeAreaView style={styles.card}>
        <Text style={styles.titulo}>{name}</Text>
        <View
          style={{
            borderRadius: 35,
            borderWidth: 3,
            borderColor: color == Colors.magenta ? '#e2001a' : '#e2001a',
          }}>
          <Image
            source={{ uri: imageURL }}
            style={(styles.img, [styles.img, { borderColor: color }])}
          />
        </View>
        <View style={styles.viewSponsor}>
          {logoURL && <Image source={{ uri: logoURL }} style={(styles.imgSponsor)} />}
        </View>
        <View style={styles.viewCard}>
          <View style={[styles.button, { backgroundColor: '#f1bc00' }]}>
            <TouchableOpacity
              style={styles.opacity}
              onPressIn={exhibitButton}
              onPress={() => navigation.navigate('information', { _id })}>
              <Text style={styles.buttonText}>{textBtn}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  export default Card;

  /**
   * @ignore
   */
  const styles = StyleSheet.create({
    card: {
      borderRadius: 15,
      marginBottom: 80,
      marginTop: 20,
      width: '90%',
      height: 230,
    },
    viewCard: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    tituloView: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
      opacity: 0.5,
    },
    titulo: {
      fontFamily: 'BubblegumSans-Regular',
      fontSize: 25,
      color: '#f29400',
      //fontWeight: 'bold', 
      textAlign: "center",
      marginBottom: 10,

    },

    button: {
      paddingVertical: 7,
      borderRadius: 45,
      width: '30%',
      height: '48%',
      marginTop: -20,
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#009032'

    },
    buttonText: {
      fontFamily: 'BubblegumSans-Regular',
      textAlign: 'center',
      color: '#fff',
      //fontWeight: 'bold',
      fontSize: 19,
      opacity: 1,
    },
    img: {
      width: '100%',
      height: '100%',
      borderRadius: 30,
      borderWidth: 7,
    },
    viewSponsor: {
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
    },
    imgSponsor: {
      width: 80,
      height: 40,
      backgroundColor: '#fff',
      marginRight: 20,
      marginTop: -60,
      borderRadius: 10,
      borderColor: '#000',
      borderWidth: 0.15,
    },
  });
