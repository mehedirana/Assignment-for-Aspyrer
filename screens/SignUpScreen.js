
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';
import * as firebase from "firebase";

class SignUpScreen extends Component {

  state ={
    email: "",
    password:"",
    name: "",
    birthday: "",
    err: null,
  };

  handleSignUp =()=>{

    firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(userCredentials => {
      this.props.navigation.navigate('Home');
      return userCredentials.user.updateProfile({
        displayName: this.state.name
      });
    })
    .catch(err => this.setState({err: err.message}))
    console.log(this.state.err);

  }
  render() {
    return (
      <View style={styles.container}>
      <View style={{marginTop:30}} >
      <Text style={{textAlign:"center",justifyContent:"center", alignContent:"center", fontSize:15}}>Sign up</Text>
            <TouchableOpacity style={styles.avater}>
            <Ionicons
            name="ios-add"
            size={40}
            color="#FFFFFF"
            style={{marginTop:6,marginLeft:2}}
            ></Ionicons>

            </TouchableOpacity>
        </View>
        <View style={styles.form}>
        <View>
            <Text style={styles.inputTitle}>FULL NAME</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={name =>{this.setState({name})}}
              value ={this.state.name}
            />
          </View>
          <View>
            <Text style={styles.inputTitle}>email</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={email =>{this.setState({email})}}
              value ={this.state.email}
            />
          </View>
          <View>
            <Text style={styles.inputTitle}>password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={password=>{this.setState({password})}}
              value={this.state.password}
            />
          </View>
          <View>
            <Text style={styles.inputTitle}>BIRTHDAY</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={birthday =>{this.setState({birthday})}}
              value ={this.state.birthday}
            />
          </View>

        </View>

        <View style={{ flexDirection:"column",}}>
        

          <TouchableOpacity style={styles.button1} onPress={this.handleSignUp}>
            <Text style={{color:"#FFFFFF", fontWeight:"bold"}}>
            CREATE</Text>
          </TouchableOpacity>

          <View style={{flexDirection:'row', marginLeft:75, marginTop:15}}>
            <Text style={{color:"#8A8F9E", marginTop:10, alignSelf:"center", }}>ALREADY HAVE AN ACCOUNT?</Text>

            <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignIn')}>
            <Text style={{color:"#8A8F9E", fontWeight:"bold",marginTop:10, marginLeft:30}}
            
            >SIGN IN</Text>
          </TouchableOpacity>

            </View>

          

        </View>

      </View>
    );
  }
}
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    marginTop: 80,
    marginBottom: 48,
    marginHorizontal: 30
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D"

  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase"
  },
  button: {
    marginHorizontal: 20,
    backgroundColor: "#00ced0",
    borderRadius: 30,
    height: 52,
    alignItems: "center",
    justifyContent: "center"

  },
  button1: {
    marginHorizontal: 20,
    backgroundColor: "#00ced0",
    borderRadius: 30,
    height: 52,
    alignItems: "center",
    justifyContent: "center"

  },
  avater: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#8A8F9E",
    marginTop: 48,
    justifyContent: "center",
    alignItems: "center",
    marginLeft:155
  }
});
