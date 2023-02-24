import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
import axios from "axios";

const screenWeight = Dimensions.get("window").width;

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = input => {
    console.log(input);
    setUsername(input);
  };

  const onPasswordChange = input => {
    setPassword(input);
  };

  const onSubmitForm = async () => {
    try {
      const form = {
        username: username,
        password: password
      }
      const response = await axios.get("http://192.168.0.104:3000/users", { params: form });
      if (response.status === 200 && response.data.length > 0) {
        navigation.navigate('Home', {
          form
        })
      }
    } catch (error) { 
      console.log(error);
    }
  } 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <View style={styles.form}>
        <TextInput style={styles.inputStyle} onChangeText={onUsernameChange} placeholder="Nhập username" />
        <TextInput style={styles.inputStyle} onChangeText={onPasswordChange} placeholder="Nhập password" />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle} onPress={onSubmitForm}>
            <Text style={styles.textCenter}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    marginTop: 100,
    fontSize: 30,
    fontWeight: "bold",
  },
  form: {
    marginTop: 20,
    width: screenWeight - 30,
  },
  inputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  buttonStyle: {
    width: 200,
    height: 40,
    justifyContent: "center",
    backgroundColor: "red",
    borderRadius: 10,
  },
  textCenter: {
    textAlign: "center",
    fontWeight: "600",
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
});
