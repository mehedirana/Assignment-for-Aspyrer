
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import * as firebase from "firebase";


class SignInScreen extends Component {

  state = {
    email: "",
    password: "",
    err: null,
  };
  
  // componentDidMount=()=>{
  //   firebase.auth.OAuthCredential((user)=>{
  //     if(user!=null){
  //       console.log(user)
  //     }
  //   })
  // }

    signInWithGoogleAsync = async ()=> {
      try {
        const result = await Google.logInAsync({
          //behavior:'web',
          androidClientId: "383958588869-43lj98ut80fa4djid3clavkt36uhj22a.apps.googleusercontent.com",
        //  iosClientId: YOUR_CLIENT_ID_HERE,
          scopes: ['profile', 'email'],
          
        });
        
        if (result.type === 'success') {
        //  this.props.navigation.navigate('Home');
        alert("logIn")
          console.log("//////////" +result.accessToken)  
          return result.accessToken;
        } else {
          return { cancelled: true };
        }
      } catch (e) {
        alert(e)
        console.log("error : "+e)
        return { error: true };
      }
    }
  
   


  facebookLogIn = async() =>{
    
      try {
        await Facebook.initializeAsync('928520384308033');
        const {
          type,
          token,
          expires,
          permissions,
          declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        });
        if (type === 'success') {
          console.log("\\\\\\success")
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          alert('Logged in!', `Hi ${(await response.json()).name}!`);
          this.props.navigation.navigate('Home');
        //  this.props.navigation.navigate('Home');
        } else {
          // type === 'cancel'
        }
      } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
      }
  }

  handleLogin = () => {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        var user = firebase.auth().currentUser;
        if (user) {
          this.props.navigation.navigate('Home');
        }
      })
      .catch(error => {
        alert(error)
      })
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>email</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={email => { this.setState({ email }) }}
              value={this.state.email}
            />
          </View>
          <View>
            <Text style={styles.inputTitle}>password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={password => { this.setState({ password }) }}
              value={this.state.password}
            />
          </View>

        </View>

        <View style={{ margin: 30, flexDirection: "column", }}>

          <TouchableOpacity style={styles.button}
            onPress={this.handleLogin}
          >
            <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}

            >Sign Up</Text>
          </TouchableOpacity>

          <Text style={{ color: "#8A8F9E", marginTop: 10, alignSelf: "center", fontWeight: "bold" }}>OR LOGING USING</Text>
          <View style={{ flexDirection: "row",justifyContent:'space-between', marginTop:10, }}>

            <TouchableOpacity style={{marginLeft:120}} onPress={()=>this.facebookLogIn()}>
              <Entypo name="facebook-with-circle" size={35} color="#8A8F9E" />
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:120}} onPress={()=>this.signInWithGoogleAsync()}>
              <Entypo name="google--with-circle" size={35} color="#8A8F9E" />
            </TouchableOpacity>

          </View>

        </View>

      </View>
    );
  }
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    marginTop: 250,
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
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: "#00ced0",
    borderRadius: 30,
    height: 52,
    alignItems: "center",
    justifyContent: "center"

  }
});
