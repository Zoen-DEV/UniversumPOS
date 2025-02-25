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
import UpdatingCard from "../components/auth/updating";
import SearchInput from "../components/elements/search_input";

export default function DashboardScreen() {
  const [settingsView, setSettingsView] = useState<string>("About");
  const [update, setUpdate] = useState<boolean>(false);

  const settingsNavList = ["Company", "App", "Taxes & tips", "About"];

  return (
    <LinearGradient
      colors={["#0C0A26", "#252057"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
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

            <SearchInput />
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

        <View style={styles.dashboardContent}>
          <View style={styles.dashboardContentFirstRow}>
            <Text style={styles.dashboardContentTitleDevice}>Device name</Text>
            <Text style={styles.deviceNameValue}>Kitchen</Text>
          </View>

          <View style={styles.dashboardContentRow}>
            <View style={styles.dashboardContentColumn}>
              <View style={styles.dashboardContentInfo}>
                <Text style={styles.dashboardContentTitle}>IP</Text>
                <Text style={styles.dashboardContentValue}>168.209.200.1</Text>
              </View>

              <View style={styles.dashboardContentInfo}>
                <Text style={styles.dashboardContentTitle}>Last activated</Text>
                <Text style={styles.dashboardContentValue}>09 / 05 / 2022</Text>
              </View>

              <View style={styles.dashboardContentInfo}>
                <Text style={styles.dashboardContentTitle}>Licence</Text>
                <View style={styles.dashboardLicenceValue}>
                  <View style={styles.dashboardLicenceDot}></View>
                  <Text style={styles.dashboardContentValue}>Active</Text>
                </View>
              </View>
            </View>

            <View style={styles.dashboardContentColumn}>
              <View style={styles.dashboardContentInfo}>
                <Text style={styles.dashboardContentTitle}>MAC</Text>
                <Text style={styles.dashboardContentValue}>
                  00:1e:c2:9e:28:6b
                </Text>
              </View>

              <View style={styles.dashboardContentInfo}>
                <Text style={styles.dashboardContentTitle}>POS version</Text>
                <Text style={styles.dashboardContentValue}>
                  12.09.1 New version available!
                </Text>
                <TouchableOpacity
                  onPress={() => setUpdate(true)}
                  style={styles.updateBtn}
                >
                  <Text style={styles.updateBtnText}>Update now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      {update && (
        <UpdatingCard setShowUpdatingModal={setUpdate} isDashboard={true} />
      )}
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
    gap: 20,
  },
  editButton: {
    flexDirection: "row",
    gap: 15,
    borderRadius: 12,
    padding: 10,
    backgroundColor: "#E94B24",
  },
  editButtonText: {
    color: "#fff",
    paddingHorizontal: 20,
    fontSize: 16,
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

  // content
  dashboardContent: {
    width: "95%",
    paddingVertical: 10,
    flexDirection: "column",
    gap: 16,
  },
  dashboardContentFirstRow: {
    width: "100%",
    paddingVertical: 10,
    gap: 10,
  },
  dashboardContentRow: {
    flexDirection: "row",
  },
  dashboardContentColumn: {
    width: "50%",
    flexDirection: "column",
    gap: 20,
  },
  dashboardContentTitleDevice: {
    color: "#fff",
    fontSize: 16,
  },
  dashboardContentTitle: {
    color: "#afafaf",
    fontSize: 16,
  },
  deviceNameValue: {
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    color: "#fff",
    borderRadius: 12,
    padding: 10,
    fontSize: 16,
  },
  dashboardContentInfo: {
    gap: 6,
  },
  dashboardContentValue: {
    color: "#fff",
    fontSize: 16,
  },
  dashboardLicenceValue: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dashboardLicenceDot: {
    width: 8,
    height: 8,
    backgroundColor: "#22C55E",
    borderRadius: "50%",
  },
  updateBtn: {
    backgroundColor: "#0F69B3",
    padding: 12,
    borderRadius: 12,
    marginTop: 20,
    maxWidth: "30%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  updateBtnText: {
    color: "#fff",
    fontSize: 16,
  },
});
