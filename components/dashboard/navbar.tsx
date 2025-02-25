import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useAuth } from "../../context/auth_context";
const homeIcon = require("../../assets/icons/navbar/home.svg");
const tableIcon = require("../../assets/icons/navbar/table.svg");
const menuIcon = require("../../assets/icons/navbar/menu.svg");
const userIcon = require("../../assets/icons/navbar/user.svg");
const reportIcon = require("../../assets/icons/navbar/report.svg");
const settingsIcon = require("../../assets/icons/navbar/settings.svg");

export default function Navbar() {
  const auth = useAuth();

  const navList = [
    {
      label: "Home",
      icon: homeIcon,
      path: "Home",
    },
    {
      label: "Table Map",
      icon: tableIcon,
      path: "Table",
    },
    {
      label: "Menu List",
      icon: menuIcon,
      path: "Menu",
    },
    {
      label: "Employees",
      icon: userIcon,
      path: "Employees",
    },
    {
      label: "Reports",
      icon: reportIcon,
      path: "Reports",
    },
    {
      label: "Settings",
      icon: settingsIcon,
      path: "Settings",
    },
  ];

  const userData = {
    name: "Isabella",
    role: "Admin",
    time: "0.00 h.",
  };

  const handleLogOut = async () => {
    auth.logout();
  };

  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbarList}>
        {navList.map((i) => {
          return (
            <TouchableOpacity
              key={`Navbar links: ${i.path}`}
              onPress={() => console.log(`Navigate to: ${i.path}`)}
              style={
                i.path === "Home"
                  ? { ...styles.navbarLink, ...styles.linkSelected }
                  : styles.navbarLink
              }
            >
              <Image source={i.icon} />
              <Text style={styles.navbarLinkText}>{i.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.userInfoContainer}>
        <TouchableOpacity
          onPress={() => console.log("switch")}
          style={styles.userSwitchBtn}
        >
          <Image source={require("../../assets/icons/utils/switch.svg")} />
        </TouchableOpacity>

        <View style={styles.userInfoContent}>
          <Text style={styles.userInfoText}>{userData.name}</Text>
          <Text style={styles.userInfoText}> • </Text>
          <Text style={styles.userInfoText}>{userData.role} UI</Text>
        </View>

        <View style={styles.userInfoTimeContainer}>
          <Image source={require("../../assets/icons/utils/clock.svg")} />
          <Text style={styles.userInfoTime}>{userData.time}</Text>
        </View>
      </View>

      <View style={styles.navbarFooter}>
        <TouchableOpacity onPress={handleLogOut} style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    height: "100%",
    width: "20%",
    borderRightWidth: 1,
    borderColor: "#3a3a3a",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // navbar list
  navbarList: {
    padding: 20,
    flexDirection: "column",
    gap: 10,
    marginTop: 24,
    width: "100%",
  },
  navbarLink: {
    flexDirection: "row",
    gap: 15,
    borderRadius: 12,
    padding: 12,
  },
  linkSelected: {
    backgroundColor: "#E94B24",
  },
  navbarLinkText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 20,
  },

  // user info
  userInfoContainer: {
    padding: 20,
    flexDirection: "column",
    gap: 15,
    width: "100%",
  },
  userSwitchBtn: {
    backgroundColor: "#0F69B3",
    width: 42,
    height: 42,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  userInfoContent: {
    flexDirection: "row",
  },
  userInfoText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 1,
  },
  userInfoTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#E94B24",
    width: 84,
    borderRadius: 50,
    padding: 6,
  },
  userInfoTime: {
    color: "#fff",
    fontSize: 12,
  },

  // navbar footer
  navbarFooter: {
    width: "100%",
    padding: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logoutBtn: {
    backgroundColor: "#0F69B3",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    width: "90%",
  },
  logoutText: {
    color: "#fff",
    letterSpacing: 1,
  },
});
