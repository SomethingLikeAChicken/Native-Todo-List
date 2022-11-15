import { StyleSheet, Text, TouchableOpacity, Button, View, TouchableWithoutFeedback, Keyboard, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'


const HomePage = () => {

  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.inner}>
          <Text style={styles.header}>Todos</Text>
          <Text style={styles.headertext}>Hallo {auth.currentUser?.email}!</Text>

          <Text style={{ fontSize: 26 }}>Enter Your Todo...</Text>
          <TextInput style={styles.input} placeholder="Title" />
          <TextInput style={styles.input} placeholder="Description" />
          <View style={styles.btnContainer}>
            <Button title="Submit" color="white"/>
          </View>

          <TouchableOpacity
            onPress={handleSignOut}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign out</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>


  )
}

export default HomePage

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
  button: {
    marginTop: 40,
    backgroundColor: "#5DB075",
    width: "60%",
    padding: 15,
    borderRadius: 15,
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  headertext: {
    alignSelf: "center",
    marginBottom: 30,
  },
  input: {
    height: 40,
    backgroundColor: "lightgrey",
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  btnContainer: {
    backgroundColor: "white",
    height: 50,
    width: "50%",
    alignSelf: "center",
    backgroundColor: "#5DB075",
    borderRadius: 20,
    marginTop: 10,
    justifyContent: "center"
  },
})