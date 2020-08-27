
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class LoadScreen extends Component {
  render(){
  return (
    <View style={styles.container}>
      <Text>Sign up</Text>
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
