import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Tin from '../assets/icons/sitiosicon.png';
import Marin from '../assets/icons/conocenosicon_old.png';

/**
 * Componente que muestra el contenido del modal.
 * @param {string} curiousInfo - Dato curioso de la exhibición.
 * @return {View} Retorna un componente que contiene maquetada la vista
 */
const Modal = ({ curiousInfo }) => {
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <View style={styles.item}>
          <Image source={Marin} style={styles.img} />
        </View>
        <View style={styles.item}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
            <Text style={styles.text}>{curiousInfo}</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Modal;

/**
 * @ignore
 */
const styles = StyleSheet.create({
  content: {
    width: 300,
    height: 150,
    marginTop: 20,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 110,
    width: 110,
    padding: 0,
    margin: 0,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16.5,
    textAlign: 'left',
    fontFamily: 'BubblegumSans-Regular',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  item: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
