import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";

class HomeScreen extends Component {
  signOutUser = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate("SignIn");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>All Set</Text>
        <TouchableOpacity style={{ margin: 32 }} onPress={this.signOutUser}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
