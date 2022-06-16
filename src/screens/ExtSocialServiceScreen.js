import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const ExtSocialServiceScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.titular}>Programa De Voluntariado</Text>
                <View style={styles.line}></View>
                <Text style={styles.tema}>Servicio Social:</Text>
            </View>
        </ScrollView>
    );
};

export default ExtSocialServiceScreen;

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
        fontFamily: 'BubblegumSans-Regular',
        fontSize: 18,
    },
    title: {
        fontFamily: 'BubblegumSans-Regular',
        marginTop: 16,
        paddingVertical: 8,
        borderRadius: 6,
        justifyContent: 'center',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 18,
    },
    footer: {
        fontFamily: 'BubblegumSans-Regular',
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
        fontFamily: 'BubblegumSans-Regular',
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
        fontFamily: 'BubblegumSans-Regular',
        marginTop: 20,
        fontSize: 30,
        color: '#566573',
        //fontWeight: 'bold',
        textAlign: 'center',
    },
});