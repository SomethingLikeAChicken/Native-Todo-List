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
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/core";

const HomePage = () => {

  const [userName, setUserName] = useState("")
  const [titel, setTitel] = useState("")
  const [description, setDescription] = useState("")
  const [uid, setUid] = useState("")
  const [y, setY] = useState([])
  const [id, setId] = useState("")


  var dbRef = db.collection("users");
  var toDosRef = db.collection("ToDos");
  const navigation = useNavigation();



  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        setY([])
        setUserName()
        setTitel()
        setDescription()
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };


  const loadContent = () => {

     var docRef = db.collection("users").doc(firebase.auth().currentUser.uid);
     docRef.get().then((doc) => {
       if (doc.exists) {
         setUserName(doc.data().name);
       } else {
         console.log("Kein solche Sammlung");
       }
     });
  
     db.collection("ToDos")
     .where("uid", "==", firebase.auth().currentUser.uid)
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
  }


  useEffect(() => {
    // this code will run once

    const user = firebase.auth().currentUser;

    setY([])
    if (user) {
      console.log("hey " + user.uid)
      setUid(firebase.auth().currentUser.uid)
      loadContent()
    } else {
      // No user is signed in.
    }


    /* 
    firebase.auth().onAuthStateChanged((user) => {
      setUid(user.uid)
      console.log("🚀 ~ file: HomePage.js ~ line 57 ~ firebase.auth ~ user.uid", uid)

    });
    loadContent() */

  }, []);




  const createToDo = () => {
    db.collection("ToDos")
      .add({
        ToDoTitel: titel,
        Description: description,
        uid: uid,
      })
      .then((docRef) => {
        setId(docRef.id);
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    setY((current) => [
      ...current,
      {
        id: id,
        tdTitel: titel,
        description: description,
      },
    ]);
    setTitel("")
    setDescription("")
  };

  const deleteAlert = (id, titel) =>
    Alert.alert(
      titel,
      "ToDo Löschen",
      [
        {
          text: "Cancel",
          onPress: () => console.log("cancel pressed"),
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => deleteItem(id)
        },
        {cancelable : false}
      ]
    )

    const deleteItem = (itemID) => {
      db.collection("ToDos").doc(itemID)
      .delete()
      .then(() => {
        console.log("Item with ID ", itemID, "was successfully deleted")
      })
      .catch((error) => {
        console.log("Error: ", error)
      })
      setY((current) => [
        ...current.filter((item) => !(item.id == itemID)
        )
      ]
      )
    }

  const renderItem = ({ item }) => (
    <Pressable style={styles.listContainer} onPress={() => deleteAlert(item.id, item.tdTitel)}>
      <Text style={{ fontSize: "25", fontweight: "normal" }}>{item.tdTitel}</Text>
      <Text style={{ fontSize: "13" }}>{item.description}</Text>
    </Pressable>
  );

  return (
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
  buttonSignOut: {
    marginTop: 20,
    width: "30%",
    textAlign: "center",
    alignSelf: "center",
  },
  buttonText: {
    textAlign: "center",
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
