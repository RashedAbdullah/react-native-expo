import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { TiroBangla_400Regular } from "@expo-google-fonts/tiro-bangla";
import { getEngToBnNumber } from "@/utils/get-eng-to-bn";
import { Link } from "expo-router";

const HomePage = () => {
  const [fontsLoaded] = useFonts({
    TiroBangla: TiroBangla_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  // Demo data to simulate async functions
  const invoices = [
    { id: 1, amount: 1500, share: 2 },
    { id: 2, amount: 2500, share: 3 },
  ];
  const investments = [
    { id: 1, investment: 2000, paidAmount: 1800, profit: 500 },
  ];
  const expenses = [{ id: 1, cost: 300 }];

  // Demo helper functions to replace async data-fetching functions
  const getTotalAmount = (items) =>
    items.reduce((total, item) => total + item.amount, 0);
  const getTotalShare = (items) =>
    items.reduce((total, item) => total + item.share, 0);
  const getTotalInvestment = (items) =>
    items.reduce((total, item) => total + item.investment, 0);
  const getTotalPaidAmount = (items) =>
    items.reduce((total, item) => total + item.paidAmount, 0);
  const getTotalProfitAmount = (items) =>
    items.reduce((total, item) => total + item.profit, 0);
  const getTotalCost = (items) =>
    items.reduce((total, item) => total + item.cost, 0);
  const formatPrice = (amount) => `${amount.toFixed(2)} BDT`;

  const deposit = getTotalAmount(invoices) - getTotalInvestment(investments);
  const costs = deposit - getTotalCost(expenses);
  const currentDeposit =
    costs + getTotalPaidAmount(investments) + getTotalProfitAmount(investments);

  return (
    <ScrollView className="flex-1 bg-white p-6">
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
      <View>
        <View className="flex lg:flex-row flex-col justify-between mt-10">
          <View className="p-4 lg:w-1/2 md:w-full">
            <Text className="text-4xl">{invoices.length}</Text>
            <Text>মোট সদস্য-সংখ্যা</Text>
          </View>
          <View className="lg:border-r-2 border-b-2 lg:hidden md:block"></View>
          <View className="p-4 lg:w-1/2 md:w-full">
            <Text className="text-4xl">{getTotalShare(invoices)}</Text>
            <Text>শেয়ার সংখ্যা</Text>
          </View>
          <View className="lg:border-r-2 border-b-2 lg:hidden md:block"></View>
          <View className="p-4 lg:w-1/2 md:w-full">
            <Text className="text-4xl">
              {formatPrice(getTotalAmount(invoices))}
            </Text>
            <Text>শেয়ার বাবদ টোটাল জমা</Text>
          </View>
          <View className="lg:border-r-2 border-b-2 lg:hidden md:block"></View>
          <View className="p-4 lg:w-1/2 md:w-full">
            <Text className="text-4xl">
              {formatPrice(getTotalInvestment(investments))}
            </Text>
            <Text>ইনভেস্ট করা হয়েছে</Text>
          </View>
          <View className="lg:border-r-2 border-b-2 lg:hidden md:block"></View>
          <View className="p-4 lg:w-1/2 md:w-full">
            <Text className="text-4xl">
              {formatPrice(getTotalPaidAmount(investments))}
            </Text>
            <Text>ইনভেস্ট থেকে জমা</Text>
          </View>
          <View className="lg:border-r-2 border-b-2 lg:hidden md:block"></View>
          <View className="p-4 lg:w-1/2 md:w-full">
            <Text className="text-4xl">
              {formatPrice(getTotalProfitAmount(investments))}
            </Text>
            <Text>মুনাফা বাবদ টোটাল জমা</Text>
          </View>
          <View className="lg:border-r-2 border-b-2 lg:hidden md:block"></View>
          <View className="p-4 lg:w-1/2 md:w-full">
            <Text className="text-4xl">
              {formatPrice(getTotalCost(expenses))}
            </Text>
            <Text>ব্যাংক ফি ও অনান্য বাবাদ খরচ</Text>
          </View>
          <View className="lg:border-r-2 border-black border-b-2 lg:hidden md:block"></View>
          <View className="p-4 lg:w-1/2 md:w-full">
            <Text className="text-4xl font-semibold">
              {formatPrice(currentDeposit)}
            </Text>
            <Text>বর্তমান জমা</Text>
          </View>
        </View>
      </View>

      {/* Footer Section with Links */}
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
          <Link href={"/"} className="mx-2">
            <Text className="text-white text-sm">আমাদের সম্পর্কে</Text>
          </Link>
          <Link href={"/"} className="mx-2">
            <Text className="text-white text-sm">যোগাযোগ</Text>
          </Link>
        </View>

        <Text className="text-gray-400 text-xs text-center">
          © {getEngToBnNumber(new Date().getFullYear())} সিহাবুল খায়ের
          ফাউন্ডেশন. স্বত্ব সংরক্ষিত।
        </Text>
      </View>
    </ScrollView>
  );
};

export default HomePage;
