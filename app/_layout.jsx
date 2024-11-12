import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="expenses" options={{ title: "ব্যায় বিবরণ" }} />
      <Stack.Screen name="investment" options={{ title: "ইনভেস্টমেন্টস" }} />
    </Stack>
  );
}
