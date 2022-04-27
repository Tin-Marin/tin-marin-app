import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

/**
 * Pantalla que muestra la misión y visión de la entidad.
 * @return {ScrollView} Regresa una layout con scroll vertical, y muestra la maquetación de la pantalla.
 */
const VolunteeringScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.titular}>Voluntariado</Text>
                <View style={styles.line}></View>    
                <Text style={styles.tema}>Guías Tin Marín:</Text>
                <Text style={styles.title2}>
                    Si eres una persona joven con vocación de servicio, proactividad, disposición a aprender y compartir tu tiempo junto a muchos niños y niñas. ¡Inscríbete! y forma parte de nuestro equipo de Guías Tin Marín.
                </Text>
                <Text style={styles.title2}>
                    Ayúdanos a dibujar sonrisas y enriquecer los conocimientos de la niñez y juventud salvadoreña.
                </Text>
                <View style={styles.containerlogo}>
                    <Image
                        style={styles.Logo}
                        source={require('../assets/Voluntariado.png')}
                    />
                </View>
                <Text style={styles.tema}>Beneficios del Programa:</Text>
                <Text style={styles.title2}>
                    Generas un impacto social en la niñez salvadoreña.{'\n'}
                    Desarrollas tu liderazgo y habilidades claves para la vida.{'\n'}
                    Adquieres conocimientos multidisciplinarios.{'\n'}
                    Mejoras tu capacidad de comunicación.{'\n'}
                    Formas tu marca personal, empoderándote de tu futuro.{'\n'}
                    Horarios flexibles para estudiantes que trabajan.{'\n'}
                </Text>
                <Text style={styles.tema}>Extensiones del Programa:</Text>
                <Text style={styles.title2}>
                    Voluntariado.{'\n'}
                    Servicio Social.{'\n'}
                    Seminario para Jóvenes.{'\n'}
                    Becas de Estudio.{'\n'}
                </Text>
                <Text style={styles.footer}>
                    Para mayor información puedes contactarnos al 7603-5411 o proyeccionsocialtinmarin@gmail.com{'\n'}
                </Text>
            </View>
        </ScrollView>
    );
};

export default VolunteeringScreen;

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
