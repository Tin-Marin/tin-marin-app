import { noConflict } from 'lodash';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  Linking
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//new image imports for the new menu design
import playground from '../assets/icons/museo_arte.png';
//import playground from '../assets/icons/museo.png';
import newnormality from '../assets/icons/newnormality.png';
import suggestion from '../assets/icons/suggestion.png';
import faq from '../assets/icons/faq.png';
import solidarity from '../assets/icons/solidarity.png';
import calendar from '../assets/icons/calendar.png';
import man from '../assets/icons/man.png';

//new images for the menu icons
import covidicon from '../assets/icons/covidicon.png';
import covidicon2 from '../assets/icons/covid_icon.png';
import conocenosicon from '../assets/icons/conversacion.png';
import sitiosicon from '../assets/icons/sitios_tin.png';
//import covidicon2 from '../assets/icons/covidicon2.png';
import donationIco from '../assets/donarpng.png';
import eventsIco from '../assets/icons/voluntariado.png';
import celebIco from '../assets/icons/celebraciones.png';

import {
  selectButton
} from '../helpers/audio';
import ConocenosMas from '../assets/ConocenosMas.jpg';

/**
 * Pantalla Principal que contiene una lista de tarjetas con los accesos directos de los diferentes
 * módulos que posee la aplicación.
 * @param {prop} navigation - Contiene información básica de navegación
 * @see https://reactnavigation.org/docs/navigation-prop/
 * @return {ScrollView} Regresa una layout con scroll vertical, y muestra la maquetación de la pantalla
 * @return {TouchableOpacity} Regresa un layout con el fin de dar la sensasion que se ha dado "tap" en la pantalla
 * @property {TouchableOpacity} onPressIn Se decidio poner la musica ahi ya que no acepta el onPress no ejecuta las dos funciones.
 * @property {TouchableOpacity} onPress propiedad la cual ejecuta la funcion de navegar con navigation. 
 * @property {ImageBackground} imageStyle propiedad para cambiar los estilos especificos del background
 * 
 *  */

const HomeScreen = ({ navigation }) => {
  return (

    <ScrollView style={styles.scrollView}>
      <View style={styles.view}>

        <TouchableOpacity
          onPressIn={selectButton}
          onPress={() => {
            navigation.navigate('exhibits');
          }}
          style={styles.cardContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
            source={playground}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Exhibiciones</Text>
            <Text style={styles.text2}>
              Ven a conocer todas las exhibiciones disponibles
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={selectButton}
          onPress={() => {
            navigation.navigate('covid');
          }}
          style={styles.cardContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
            source={covidicon2}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textYellow}>Recomendaciones Covid-19</Text>
            <Text style={styles.text2}>
              Toma en cuenta estas recomendaciones para venir al museo
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPressIn={selectButton}
          onPress={() => {
            navigation.navigate('knowMore');
          }}
          style={styles.cardContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
            source={conocenosicon}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textMorado}>Conocenos Más</Text>
            <Text style={styles.text2}>
              Aqui puedes encontrar informacion de contacto, estamos a la
              orden!
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPressIn={selectButton}
          onPress={() => {
            navigation.navigate('comments');
          }}
          style={styles.cardContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
            source={suggestion}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Sugerencias</Text>
            <Text style={styles.text2}>
              Para seguir mejorando, puedes dejarnos cualquier duda o
              inquietud!
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPressIn={selectButton}
          onPress={() => {
            navigation.navigate('FAQs');
          }}
          style={styles.cardContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
            source={faq}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textYellow}>Preguntas Frecuentes</Text>
            <Text style={styles.text2}>
              Por si tienes alguna consulta para resolver de forma rápida!
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPressIn={selectButton}
          onPress={() => {
            navigation.navigate('WebLinks');
          }}
          style={{ ...styles.cardContainer }}>
          <Image
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
            source={sitiosicon}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textMorado}>Sitios de Interés</Text>
            <Text style={styles.text2}>
              Si deseas profundizar un poco más en otros temas relevantes
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPressIn={selectButton}
          onPress={() => {
            navigation.navigate('volunteering');
          }}
          style={{ ...styles.cardContainer }}>
          <Image
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
            source={eventsIco}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textMorado}>Voluntariado</Text>
            <Text style={styles.text2}>
              Ayúdanos a dibujar sonrisas y enriquecer los conocimientos de la niñez y juventud salvadoreña.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPressIn={selectButton}
          onPress={() => { Linking.openURL('https://tinmarin.org/pinatas/') }}
          style={{ ...styles.cardContainer }}>
          <Image
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
            source={celebIco}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textMorado}>Celebraciones</Text>
            <MaterialCommunityIcons name="open-in-new" style={styles.textMorado}/>
            <Text style={styles.text2}>
              ¡Pásala divertido con tu familia y amigos!
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPressIn={selectButton}
          onPress={() => { Linking.openURL('https://tinmarin.org/donacion/') }}
          style={{ ...styles.donationContainer }}>
          <Image
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
            source={donationIco}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textMorado}>Dona aquí </Text>
            <MaterialCommunityIcons name="open-in-new" style={styles.textMorado}/>
            <Text style={styles.text2}>
              Tu ayuda es necesaria para seguir abiertos a las familias salvadoreñas
            </Text>
          </View>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

/**
 * @ignore
 */
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#FFF4BD',
  },
  view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  cardContainer: {
    margin: 2,
    padding: 10,
    width: Dimensions.get('window').width / 2 - 6,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,

    shadowColor: '#470000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  donationContainer: {
    margin: 2,
    padding: 10,
    width: Dimensions.get('window').width / 1 - 6,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
    marginBottom: 3,

    shadowColor: '#470000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  textContainer: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  text: {
    fontFamily: 'Boogaloo-Regular',
    color: '#E50E23',
    fontSize: 24,
    textAlign: "center"
  },
  textYellow: {
    fontFamily: 'Boogaloo-Regular',
    color: '#FABA00',
    fontSize: 24,
    textAlign: "center"
  },
  textMorado: {
    fontFamily: 'Boogaloo-Regular',
    color: '#93117D',
    fontSize: 24,
    textAlign: "center"
  },
  text2: {
    fontFamily: 'Boogaloo-Regular',
    color: '#393838',
    fontSize: 15,
    textAlign: "center"
  },
});

export default HomeScreen;
