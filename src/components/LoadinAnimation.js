import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const AnimationL = ({ path }) => {
    return (
        <View style={styles.view}>
            <LottieView
                style={styles.lottie}
                source={path}
                autoPlay
                loop
                speed={2}
            />
        </View>
    );
};

export default AnimationL;

const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    lottie: {
        width: 350,
        height: 350,
    }
});