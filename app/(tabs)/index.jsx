import { View, Text, Image, ScrollView, StatusBar } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { TiroBangla_400Regular } from "@expo-google-fonts/tiro-bangla";
import Footer from "@/components/footer";
import TotalAccounting from "@/components/total-accounting";
const HomePage = () => {
  const [fontsLoaded] = useFonts({
    TiroBangla: TiroBangla_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView className="flex-1 bg-white p-6">
      <StatusBar backgroundColor="#2F4F4F" barStyle="light-content" />
      <View className="flex justify-center items-center mt-8">
        <Image
          source={require("../../assets/images/islamic-banking.jpg")}
          style={{ width: 200, height: 200, resizeMode: "contain" }}
        />
      </View>
      <View className="flex-1 justify-center items-center">
        <Text
          style={{ fontFamily: "TiroBangla" }}
          className="text-4xl text-indigo-900 mb-2 text-center py-2"
        >
          সিহাবুল খায়ের ফাউন্ডেশন
        </Text>
        <Text
          style={{ fontFamily: "TiroBangla" }}
          className="text-base text-gray-700 text-center mb-4"
        >
          (ঐক্য, সম্প্রীতি ও শান্তি প্রতিষ্ঠার প্রত্যয়ে)
        </Text>
        <Text
          style={{ fontFamily: "TiroBangla" }}
          className="text-base text-gray-600 text-center px-4 mb-6"
        >
          সিহাবুল খায়ের একটি আর্থিক সংগঠন। যা গঠন করা হয়েছে, জামিয়া মাদানিয়া
          সিলোনিয়া ২০২০-২১ মেশকাত ব্যাচের স্বেচ্ছায় প্রণোদিত কিছু ছাত্রের
          মাধ্যমে। যার একমাত্র লক্ষ্য ও উদ্দেশ্য হালাল ও বৈধ পন্থায় মুনাফা লাভ
          অথবা সার্বিক সমঝোতায় নির্দিষ্ট কোন খাতে ব্যায়।
        </Text>
      </View>
      <TotalAccounting />
      <Footer />
    </ScrollView>
  );
};

export default HomePage;
