import { View, Text, StyleSheet, ScrollView } from "react-native";
import { cupcake } from "../../mock/cupcake";
import { MdExpandMore } from "react-icons/md";
import { GiCupcake } from "react-icons/gi";

function toggleMenu() {
  let menuBox = document.getElementById("piuInfo");
  if (menuBox.style.display == "block") {
    menuBox.style.display = "none";
  } else {
    menuBox.style.display = "block";
  }
}

const SectionThree = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <h3 style={styles.h3}>
          <GiCupcake style={styles.icon} />
          Cupcake
        </h3>
        <MdExpandMore onClick={toggleMenu} />
        <li id="piuInfo" style={styles.info}>
          <a
            style={styles.a}
            href="https://www.giallozafferano.it/ricerca-ricette/cupcake/"
          >
            Leggi le ricette
          </a>
        </li>
      </Text>
      <ScrollView horizontal={true} style={styles.scroll}>
        {cupcake.map((food) => (
          <p key={food.id} style={styles.divCupcake}>
            <img
              src={food.img}
              alt={food.titolo}
              width={250}
              height={150}
              style={styles.img}
            />
            <li style={styles.titolo}>{food.titolo}</li>
          </p>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: 370,
    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    display: "flex",
    flexDirection: "column",
    letterSpacing: 2,
    color: "#bc4b51",
  },
  h3: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 3,
  },
  icon: {
    fontSize: 27,
  },
  scroll: {},
  img: {
    objectFit: "cover",
  },
  divMuffin: {
    width: 200,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  titolo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2,
    fontSize: 18,
    letterSpacing: 2,
  },
  info: {
    display: "none",
  },
  a: {
    color: "black",
    letterSpacing: 1,
    textDecorationLine: "none",
  },
});

export default SectionThree;
