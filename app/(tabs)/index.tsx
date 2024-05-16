import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import tweetsData from "@/assets/data/tweet";
import Tweet from "@/components/Tweet";
import AppIcon from "@/components/AppIcon";
import colors from "@/config/colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={tweetsData}
        keyExtractor={(tweet) => tweet.id.toString()}
        renderItem={({ item }) => <Tweet tweet={item} />}
        showsVerticalScrollIndicator={false}
      />
      <Link href={"/upload"} asChild>
        <TouchableOpacity style={styles.addButton}>
          <AppIcon
            name="plus"
            iconSet="Entypo"
            color={colors.white}
            size={30}
          />
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 15,
    bottom: 15,
  },
});
