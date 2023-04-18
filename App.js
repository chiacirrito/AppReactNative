import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Navbar from "./components/navbar/Navbar";
import SectionHome from "./components/sectionHome/SectionHome";
import Footer from "./components/footer/Footer";
import SectionTwo from "./components/sectionTwo/SectionTwo";
import SectionThree from "./components/sectionThree/SectionThree";
import SectionFour from "./components/sectionFour/SectionFour";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <SectionHome style={{ flex: 1 }} />
          <SectionTwo style={{ flex: 2 }} />
          <SectionThree style={{ flex: 3 }} />
          <SectionFour style={{ flex: 4 }} />
        </View>
      </ScrollView>
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "155vh",
    maxWidth: 400,
  },
  section: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  scrollView: {
    backgroundColor: "#f4e285",
    marginHorizontal: 20,
  },
});
