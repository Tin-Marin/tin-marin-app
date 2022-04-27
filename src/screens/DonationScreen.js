import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const DonationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '100%' }}>
        <WebView
          source={{ uri: 'https://tinmarin.org/donacion/' }} 
        />
      </View>
    </View>
  );
};

export default DonationScreen;

/**
 * @ignore
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
