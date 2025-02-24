import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Navbar from "../components/dashboard/navbar";
import { useState } from "react";

export default function DashboardScreen() {
  const [searchText, setSearchText] = useState<string>("");
  const [settingsView, setSettingsView] = useState<string>("About");

  const settingsNavList = ["Company", "App", "Taxes & tips", "About"];

  return (
    <LinearGradient
      colors={["#252057", "#0C0A26"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Navbar />

      <View style={styles.dashboardContainer}>
        <View style={styles.dashboardHeader}>
          <Text style={styles.dashboardTitle}>Settings</Text>

          <View style={styles.headerHandlers}>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit config</Text>
            </TouchableOpacity>
            <TextInput onChangeText={setSearchText} value={searchText} />
          </View>
        </View>

        <View style={styles.tabsList}>
          {settingsNavList.map((i) => {
            const isSelected = i === settingsView;

            return (
              <TouchableOpacity
                key={`settings: ${i}`}
                onPress={() => setSettingsView(i)}
                style={isSelected ? styles.selectedTab : styles.settingsTab}
              >
                <Text
                  style={isSelected ? styles.selectedTabText : styles.tabText}
                >
                  {i}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
    gap: 0,
    paddingTop: StatusBar.currentHeight,
    flexDirection: "row",
  },

  // dashboard
  dashboardContainer: {
    width: "80%",
    height: "100%",
    color: "#fff",
    flexDirection: "column",
    alignItems: "center",
  },

  // header
  dashboardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 32,
    width: "95%",
  },
  dashboardTitle: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 34,
  },
  headerHandlers: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  editButton: {
    flexDirection: "row",
    gap: 15,
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#E94B24",
  },
  editButtonText: {
    color: "#fff",
    paddingHorizontal: 20,
  },

  // tabs
  tabsList: {
    // paddingHorizontal: 32,
    flexDirection: "row",
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    borderColor: "#3a3a3a",
    width: "95%",
  },
  settingsTab: {
    paddingHorizontal: 10,
    paddingBottom: 8,
  },
  tabText: {
    fontSize: 17,
    color: "#fff",
  },
  selectedTab: {
    paddingHorizontal: 10,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderColor: "#E94B24",
  },
  selectedTabText: {
    fontSize: 17,
    color: "#E94B24",
    fontWeight: 500,
  },
});
