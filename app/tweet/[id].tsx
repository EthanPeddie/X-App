import React from "react";
import { Text } from "react-native";
import { useGlobalSearchParams } from "expo-router";

import Tweet from "@/components/Tweet";
import tweets from "@/assets/data/tweet";

const TweetScreen = () => {
  const { id } = useGlobalSearchParams();
  const tweet = tweets.find((t) => t.id === id);
  if (!tweet) {
    return <Text>Tweet ${tweet} not found!</Text>;
  }
  return <Tweet tweet={tweet} />;
};

export default TweetScreen;
