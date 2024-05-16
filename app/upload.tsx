import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import tweetData from "../assets/data/tweet";
import colors from "@/config/colors";
const tweet = tweetData[0];

const Upload = () => {
  const [text, setText] = useState("");
  const navigation = useNavigation();

  const handleTweet = () => {
    console.log("Tweet Success", text);
    setText("");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleTweet} style={styles.tweetButton}>
          <Text style={styles.tweetButtonText}>Tweet</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tweetInputContainer}>
        <Image source={{ uri: tweet.user.image }} style={styles.userImage} />
        <TextInput
          placeholder="Write what you want"
          value={text}
          numberOfLines={5}
          multiline
          onChangeText={setText}
          style={styles.textInput}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    padding: 10,
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cancelText: {
    fontSize: 25,
    fontWeight: "100",
  },
  tweetButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  tweetButtonText: {
    color: colors.white,
    textAlign: "center",
  },
  tweetInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textInput: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
});

export default Upload;
