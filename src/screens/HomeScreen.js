import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
import axios from "axios";

const screenWeight = Dimensions.get("window").width;

const HomeScreen = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const onChangeName = input => {
    setName(input);
  };
  const onChangeAge = input => {
    setAge(input);
  };

  useEffect(() => {
    console.log(route.params);
  }, []);

  const onSave = async () => {
    // Save
    console.log("onSave");
  };

  const onShow = () => {
    navigation.navigate('List')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nhập Thông tin</Text>
      <View style={styles.form}>
        <TextInput style={styles.inputStyle} onChangeText={onChangeName} placeholder="Nhập Tên" />
        <TextInput style={styles.inputStyle} onChangeText={onChangeAge} placeholder="Nhập Tuổi" />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle} onPress={onSave}>
            <Text style={styles.textCenter}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={onShow}>
            <Text style={styles.textCenter}>Show</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

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
    width: 120,
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
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
  },
});
