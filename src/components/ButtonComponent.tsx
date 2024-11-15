import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import React from "react";

const ButtonComponent = () => {
  return (
    <>
      <Text>Main Page</Text>
      <Button
        title="Click Me Idiot"
        color="red"
        onPress={() => alert("FUCK U!")}
      />
      <Pressable
        onPress={() => console.log("On Press")}
        onLongPress={() => console.log("ouch!!")}
      >
        <Text style={{ color: "blue" }}>I am Pressable!</Text>
      </Pressable>
    </>
  );
};

export default ButtonComponent;
