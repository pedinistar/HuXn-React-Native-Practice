import { StyleSheet, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import ImageComponent from "../components/ImageComponent";

const Index = () => {
  return (
    <View style={styles.container}>
      <ButtonComponent />
      <ImageComponent />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
});
