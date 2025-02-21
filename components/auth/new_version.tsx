import { Dispatch, SetStateAction, useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";

interface Props {
  setShowUpdateModal: Dispatch<SetStateAction<boolean>>;
  setShowUpdatingModal: Dispatch<SetStateAction<boolean>>;
}

export default function NewVersionCard({
  setShowUpdateModal,
  setShowUpdatingModal,
}: Props) {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        onPress={() => setShowUpdateModal(false)}
        style={styles.closeButton}
      >
        <Image source={require("../../assets/icons/close_icon.svg")} />
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <Image
          source={require("../../assets/images/update.png")}
          style={styles.updateImage}
        />

        <Text style={styles.contentTitle}>New version available!</Text>
        <Text style={styles.contentText}>
          A new version of UPOS Restaurant is available, update now!
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => setShowUpdateModal(false)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Remember later</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setShowUpdateModal(false);
            setShowUpdatingModal(true);
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Update now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    position: "absolute",
    flexDirection: "column",
    height: "60%",
    width: "60%",
    backgroundColor: "rgba(37, 32, 87, 0.50)",
    borderRadius: 18,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#252057",
  },
  closeButton: {
    alignSelf: "flex-end",
    position: "absolute",
    zIndex: 1,
  },
  contentContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "70%",
    gap: 24,
    marginTop: 20,
  },
  updateImage: {
    width: "40%",
    height: "60%",
    marginBottom: 10,
  },
  contentTitle: {
    color: "#E8E8E8",
    textAlign: "center",
    fontSize: 34,
    fontWeight: 700,
    lineHeight: 41,
  },
  contentText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 25,
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    gap: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#0F69B3",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "sans-serif",
    letterSpacing: 1,
  },
});
