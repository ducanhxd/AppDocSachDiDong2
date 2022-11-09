import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Header, Input, Button } from "react-native-elements";
import logo from "/BAI TAP/lap trinh di dong/BT DI DONG/didongyarn/assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import { withNavigation } from 'react-navigation';
export default function SignInScreen({ navigation }) {
  return (
    <View style={styles.header}>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "Đăng nhập", style: { color: "#fff" } }}
      />
      <View style={styles.container}>
        <View>
          <Image
            source={logo}
            style={{
              width: 200,
              height: 150,
              marginLeft: 100,
              marginTop: -90,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          />
          <Text style={{ marginBottom: 20, textAlign: "center", fontSize: 25 }}>
            Đăng Nhập Tài Khoản
          </Text>
          <Input
            placeholder="Tài Khoản"
            leftIcon={<Icon name="user" size={24} color="blue" />}
          />

          <Input
            placeholder="Mật Khẩu"
            secureTextEntry={true}
            leftIcon={<Icon name="lock" size={24} color="blue" />}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <TouchableOpacity
            onPress={() => {this.props.navigation.navigate("Home");}}
              style={{
                borderWidth: 1,
                height: 42,
                width: "40%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 40,
              }}
            >
              <Text>Đăng Nhập</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderWidth: 1,
                height: 42,
                width: "40%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 40,
                display: "flex",
              }}
            >
              <Text>Đăng Kí</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 100,
    justifyContent: "center",
    flexDirection: "column",
  },

  Button: {
    backgroundColor: "black",
  },
});
