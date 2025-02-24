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
        <View>
          <Text>Settings</Text>

          <View>
            <TouchableOpacity>
              <Text>Edit config</Text>
            </TouchableOpacity>
            <TextInput onChangeText={setSearchText} value={searchText} />
          </View>
        </View>

        <View>
          {settingsNavList.map((i) => {
            const isSelected = i === settingsView;

            return (
              <TouchableOpacity
                key={`settings: ${i}`}
                onPress={() => setSettingsView(i)}
                style={isSelected ? styles.selectedTab : styles.settingsTab}
              >
                <Text>{i}</Text>
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
  },

  // tabs
  settingsTab: {},
  selectedTab: {},
});
