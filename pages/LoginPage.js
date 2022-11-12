import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'





const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [passwort, setPasswort] = useState("")

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Home")
      }
    })

    return unsubscribe
}, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, passwort)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registreirt mit:', user.email);
      })
      .catch(error => alert(error.message))
  }


  const handleLogin = () => {
    auth
        .signInWithEmailAndPassword(email, passwort)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Eingelogt:', user.email);
        })
        .catch(error => alert(error.message))        
  }
  

  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Email'
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Passwort'
          value={passwort}
          onChangeText={text => setPasswort(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>


      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={styles.button}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>


    </KeyboardAvoidingView>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input:{
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
  },
  buttonContainer:{
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  button:{
    backgroundColor:"#0782f9",
    width:"100%",
    padding : 15,
    borderRadius:15,
    margin: 2,
  },
  buttonOutline:{
    backgroundColor: "white",
    marginTop: 5,
  },
  buttonText:{

  },
  buttonOutlineText:{

  }

})