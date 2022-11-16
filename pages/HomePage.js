import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/core";

const HomePage = () => {
  const [userName, setUserName] = useState("");
  const [titel, setTitel] = useState("");
  const [description, setDescription] = useState("");

  const [y, setY] = useState([]);
  const [id, setId] = useState("");

  var dbRef = db.collection("users");
  var toDosRef = db.collection("ToDos");
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    // this code will run once
    setY([])
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var docRef = db.collection("users").doc(user.uid);

        docRef.get().then((doc) => {
          if (doc.exists) {
            setUserName(doc.data().name);
          } else {
            console.log("Kein solche Sammlung");
          }
        });
      } else {
        // User not logged in or has just logged out.
      }

      db.collection("ToDos")
        .where("uid", "==", user.uid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setY((current) => [
              ...current,
              {
                id: doc.id,
                tdTitel: doc.data("ToDoTitel").ToDoTitel,
                description: doc.data("Description").Description,
              },
            ]);
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
      console.log(y);
    });
  }, []);

  const createToDo = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.uid);
        db.collection("ToDos")
          .add({
            ToDoTitel: titel,
            Description: description,
            uid: user.uid,
          })
          .then((docRef) => {
            setId(docRef.id);
            console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      } else {
        // User not logged in or has just logged out.
      }
      setY((current) => [
        ...current,
        {
          id: id,
          tdTitel: titel,
          description: description,
        },
      ]);
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.listContainer}>
      <Text style={{fontSize: "25", fontweight: "normal"}}>{item.tdTitel}</Text>
      <Text style={{fontSize: "13"}}>{item.description}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.inner}>
          <Text style={styles.header}>ToDos</Text>
          <Text style={styles.headertext}>Hallo {userName}</Text>
          <Text style={{ fontSize: 26 }}>Enter Your Todo...</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setTitel(text)}
            placeholder="Title"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setDescription(text)}
            placeholder="Description"
          />
          <View style={styles.btnContainer}>
            <Button title="Submit" color="white" onPress={createToDo} />
          </View>
          <TouchableOpacity onPress={handleSignOut} style={styles.buttonSignOut}>
            <Text style={styles.buttonText}>Sign out</Text>
          </TouchableOpacity>
          <FlatList
            data={y}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default HomePage;

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
  button: {
    marginTop: 40,
    backgroundColor: "#5DB075",
    width: "30%",
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
    justifyContent: "center",
  },

  listContainer: {
    backgroundColor: "#5DB075",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
});
