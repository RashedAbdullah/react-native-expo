import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const SeetingsLayoutScreen = ({ chldren }) => {
  return (
    <Stack
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: "gray",
        // },
        // headerTintColor: "#fff",
        // headerTitleStyle: {
        //   fontWeight: "bold",
        // },
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default SeetingsLayoutScreen;
