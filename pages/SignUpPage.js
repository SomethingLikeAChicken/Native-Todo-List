import { SafeAreaView, TouchableWithoutFeedback, Button, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { useNavigation } from '@react-navigation/native'




const SignUpPage = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [passwort, setPasswort] = useState("")

  const navigation = useNavigation()


  const goToLogIn = () => {
    navigation.navigate("Login")
  }


  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, passwort)
      .then(userCredentials => {
        const user = userCredentials.user;
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            auth
              .signInWithEmailAndPassword(email, passwort)
              .then(userCredentials => {
                const user = userCredentials.user;
              })
              .catch(error => alert(error.message))
              
            var dbRef = db.collection("users");
            dbRef.doc(user.uid).set({
              name: username,
              uid: user.uid,
              mail: auth.currentUser?.email,
            });

            navigation.navigate("Home")
          }
        })
        return unsubscribe
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
          <Text style={styles.header}>Sign Up</Text>
          <TextInput
            placeholder='Username'
            value={username}
            onChangeText={text => setUsername(text)}
            style={styles.input}
          />
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
          <Button
            title="Log In"
            onPress={goToLogIn}
          />
          <View style={styles.btnContainer}>
            <Button
              color="white"
              title="Sign Up"
              onPress={handleSignUp}
            />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default SignUpPage

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



})