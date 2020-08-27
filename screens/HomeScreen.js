import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from "firebase";

class HomeScreen extends Component{

    state ={
        email: "",
        displayName: ""
    };

    componentDidMount(){
        const {email, displayName} = firebase.auth().currentUser;
        this.setState({email, displayName});
    }
    signOutUser =()=>{
        firebase.auth.signOut();
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>{this.state.email}</Text>
                <TouchableOpacity style={{ margin: 32}} onPress={this.signOutUser}>

                </TouchableOpacity>
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})