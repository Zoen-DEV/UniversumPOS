import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { removeSecureData } from "../../utils/store/auth_store";
const homeIcon = require("../../assets/icons/navbar/home.svg");
const tableIcon = require("../../assets/icons/navbar/table.svg");
const menuIcon = require("../../assets/icons/navbar/menu.svg");
const userIcon = require("../../assets/icons/navbar/user.svg");
const reportIcon = require("../../assets/icons/navbar/report.svg");
const settingsIcon = require("../../assets/icons/navbar/settings.svg");

export default function Navbar() {
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
    try {
      await removeSecureData();
    } catch (error) {}
  };

  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbarList}>
        {navList.map((i) => {
          return (
            <TouchableOpacity
              key={`Navbar links: ${i.path}`}
              onPress={() => console.log(`Navigate to: ${i.path}`)}
              style={styles.navbarLink}
            >
              <Image source={i.icon} style={styles.navbarLinkImage} />
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
          <Text style={styles.userInfoName}>{userData.name}</Text>
          <Text> • </Text>
          <Text style={styles.userInfoRole}>{userData.role} UI</Text>
        </View>

        <View style={styles.userInfoTimeContainer}>
          <Image source={require("../../assets/icons/utils/clock.svg")} />
          <Text style={styles.userInfoTime}>{userData.time}</Text>
        </View>
      </View>

      <View style={styles.navbarFooter}>
        <TouchableOpacity onPress={handleLogOut} style={styles.logoutBtn}>
          Log out
        </TouchableOpacity>
        <Text style={styles.navbarFooterText}>© Universum Restaurant</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {},

  // navbar list
  navbarList: {},
  navbarLink: {},
  navbarLinkImage: {},
  navbarLinkText: {},

  // user info
  userInfoContainer: {},
  userSwitchBtn: {},
  userInfoContent: {},
  userInfoName: {},
  userInfoRole: {},
  userInfoTimeContainer: {},
  userInfoTime: {},

  // navbar footer
  navbarFooter: {},
  logoutBtn: {},
  navbarFooterText: {},
});
