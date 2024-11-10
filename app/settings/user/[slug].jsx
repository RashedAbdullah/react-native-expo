import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const users = [
  { id: 1, name: "Rashed Abdullah" },
  { id: 2, name: "Labib irfan" },
  { id: 3, name: "Ismat noman" },
];

const SingleSettingScreen = (props) => {
  const { slug, id } = useLocalSearchParams();
  const singleUser = users.find((user) => user.id.toString() === id);
  console.log(slug);
  return (
    <View className="min-h-screen bg-white flex justify-center items-center">
      <Text className="text-3xl font-bold">{singleUser.name}</Text>
    </View>
  );
};

export default SingleSettingScreen;
