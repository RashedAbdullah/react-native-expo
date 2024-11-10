import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SettingsScreen = () => {
  const users = [
    { id: 1, name: "Rashed Abdullah" },
    { id: 2, name: "Labib Irfan" },
    { id: 3, name: "Ismat Noman" },
  ];

  return (
    <View className="min-h-screen bg-white p-4">
      <Text className="text-red-500 text-lg mb-4">Settings Screen</Text>

      {users.map((user) => (
        <View key={user.id} className="mb-2">
          <Text className="text-gray-800">{user.name}</Text>
          <Link
            href={{
              pathname: `settings/user/${user.name.replace(" ", "")}`,
              params: { id: user.id },
            }}
            className="text-blue-500"
          >
            View {user?.name}'s Settings
          </Link>
          <Image
            style={styles.image}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});

export default SettingsScreen;
