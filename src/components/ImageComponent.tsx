import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageComponent = () => {
  return (
    <>
      <Text>ImageComponent</Text>
      <Image
        source={require("../assets/image.jpg")}
        style={{ width: 200, height: 200 }}
      />
    </>
  );
};

export default ImageComponent;
