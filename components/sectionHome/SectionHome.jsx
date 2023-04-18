import { cheesecake } from "../../mock/cheesecake";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { MdExpandMore } from "react-icons/md";
import { GiCakeSlice } from "react-icons/gi";

function toggleMenu() {
  let menuBox = document.getElementById("info");
  if (menuBox.style.display == "block") {
    menuBox.style.display = "none";
  } else {
    menuBox.style.display = "block";
  }
}

const SectionHome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <h3 style={styles.h3}>
          <GiCakeSlice style={styles.icon} />
          Cheesecake
        </h3>
        <MdExpandMore onClick={toggleMenu} />
        <li id="info" style={styles.info}>
          <a
            href="https://www.giallozafferano.it/ricette-cat/Dolci-e-Desserts/Cheesecakes/"
            style={styles.a}
          >
            Leggi le ricette
          </a>
        </li>
      </Text>
      <ScrollView horizontal={true} style={styles.scroll}>
        {cheesecake.map((food) => (
          <p key={food.id} style={styles.divCheesecake}>
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
    paddingTop: 40,
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
  scroll: {
    display: "flex",
  },
  img: {
    objectFit: "cover",
  },
  divCheesecake: {
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
    fontSize: 17,
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

export default SectionHome;
