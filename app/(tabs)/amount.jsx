import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { getEngToBnNumber } from "../../utils/get-eng-to-bn";
import { SafeAreaView } from "react-native-safe-area-context";
import { formatPrice } from "../../utils/format-price";
import { getTotalAmountByMember } from "../../utils/total-amount-by-member";
import { getTotalAmount } from "../../utils/total-amount";
import getInvoices from "../../utils/invoices";
const TotalAmountScreen = () => {
  const invoices = getInvoices();

  return (
    <SafeAreaView className="flex-1 rounded-sm p-5 bg-white">
      <View className="flex justify-center items-center py-3">
        <Text className="text-3xl text-center font-bold py-2">মোট অর্থ</Text>
      </View>

      <ScrollView horizontal>
        <View style={styles.tableContainer}>
          <View style={styles.headerRow}>
            <Text className="w-10 border-r pl-2">ক্র.</Text>
            <Text className="w-44 pl-2 border-r">সদস্য</Text>
            <Text className="w-36 pl-2 border-r">জুলাই</Text>
            <Text className="w-36 pl-2 border-r">আগস্ট</Text>
            <Text className="w-36 pl-2 border-r">সেপ্টেম্বর</Text>
            <Text className="w-36 pl-2 border-r">অক্টোবর</Text>
            <Text className="w-36 pl-2 border-r">নভেম্বর</Text>
            <Text className="w-36 pl-2 border-r">ডিসেম্বর</Text>
            <Text className="w-36 pl-2 border-r">জানুয়ারি</Text>
            <Text className="w-36 pl-2 border-r">ফেব্রুয়ারি</Text>
            <Text className="w-36 pl-2 border-r">মার্চ</Text>
            <Text className="w-36 pl-2 border-r">এপ্রিল</Text>
            <Text className="w-36 pl-2 border-r">মে</Text>
            <Text className="w-36 pl-2 border-r">জুন</Text>
            <Text className="w-36 pl-2">মোট</Text>
          </View>

          <ScrollView>
            {invoices.map((item, index) => (
              <View key={index} style={styles.row}>
                <Text className="w-10 border-r pl-2">
                  {getEngToBnNumber(index + 1)}
                </Text>
                <Text className="w-44 pl-2 border-r">{item.memberName}</Text>
                <Text
                  className="w-36 pl-2 border-r"
                  style={item?.July < 1500 && styles.red}
                >
                  {formatPrice(item.July)}
                </Text>
                <Text
                  className="w-36 pl-2 border-r"
                  style={item?.August < 1500 && styles.red}
                >
                  {formatPrice(item.August)}
                </Text>
                <Text
                  className="w-36 pl-2 border-r"
                  style={item?.September < 1500 && styles.red}
                >
                  {formatPrice(item.September)}
                </Text>
                <Text
                  className="w-36 pl-2 border-r"
                  style={item?.October < 1500 && styles.red}
                >
                  {formatPrice(item.October)}
                </Text>
                <Text
                  className="w-36 pl-2 border-r"
                  style={item?.November < 1500 && styles.red}
                >
                  {formatPrice(item.November)}
                </Text>
                <Text
                  className="w-36 pl-2 border-r text-red-400"
                  style={item?.December < 1500 && styles.red}
                >
                  {formatPrice(item.December)}
                </Text>
                <Text
                  className="w-36 pl-2 border-r text-red-400"
                  style={item?.January < 1500 && styles.red}
                >
                  {formatPrice(item.January)}
                </Text>
                <Text
                  className="w-36 pl-2 border-r"
                  style={item?.February < 1500 && styles.red}
                >
                  {formatPrice(item.February)}
                </Text>
                <Text
                  className="w-36 pl-2 border-r"
                  style={item?.March < 1500 && styles.red}
                >
                  {formatPrice(item.March)}
                </Text>
                <Text
                  className="w-36 pl-2 border-r"
                  style={item?.April < 1500 && styles.red}
                >
                  {formatPrice(item.April)}
                </Text>
                <Text
                  className="w-36 pl-2 border-r"
                  style={item?.May < 1500 && styles.red}
                >
                  {formatPrice(item.May)}
                </Text>
                <Text
                  className="w-36 pl-2 border-r"
                  style={item?.June < 1500 && styles.red}
                >
                  {formatPrice(item.June)}
                </Text>

                <Text className="w-36 pl-2 font-bold" style={styles.bold}>
                  {formatPrice(getTotalAmountByMember(item))}
                </Text>
              </View>
            ))}
            <View className="py-3 px-8" style={styles.totalAmount}>
              <Text className="text-2xl font-bold">সর্বমোট:</Text>
              <Text className="text-2xl font-bold">
                {formatPrice(getTotalAmount(invoices))}
              </Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#cbd5e1",
    overflow: "hidden",
    marginHorizontal: 16,
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#e5e7eb",
    paddingVertical: 10,
  },

  row: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#cbd5e1",
  },
  red: {
    color: "#ff0000",
  },
  bold: {
    fontWeight: "bold",
  },
  totalAmount: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "space-between",
    flexDirection: "row",
  },
});

export default TotalAmountScreen;
