import { View, Text, ScrollView } from "react-native";
import { policies } from "../../data/policies";
import { getEngToBnNumber } from "../../utils/get-eng-to-bn";
import { SafeAreaView } from "react-native-safe-area-context";

const PolicyPage = () => {
  return (
    <ScrollView>
      <SafeAreaView className="flex-1 bg-white p-6 pr-5">
        <Text className="text-3xl font-extrabold text-blue-600 py-5 text-center">
          নীতিমালা
        </Text>
        <View className="space-y-4">
          {policies.map((policy, index) => (
            <View key={index} className="px-4 py-2 flex-row text-lg">
              <Text className="text-lg font-semibold text-gray-700 mr-3">
                {getEngToBnNumber(index + 1)}.
              </Text>
              <Text
                className={`text-gray-800 text-wrap text-lg ${
                  policy.includes(
                    "যথা সময়ে (প্রতি মাসের ১৫ তারিখের ভেতর) নির্ধারিত টাকা দিতে না পারলে দায়িত্বশীলদেরকে অবগত করবে।"
                  ) && "font-bold text-red-600"
                } ${
                  policy.includes(
                    "পরপর দুই মাস নির্ধারিত টাকা না দিলে সে সমিতির আইন লঙ্ঘনকারী হিসেবে বিবেচিত হবে।"
                  ) && "font-bold text-red-600"
                }`}
              >
                {policy}
              </Text>
            </View>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PolicyPage;
