import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

import {exhibitButton} from '../helpers/audio'

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

const Card = ({ exhibition, color, textBtn, navigation}) => {
  const {images, name, _id } = exhibition;
  const [imageURL] = images;
  
  return (
    <SafeAreaView style={styles.card}>
      <Text style={styles.titulo}>{name}</Text>
      <Image source={{uri: imageURL}} style={styles.img, [styles.img, {borderColor:color}]} />
      <View style={styles.viewCard}>
        <View style={[styles.button, {backgroundColor: "#f1bc00",}]}>
          <TouchableOpacity
            style={styles.opacity}
            onPressIn={exhibitButton}
            onPress={() => navigation.navigate('information', {_id})}>
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
    marginBottom: 40,
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
    fontFamily:'BubblegumSans-Regular',
    fontSize: 25, 
    color: '#f29f05', 
    //fontWeight: 'bold', 
    textAlign: "center",
    marginBottom: 10,
    
  },

  button: {
    paddingVertical: 7,
    borderRadius: 45,
    width: '25%',
    height: '50%',
    marginTop: -35,
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#e66a2b'
    
  },    
  buttonText: {
    fontFamily:'BubblegumSans-Regular',
    textAlign: 'center',
    color: '#fff',
    //fontWeight: 'bold',
    fontSize: 17,
    opacity: 1,
  },
  img: {
    width: '100%',
    height: '90%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderWidth: 6,
  },
});
