
import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

class LoadScreen extends Component {
  render(){
  return (
    <View style={styles.container}>
      <Text>Loading..</Text>
      <ActivityIndicator size="large"></ActivityIndicator>
    </View>
  );
  }
}
export default LoadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
