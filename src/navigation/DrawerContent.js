import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer, Avatar, DefaultTheme } from 'react-native-paper';
import { playButtonPress } from '../helpers/audio';
import Colors from '../constants/Colors';

/**
 * @param {props} navigation  Contiene información básica de navegación
 * @return {DrawerContentScrollView} hace la funcion de poder hacer scroll si en dado caso hay mas opciones en el drawer
 * @return {Drawer.Section} crea una seccion en donde podemos poner ya sea un item con texto o una imagen (lo que queramos)
 * @return {Avatar.Image} retorna una imagen segun especificaciones que se le den en las propiedades del componente
 * @property {Avatar.Image} source el path que se le da es con requite('ruta de la imagen a renderizar')
 * @return {Drawer.Item} Regresa un texto en el drawer con el contenido que se le ponga en las propiedades
 * @property {Drawer.Item} label aqui se setea el texto del Item
 * @property {Drawer.Item} icon aqui se setea el icono el cual viene de la libreria react-native-paper
 *  si se quiere seguir añadiendo mas items solo se agrega dentro de la seccion de igual forma si se quiere agregar una imagen se agrega otra seccion
 */


const DrawerContent = (props) => {
  const { navigation } = props;
  return (
    <DrawerContentScrollView style={styles.drawer}>
      <Drawer.Section style={styles.image}>
        <View style={{backgroundColor: 'white', borderRadius: 100, width: 150, height: 150, alignItems: 'center'}}>
          <Image source={require('../assets/logoTinMarin.png')} style={styles.avatar}/>
        </View>
      </Drawer.Section>
      <Drawer.Section>
        <Drawer.Item
          label="Menu Principal"
          theme={itemT}
          onPress={() => navigation.navigate('home')}
          icon="home"
        />
        <Drawer.Item
          label="Exhibiciones"
          theme={itemT}
          onPress={() => { playButtonPress, navigation.navigate('exhibits') }}
          icon="ticket"
        />
        <Drawer.Item
          label="Eventos"
          theme={itemT}
          onPress={() => navigation.navigate("events")}
          icon="gift"
        />
        <Drawer.Item
          label="Voluntariado"
          theme={itemT}
          onPress={() => navigation.navigate('volunteering')}
          icon="hand"
        />
        <Drawer.Item
          label="Celebraciones"
          theme={itemT}
          onPress={() => navigation.navigate('celebration')}
          icon="star"
        />
        <Drawer.Item
          label="Donaciones"
          theme={itemT}
          onPress={() => navigation.navigate('donations')}
          icon="heart"
        />
      </Drawer.Section>
      <Drawer.Section>
        <Drawer.Item
          label="Recomendaciones Covid-19"
          theme={itemT}
          onPress={() => navigation.navigate('covid')}
          icon="virus"
        />
        <Drawer.Item
          label="Conócenos Más"
          theme={itemT}
          onPress={() => navigation.navigate('knowMore')}
          icon="card-account-mail"
        />
        <Drawer.Item
          label="Sugerencias"
          theme={itemT}
          onPress={() => navigation.navigate('comments')}
          icon="email-alert"
        />
        <Drawer.Item
          label="Preguntas Frecuentes"
          theme={itemT}
          onPress={() => navigation.navigate('FAQs')}
          icon="frequently-asked-questions"
        />
        <Drawer.Item
          label="Sitios de Interés"
          theme={itemT}
          onPress={() => navigation.navigate('WebLinks')}
          icon="web"
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};

const itemT = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: 'black',
  },
};

/**
 * @ignore
 */
const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    marginTop: 20,
  },
  second: {
    color: '#860472',
  },
  drawer: {
    backgroundColor: Colors.tmYellow,
  },
  avatar: {
    width: 145,
    height: 145,
    resizeMode: 'contain'
  },
});

export default DrawerContent;