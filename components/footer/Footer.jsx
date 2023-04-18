import { BiCookie } from "react-icons/bi";
import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <BiCookie />
        <BiCookie />
        <BiCookie />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4a259",
    width: "100vw",
    height: 50,
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: 0,
  },
  text: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
});

export default Footer;
