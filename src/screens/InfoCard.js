import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { IconButton, Text, Title } from 'react-native-paper';
import { getExhibitionById } from '../api/exhibitions';
import ModalBody from '../components/ModalBody';
import { ScrollView } from 'react-native-gesture-handler';
import { map, size } from 'lodash';
import Colors from '../constants/Colors';
import { SliderBox } from 'react-native-image-slider-box';
import curiosidades1 from '../assets/icons/curiosidades1.png';
import exam from '../assets/icons/exam.png';

import {
  wowButton,
  quizButton
} from '../helpers/audio';

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

const InfoCard = ({ route, navigation }) => {
  const { _id } = route.params;
  const [visible, setVisible] = useState(false);
  const [exhibition, setExhibition] = useState(null);
  const [questions, setQuestions] = useState(null);

  const showModal = () => {
    setVisible(!visible);
  }

  useEffect(() => {
    getExhibitionById(_id).then((response) => {
      setQuestions(response.name);
      setExhibition(response);
    });
  }, []);

  if (!exhibition) return null;

  const imageURL = exhibition.images;
  const [logoURL] = exhibition.sponsorLogo;


  return (
    <SafeAreaView >
      <ScrollView showsVerticalScrollIndicator={false}>
        <InfoTitle exhibition={exhibition} />
        <InfoImage path={imageURL} />
        {logoURL && <InfoSponsor url={logoURL} />}
        <Text style={styles.overview}>{exhibition.description}</Text>
        <Text style={styles.overview2}>Presiona el botón de la izquierda si quieres leer un dato curioso y presiona el de la derecha si quieres contestar preguntas:</Text>
        <View style={styles.btnCuriosidades}>
          <InfoModal setVisible={setVisible} />
          <TouchableOpacity
            onPressIn={quizButton}
            onPress={() => {
              navigation.navigate('quiz', questions);
            }}
          >
            <Image style={styles.imgQuiz} resizeMode="contain" source={exam} />
          </TouchableOpacity>
        </View>
        <InfoFooter exhibition={exhibition} />
      </ScrollView>

      <ModalBody
        visible={visible}
        showModal={showModal}
        curiousInfo={exhibition.curiousInfo}
      />
    </SafeAreaView >
  );
};

export default InfoCard;

/**
 *@ignore
 */
const InfoImage = ({ path }) => {
  const [imgActive, setimgActive] = useState(0);

  return (
    /* <View style={styles.viewPoster}>
      {path.map((e, index) => (
        <Image key={e} style={styles.poster} source={{ uri: e }} />
      ))}
    </View>*/
    <SliderBox
      images={path}
      sliderBoxHeight={400}
      onCurrentImagePressed={(index) => console.warn(`image ${index} pressed`)}
      currentImageEmitter={(index) => console.warn(`current pos is: ${index}`)}
      dotColor="#FFEE58"
      inactiveDotColor="#90A4AE"
      paginationBoxVerticalPadding={20}
      circleLoop
      resizeMethod={'resize'}
      resizeMode={'cover'}
      ImageComponentStyle={{ borderRadius: 15, width: '90%', marginTop: 5 }}
      imageLoadingColor="#2196F3"
    />
  );
};

/**
 *@ignore
 */
const InfoModal = ({ setVisible }) => {
  return (
    <View >
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Image style={styles.info}
          resizeMode="contain"
          source={curiosidades1}
        />
      </TouchableOpacity>
    </View>
  );
};

/**
 *@ignore
 */
const InfoTitle = ({ exhibition }) => {
  return (
    <View style={styles.viewInfo}>
      <Title style={{ color: '#6B4D9F', fontFamily: 'Boogaloo-Regular', fontSize: 30, textAlign: 'center' }}>
        {exhibition.name}
      </Title>
    </View>
  );

};

/**
 *@ignore
 */
const InfoSponsor = ({ url }) => {
  return (
    <View style={styles.viewSponsor}>

      <Image source={{ uri: url }} style={styles.imgSponsor} />
    </View>
  );
};

/**
 *@ignore
 */
const InfoFooter = ({ exhibition }) => {
  const {
    minimumAge,
    maximumAge,
    educationArea,
    duration,
    capacity,
  } = exhibition;
  return (
    <View style={styles.viewFooter}>
      <FooterItem
        title="Educación:"
        desc={educationArea}
        icon="book-open-variant"
      />
      <FooterItem
        title="Edades:"
        desc={`${minimumAge} a ${maximumAge} años`}
        icon="human-male-boy"
      />
      <FooterItem
        title="Duración:"
        desc={duration == 1 ? `${duration} minuto` : `${duration} minutos`}
        icon="clock-time-three-outline"
      />
      <FooterItem
        title="Capacidad:"
        desc={capacity == 1 ? `${capacity} niño` : `${capacity} niños`}
        icon="account-group"
      />
    </View>
  );
};

/**
 *@ignore
 */
const FooterItem = ({ title, desc, icon }) => {
  return (
    <View>
      <IconButton
        icon={icon}
        size={30}
        color="#F87311"
        style={styles.footerItem}
      />
      <Text style={[styles.textItem
        //, { fontWeight: 'bold' }
        ]}>{title}</Text>
      {Array.isArray(desc) ? (
        map(desc, (d, index) => (
          <Text key={index} style={styles.textItem}>
            {d}
            {index !== size(desc) - 1 && ', '}
          </Text>
        ))
      ) : (
        <Text style={styles.textItem}>{desc}</Text>
      )}
    </View>
  );
};

/**
 *@ignore
 */
const styles = StyleSheet.create({
  btnCuriosidades: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  btnQuiz: {
    width: '25%',
    backgroundColor: Colors.accent,
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
  },
  imgQuiz: {
    width: 100,
    height: 100,
  },
  viewPoster: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  poster: {
    width: '100%',
    height: 500,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  info: {
    width: 180,
    height: 130,
  },
  viewInfo: {
    marginHorizontal: 30,
    marginTop: 17,
    marginBottom: 10,
  },
  viewRating: {
    marginHorizontal: 30,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewModal: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  viewFooter: {
    marginVertical: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerItem: {
    borderRadius: 100,
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderColor: '#F87311',
    borderWidth: 2,
  },
  textItem: {
    fontFamily: 'Boogaloo-Regular',
    textAlign: 'center',
    fontSize: 13,
    color: '#000',
  },
  overview: {
    fontFamily: 'Boogaloo-Regular',
    marginHorizontal: 25,
    marginTop: 20,
    textAlign: 'justify',
    color: '#929292',
    fontSize: 16,
  },
  overview2: {
    fontFamily: 'Boogaloo-Regular',
    marginHorizontal: 25,
    marginTop: 16,
    textAlign: 'justify',
    color: '#000',
    fontSize: 16,
  },
  viewSponsor: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  imgSponsor: {
    width: 100,
    height: 50,
    backgroundColor: '#fff',
    marginTop: -390,
    marginRight: 30,
    borderRadius: 4,
    borderColor: '#000',
    borderWidth: 0.15,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActivate: {
    margin: 3,
    color: 'black',
  },
  dot: {
    margin: 3,
    color: 'white',
  },
});
