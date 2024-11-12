import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { getEngToBnNumber } from "@/utils/get-eng-to-bn";
const Footer = () => {
  return (
    <View className="bg-teal-900 mt-10 p-4 mb-10">
      <Text
        style={{ fontFamily: "TiroBangla" }}
        className="text-white text-lg text-center mb-2"
      >
        সিহাবুল খায়ের ফাউন্ডেশন
      </Text>
      <Text className="text-gray-300 text-sm text-center mb-4">
        সেবা ও সহায়তা প্রদান, সামাজিক দায়বদ্ধতা পালনের অঙ্গীকারবদ্ধ।
      </Text>

      {/* Navigation Links */}
      <View className="flex-row justify-center mb-4">
        <Link href={"/investment"} className="mx-2">
          <Text className="text-white text-sm">ইনভেস্টমেন্ট</Text>
        </Link>
        <Link href={"/expenses"} className="mx-2">
          <Text className="text-white text-sm">ব্যায়</Text>
        </Link>
        <Link href={"/"} className="mx-2">
          <Text className="text-white text-sm">আমাদের সম্পর্কে</Text>
        </Link>
      </View>

      <Text className="text-gray-400 text-xs text-center">
        © {getEngToBnNumber(new Date().getFullYear())} সিহাবুল খায়ের ফাউন্ডেশন.
        স্বত্ব সংরক্ষিত।
      </Text>
    </View>
  );
};

export default Footer;
