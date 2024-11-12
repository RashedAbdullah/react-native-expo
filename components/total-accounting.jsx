import { View, Text } from "react-native";
import React from "react";
import getInvestments from "../utils/investments";
import getInvoices from "../utils/invoices";
import getExpenses from "../utils/expenses";
import { getTotalAmount } from "../utils/total-amount";
import { formatPrice } from "../utils/format-price";
import { getTotalInvestment } from "../utils/total-investment";
import { getTotalPaidAmount } from "../utils/total-paid-amount";
import { getTotalProfitAmount } from "../utils/total-profit";
import { getTotalCost } from "../utils/total-cost";
import { getTotalShare } from "@/utils/total-share";
import { getEngToBnNumber } from "@/utils/get-eng-to-bn";
const TotalAccounting = () => {
  const investments = getInvestments();
  const invoices = getInvoices();
  const expenses = getExpenses();

  // some issues:
  const deposit = getTotalAmount(invoices) - getTotalInvestment(investments);
  const costs = deposit - getTotalCost(expenses);
  const currentDeposit =
    costs + getTotalPaidAmount(investments) + getTotalProfitAmount(investments);

  return (
    <View>
      <View className="flex lg:flex-row flex-col justify-between mt-10">
        <View className="p-4 lg:w-1/2 md:w-full">
          <Text className="text-4xl">{getEngToBnNumber(invoices.length)}</Text>
          <Text>মোট সদস্য-সংখ্যা</Text>
        </View>
        <View className="lg:border-r-2 border-b-2 lg:hidden md:block"></View>
        <View className="p-4 lg:w-1/2 md:w-full">
          <Text className="text-4xl">
            {getEngToBnNumber(getTotalShare(invoices))}
          </Text>
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
  );
};

export default TotalAccounting;
