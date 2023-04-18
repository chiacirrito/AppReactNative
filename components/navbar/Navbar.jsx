import { GiCookingGlove } from "react-icons/gi";
import { StyleSheet, Text, View } from "react-native";

function toggleMenu() {
  let menuBox = document.getElementById("menu");
  if (menuBox.style.display == "block") {
    menuBox.style.display = "none";
  } else {
    menuBox.style.display = "block";
  }
}

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <GiCookingGlove />
      </Text>
      {/*  <FiMenu onClick={toggleMenu} /> */}
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
  },
  text: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: 20,
  },
});

export default Navbar;
