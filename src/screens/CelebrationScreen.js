import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

/**
 * Pantalla que muestra la misión y visión de la entidad.
 * @return {ScrollView} Regresa una layout con scroll vertical, y muestra la maquetación de la pantalla.
 */
const CelebrationScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.titular}>Celebraciones</Text>
                <View style={styles.line}></View>
                <View style={styles.containerlogo}>
                    <Image
                        style={styles.Logo}
                        source={require('../assets/paquete-a-tu-gusto.png')}
                    />
                </View>
                <View style={styles.containerlogo}>
                    <Image
                        style={styles.Logo}
                        source={require('../assets/paquete-marin.png')}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default CelebrationScreen;

/**
 *@ignore
 */
const styles = StyleSheet.create({
    line: {
        height: 1,
        width: '90%',
        backgroundColor: '#D5D8DC',
    },
    container: {
        flex: 1,
        paddingBottom: 24,
        paddingHorizontal: 24,
    },
    view: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    title2: {
        marginTop: 16,
        paddingVertical: 8,
        borderRadius: 6,
        justifyContent: 'center',
        color: '#20232a',
        textAlign: 'justify',
        fontFamily: 'NunitoSans-Bold',
        fontSize: 18,
    },
    title: {
        fontFamily: 'NunitoSans-Bold',
        marginTop: 16,
        paddingVertical: 8,
        borderRadius: 6,
        justifyContent: 'center',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 18,
    },
    footer: {
        fontFamily: 'NunitoSans-Bold',
        marginTop: 16,
        paddingVertical: 8,
        borderRadius: 6,
        justifyContent: 'center',
        color: '#717277',
        textAlign: 'center',
        fontSize: 18,
    },
    tema: {
        marginTop: 13,
        textAlign: 'center',
        fontFamily: 'NunitoSans-Bold',
        fontSize: 24,
        color: '#B22222',
    },
    Logo: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    containerlogo: {
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    titular: {
        fontFamily: 'NunitoSans-Bold',
        marginTop: 20,
        fontSize: 30,
        color: '#566573',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
