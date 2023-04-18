import { Text, View, StyleSheet, ScrollView } from "react-native-web";
import { MdExpandMore } from "react-icons/md";
import { GiWrappedSweet } from "react-icons/gi";
import { cakepops } from "../../mock/cakepops";

function toggleMenu() {
  let menuBox = document.getElementById("Info");
  if (menuBox.style.display == "block") {
    menuBox.style.display = "none";
  } else {
    menuBox.style.display = "block";
  }
}

const SectionFour = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <h3 style={styles.h3}>
          <GiWrappedSweet style={styles.icon} />
          Cake pops
        </h3>
        <MdExpandMore onClick={toggleMenu} />
        <li id="Info" style={styles.info}>
          <a
            style={styles.a}
            href="https://www.giallozafferano.it/ricerca-ricette/cake+pops/"
          >
            Leggi le ricette
          </a>
        </li>
      </Text>
      <ScrollView horizontal={true} style={styles.scroll}>
        {cakepops.map((food) => (
          <p key={food.id} style={styles.divCakepops}>
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
    fontSize: 28,
  },
  scroll: {},
  img: {
    objectFit: "cover",
  },
  divCakepops: {
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
    fontSize: 16,
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

export default SectionFour;
