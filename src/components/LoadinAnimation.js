import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const AnimationL = ({ path }) => {
    return (
        <View style={styles.view}>
            <LottieView
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
        width: 350,
        height: 350,
        marginVertical: 100,
        marginHorizontal: 30
    },
});