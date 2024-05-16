import React from "react";
import { Entypo, FontAwesome6, AntDesign } from "@expo/vector-icons";

interface IconProps {
  name: string;
  color?: string;
  size?: number;
  style?: object;
  iconSet: string;
}

const AppIcon = ({
  name,
  size = 24,
  color = "gray",
  iconSet,
  style,
}: IconProps) => {
  switch (iconSet) {
    case "FontAwesome6":
      return (
        <FontAwesome6 name={name} size={size} color={color} style={style} />
      );
    case "Entypo":
      //@ts-ignore//
      return <Entypo name={name} size={size} color={color} style={style} />;
    case "AntDesign":
      //@ts-ignore//
      return <AntDesign name={name} size={size} color={color} style={style} />;
    default:
      return null;
  }
};

export default AppIcon;
