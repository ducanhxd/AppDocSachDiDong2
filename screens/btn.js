import React from "react";
import { Text, Button, View, TouchableOpacity } from "react-native";

export default function Btns(props) {
  return (
    //       <Button
    //       color={props.color}
    //       title={props.Text}
    // />
    <View style={{ margin: 10 }}>
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          backgroundColor: props.color,
          paddingHorizontal: 80,
          paddingVertical: 15,
          borderRadius: 30,
          alignItems: "center",
        }}
      >
        <Text>{props.Text}</Text>
      </TouchableOpacity>
    </View>
  );
}
