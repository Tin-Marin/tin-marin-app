// React Native Custom Star Rating Bar
// https://aboutreact.com/react-native-custom-star-rating-bar/

// import React in our code
import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Image, TouchableOpacity, Text} from 'react-native';
/*import AsyncStorage from '@react-native-async-storage/async-storage';*/
/**
 * Pantalla que muestra los detalles de una Exhibición.
 * @param {prop} route - Recibe parametros importantes para mostrar en pantalla
 * @param {prop} navigation - Contiene información básica de navegación
 * @param {string} _id - ID asociado a una Exhibición.
 * @property {Object} exhibition - Objeto que contiene la estructura de una Exhibición.
 * @property {function} setExhibition - Método de acceso indirecto para modificar la propieadad exhibition.
 * @property {boolean} visible - Variable auxiliar para controlar la visibilidad de un componente <Modal>.
 * @property {function} setVisible - Método de acceso indirecto para modificar la propieadad visible.
 * @property {function} useEffect - Hook de React que permite realizar tareas asíncronas a la vista.
 * @property {function} useState - Hook de React que permite crear una variable de estado con su método accesor.
 * @property {Promise} getExhibitionById - {@link getExhibitionById} | Promesa que devuelve la información dependiendo la respuesta del servidor.
 * @property {function} size - Función de la librería lodash | Devuelve el tamaño de una colección.
 * @property {function} map - Función de la librería lodash | Crea un arreglo de valores a partir de cada elemento de una colección.
 * @listens {onPress} | El método showModal se dispara cuando ocurre este evento en un componente <ModalButton>.
 * @see https://lodash.com/docs/4.17.15#size
 * @see https://reactjs.org/docs/hooks-state.html
 * @see https://reactnavigation.org/docs/route-prop/
 * @see https://lodash.com/docs/4.17.15#map
 * @return {SafeAreaView} Retorna un componente que contiene maquetada la vista
 */


const StarRatings = ({id, exhibition}) => {
  console.log(exhibition)
  // To set the default Star Selected
  const [defaultRating, setDefaultRating] = useState(2);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  // Filled Star. You can also give the path from local
  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  // Empty Star. You can also give the path from local
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

  const CustomRatingBar = () => {
    
    return (
      
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImageFilled }
                    : { uri: starImageCorner }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.textStyleSmall}>Por favor deja tu reseña de la exhibición</Text>
        {/*View to hold our Stars*/}
        <CustomRatingBar />
        
      </View>
    </SafeAreaView>
  );
};

/*
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', defaultRating)
  } catch (e) {
    
  }
}
*/

export default StarRatings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 5,
    justifyContent: 'center',
    textAlign: 'center',
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
//    fontWeight: 'bold',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    marginTop: 15,
  },
  textStyleSmall: {
    fontFamily: 'Boogaloo-Regular',
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
    marginTop: 10,
  },
  buttonStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#e3001b',
  },
  buttonTextStyle: {
    fontFamily: 'Boogaloo-Regular',
    color: '#fff',
    textAlign: 'center',
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  starImageStyle: {
    width: 45,
    height: 45,
    resizeMode: 'cover',
  },
});
