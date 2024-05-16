export interface User {
  id: number | string;
  name?: string;
  username?: string;
  image?: string;
}

export interface TweetProps {
  id: number | string;
  content?: string;
  image?: string;
  numberOfComments?: number;
  numberOfRetweets?: number;
  numberOfLikes?: number;
  impressions?: number;
  user: User;
}
