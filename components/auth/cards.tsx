import { Dispatch, SetStateAction } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  StyleSheet,
} from "react-native";

interface Props {
  showUpdateModal: boolean;
  setShowUpdateModal: Dispatch<SetStateAction<boolean>>;
}

export default function MainViewCards({
  showUpdateModal,
  setShowUpdateModal,
}: Props) {
  const { width } = useWindowDimensions();

  return (
    <View
      style={width > 768 ? styles.cardContainer : styles.cardContainerSmall}
    >
      <TouchableOpacity
        style={
          showUpdateModal ? { ...styles.card, ...styles.cardBlur } : styles.card
        }
        onPress={() => setShowUpdateModal(true)}
      >
        <Image
          source={require("../../assets/images/skater.png")}
          style={width > 768 ? styles.cardLongImage : styles.cardSmallImage}
        />

        <View style={styles.cardInfo}>
          <Text style={width > 768 ? styles.cardTitle : styles.cardTitleSmall}>
            Entrada / salida
          </Text>
          <Text style={styles.cardText}>
            Tap to set your clock-in or clock-out time
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={
          showUpdateModal ? { ...styles.card, ...styles.cardBlur } : styles.card
        }
        onPress={() => console.log("navigate to login")}
      >
        <Image
          source={require("../../assets/images/login.png")}
          style={width > 768 ? styles.cardLongImage : styles.cardSmallImage}
        />

        <View style={styles.cardInfo}>
          <Text style={width > 768 ? styles.cardTitle : styles.cardTitleSmall}>
            Log in
          </Text>
          <Text style={styles.cardText}>Tap to log in to your dashboard</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    gap: 20,
    height: "75%",
    width: "100%",
    justifyContent: "center",
  },
  cardContainerSmall: {
    flexDirection: "row",
    gap: 20,
    height: "50%",
    width: "100%",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.07)",
    borderRadius: 18,
    padding: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "25%",
    minWidth: 170,
    gap: 20,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#252057"
  },
  cardBlur: {
    filter: "blur(50px)",
  },
  cardLongImage: {
    width: "100%",
    height: "60%",
    marginBottom: 10,
  },
  cardSmallImage: {
    width: "100%",
    height: "40%",
    marginBottom: 10,
  },
  cardInfo: {
    flexDirection: "column",
    alignItems: "center",
    height: "40%",
    width: "100%",
    gap: 10,
  },
  cardTitle: {
    fontSize: 32,
    fontWeight: 700,
    color: "#fff",
  },
  cardTitleSmall: {
    fontSize: 18,
    fontWeight: 700,
    color: "#fff",
  },
  cardText: {
    fontSize: 17,
    color: "#808080",
    textAlign: "center",
    width: "70%",
  },
});
