import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import * as Progress from "react-native-progress";
import { useAuth } from "../../context/auth_context";

interface Props {
  setShowUpdatingModal: Dispatch<SetStateAction<boolean>>;
  isDashboard: boolean;
}

export default function UpdatingCard({
  setShowUpdatingModal,
  isDashboard,
}: Props) {
  const auth = useAuth();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 0.1;
        return newProgress > 1 ? 1 : newProgress;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 1) {
      setShowUpdatingModal(false);
      auth.login("user_token")
    }
  }, [progress]);

  return (
    <View
      style={
        isDashboard
          ? { ...styles.cardContainer, ...styles.cardDashboardBackground }
          : { ...styles.cardContainer, ...styles.cardAuthBackground }
      }
    >
      <View style={styles.contentContainer}>
        <Image
          source={require("../../assets/images/update.png")}
          style={styles.updateImage}
        />

        <Text style={styles.contentTitle}>Updating</Text>
        <Text style={styles.contentText}>
          Downloading the lastest UPOS Restaurant version. Wait a moment.
        </Text>
      </View>

      <View style={styles.loaderContainer}>
        <Progress.Bar
          progress={progress}
          width={200}
          height={42}
          borderRadius={12}
          color="#6A5AE0"
        />
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
    borderRadius: 18,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#252057",
  },
  cardAuthBackground: {
    backgroundColor: "rgba(37, 32, 87, 0.50)",
  },
  cardDashboardBackground: {
    backgroundColor: "rgba(37, 32, 87, 1)",
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
  loaderContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 24,
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
