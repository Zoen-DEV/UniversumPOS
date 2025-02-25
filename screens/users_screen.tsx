import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Navbar from "../components/dashboard/navbar";
import { useState } from "react";
import UpdatingCard from "../components/auth/updating";
import SearchInput from "../components/elements/search_input";

export default function UsersScreen() {
  const { width } = useWindowDimensions();

  const [showNavbar, setShowNavbar] = useState<boolean>(width >= 768);
  const [settingsView, setSettingsView] = useState<string>("About");
  const [update, setUpdate] = useState<boolean>(false);
  const [showFullNavbar, setShowFullNavbar] = useState<boolean>(true);

  const settingsNavList = ["Company", "App", "Taxes & tips", "About"];

  return (
    <LinearGradient
      colors={["#0C0A26", "#252057"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      {showNavbar && (
        <Navbar
          setShowNavbar={setShowNavbar}
          showFullNavbar={showFullNavbar}
          setShowFullNavbar={setShowFullNavbar}
        />
      )}

      <View
        style={
          width >= 768
            ? { ...styles.dashboardContainer, ...styles.dashboardLongContainer }
            : {
                ...styles.dashboardContainer,
                ...styles.dashboardSmallContainer,
              }
        }
      >
        <View
          style={
            width >= 768 ? styles.dashboardHeader : styles.dashboardSmallHeader
          }
        >
          <Text style={styles.dashboardTitle}>Employees</Text>

          {width < 768 && !showNavbar && (
            <TouchableOpacity
              onPress={() => setShowNavbar(true)}
              style={styles.menuBtn}
            >
              <Image
                source={require("../assets/icons/navbar/close.png")}
                style={styles.menuBtnIcon}
              />
            </TouchableOpacity>
          )}

          <View
            style={
              width >= 768 ? styles.headerHandlers : styles.headerSmallHandlers
            }
          >
            <TouchableOpacity
              style={
                width >= 768
                  ? styles.editButton
                  : { ...styles.editButton, ...styles.editSmallButton }
              }
            >
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
                  style={
                    width >= 768
                      ? { ...styles.updateBtn, ...styles.updateLongBtn }
                      : { ...styles.updateBtn, ...styles.updateSmallBtn }
                  }
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
    marginTop: StatusBar.currentHeight,
    flexDirection: "row",
  },

  // dashboard
  dashboardContainer: {
    height: "100%",
    color: "#fff",
    flexDirection: "column",
    alignItems: "center",
  },
  dashboardLongContainer: {
    width: "80%",
  },
  dashboardSmallContainer: {
    width: "100%",
  },

  // header
  dashboardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 32,
    width: "95%",
  },
  dashboardSmallHeader: {
    flexDirection: "column",
    width: "95%",
    paddingVertical: 32,
  },
  dashboardTitle: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 34,
  },
  menuBtn: {
    position: "absolute",
    top: 38,
    alignSelf: "flex-end",
    marginRight: 20,
    borderWidth: 1,
    borderColor: "#0F69B3",
    paddingLeft: 32,
    paddingRight: 10,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: "rgba(12, 10, 39, 0.7)",
  },
  menuBtnIcon: {
    transform: "rotate(180deg)",
  },
  headerHandlers: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 20,
  },
  headerSmallHandlers: {
    marginTop: 24,
    gap: 16,
  },
  editButton: {
    flexDirection: "row",
    gap: 15,
    borderRadius: 12,
    padding: 10,
    backgroundColor: "#E94B24",
  },
  editSmallButton: {
    justifyContent: "center",
    maxWidth: "40%",
  },
  editButtonText: {
    color: "#fff",
    paddingHorizontal: 20,
    fontSize: 16,
  },

  // tabs
  tabsList: {
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  updateLongBtn: {
    width: "30%",
  },
  updateSmallBtn: {
    width: "80%",
  },
  updateBtnText: {
    color: "#fff",
    fontSize: 16,
  },
});
