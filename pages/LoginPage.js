import { SafeAreaView, TouchableWithoutFeedback, Button, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.inner}>
          <Text style={styles.header}>Log In</Text>
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
          <View style={styles.btnContainer}>
            <Button 
              color="white"
              title="Log In" 
              onPress={handleLogin}
            />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>









    /*  <KeyboardAvoidingView
       behavior={Platform.OS === "ios" ? "padding" : "height"}
       style={styles.container}
     >
       <Text style={styles.text} >Log In</Text>
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
     </KeyboardAvoidingView> */
  )
}

export default LoginPage

const styles = StyleSheet.create({


  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    margin: 20,
    marginTop: 60,
  },
  header: {
    fontSize: 36,
    marginBottom: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    backgroundColor: "lightgrey",
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
  },
  btnContainer: {
    backgroundColor: "white",
    height: 40,
    position: "absolute",
    bottom: "5%",
    width: "100%",
    backgroundColor: "#5DB075",
    borderRadius: 20,
  },


  /* container: {
   paddingTop: 75,
   flex: 1,
   alignItems: "center",
   backgroundColor: "white",
 },

 text: {
   fontSize: 30,
   fontWeight: "bold",
   textAlign: "center",
 },

 inputContainer: {
   width: "80%",
 },
 input: {
   backgroundColor: "white",
   paddingHorizontal: 15,
   paddingVertical: 10,
   marginTop: 10,
   backgroundColor: "lightgrey"
 },
 buttonContainer: {
   flex: 1,
   position: "absolute",
   bottom: "10%",
   width: "80%",
   justifyContent: "center",
   alignItems: "center",
   marginTop: 30,
 },
 button: {
   backgroundColor: "#5DB075",
   width: "100%",
   padding: 15,
   borderRadius: 50,
   margin: 2,
   color: "white",
 },
 buttonText: {
   color: "white"
 },
 buttonOutlineText: {

 }, */

})