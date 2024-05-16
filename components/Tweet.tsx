import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

import { TweetProps } from "@/config/type";
import AppIcon from "./AppIcon";

interface Props {
  tweet: TweetProps;
}

const Tweet = ({ tweet }: Props) => {
  return (
    <Link href={`/tweet/${tweet.id}`} asChild>
      <Pressable style={styles.container}>
        {tweet.user.image && (
          <Image source={{ uri: tweet.user.image }} style={styles.userImage} />
        )}
        <View style={styles.contentContainer}>
          <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>{tweet.user.name}</Text>
            <Text>@{tweet.user.username}</Text>
            <Text>· 42s</Text>
            <AppIcon
              name="dots-three-horizontal"
              iconSet="Entypo"
              size={25}
              style={styles.dotsIcon}
            />
          </View>
          <Text style={styles.tweetContent}>{tweet.content}</Text>
          {tweet.image && (
            <Image source={{ uri: tweet.image }} style={styles.tweetImage} />
          )}
          <View style={styles.metricsContainer}>
            <View style={styles.metricItem}>
              <AppIcon name="comment" iconSet="FontAwesome6" size={25} />
              <Text>{tweet.numberOfComments}</Text>
            </View>
            <View style={styles.metricItem}>
              <AppIcon name="swap" iconSet="AntDesign" size={25} />
              <Text>{tweet.numberOfRetweets}</Text>
            </View>
            <View style={styles.metricItem}>
              <AppIcon name="heart-outlined" iconSet="Entypo" size={25} />
              <Text>{tweet.numberOfLikes}</Text>
            </View>
            <View style={styles.metricItem}>
              <AppIcon name="barschart" iconSet="AntDesign" size={25} />
              <Text>{tweet.impressions || 0}</Text>
            </View>
            <View style={styles.metricItem}>
              <AppIcon name="share-alternative" iconSet="Entypo" size={25} />
            </View>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#ffff",
    padding: 10,
    marginBottom: 5,
    borderBottomWidth: 0.2,
    borderRadius: 10,
    gap: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    flex: 1,
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  userName: {
    fontWeight: "900",
    fontSize: 18,
  },
  dotsIcon: {
    marginLeft: "auto",
  },
  tweetContent: {
    fontSize: 18,
    lineHeight: 20,
  },
  tweetImage: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginTop: 5,
    borderRadius: 10,
  },
  metricsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  metricItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

export default Tweet;
