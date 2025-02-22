import { StatusBar, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MainViewCards from "../components/auth/cards";
import { useState } from "react";
import NewVersionCard from "../components/auth/new_version";
import UpdatingCard from "../components/auth/updating";

export default function DashboardScreen() {
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
  const [showUpdatingModal, setShowUpdatingModal] = useState<boolean>(false);

  return (
    <LinearGradient
      colors={["#252057", "#0C0A26"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerInfo}>
          <Text style={styles.title}>Dashboard</Text>
          <Text style={styles.subtitle}>Select an option to start</Text>
        </View>

        <Text style={styles.headerBranch}>Universum POS</Text>
      </View>

      {/* Tarjetas */}
      <MainViewCards
        isBlur={showUpdateModal || showUpdatingModal}
        setShowUpdateModal={setShowUpdateModal}
      />

      {showUpdateModal && (
        <NewVersionCard
          setShowUpdateModal={setShowUpdateModal}
          setShowUpdatingModal={setShowUpdatingModal}
        />
      )}

      {showUpdatingModal && (
        <UpdatingCard setShowUpdatingModal={setShowUpdatingModal} />
      )}

      {/* Footer */}
      <Text style={styles.footer}>© Universum Restaurant</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
    borderColor: "red",
    flexWrap: "wrap-reverse",
    gap: 10,
  },
  headerInfo: {
    flexDirection: "column",
    gap: 18,
  },
  title: {
    fontSize: 34,
    fontWeight: 700,
    color: "#fff",
  },
  subtitle: {
    fontSize: 17,
    color: "#808080",
  },
  headerBranch: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 25,
    color: "#E8E8E8",
    textAlign: "right",
  },
  footer: {
    color: "#bbb",
    width: "100%",
  },
});
