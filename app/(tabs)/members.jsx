import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { getEngToBnNumber } from "../../utils/get-eng-to-bn";
import { SafeAreaView } from "react-native-safe-area-context";
import { formatPrice } from "../../utils/format-price";
import getInvoices from "../../utils/invoices";

const MembersScreen = () => {
  const invoices = getInvoices();

  return (
    <SafeAreaView className="flex-1 rounded-sm p-5 bg-white">
      <View className="flex justify-center items-center py-3">
        <Text className="text-3xl text-center font-bold py-2">
          সদস্যবৃন্দের তালিকা
        </Text>
      </View>

      <ScrollView horizontal>
        <View style={styles.tableContainer}>
          <View style={styles.headerRow}>
            <Text className="w-10 border-r pl-2">ক্র.</Text>
            <Text className="w-44 pl-2 border-r">সদস্য</Text>
            <Text className="w-44 pl-2 border-r">পদ</Text>
            <Text className="w-20 pl-2 border-r">শেয়ার</Text>
            <Text className="w-32 pl-2 border-r">মোট জমা</Text>
            <Text className="w-36 pl-2">মেম্বারশীপ ডেট</Text>
          </View>

          <ScrollView>
            {invoices.map((item, index) => (
              <View key={index} style={styles.row}>
                <Text className="w-10 border-r pl-2">
                  {getEngToBnNumber(index + 1)}
                </Text>
                <Text className="w-44 pl-2 border-r">{item.memberName}</Text>
                <Text className="w-44 pl-2 border-r">{item.post}</Text>
                <Text className="w-20 pl-2 border-r">
                  {getEngToBnNumber(item.totalShare)}
                </Text>
                <Text className="w-32 pl-2 border-r">
                  {formatPrice(
                    item.July +
                      item.August +
                      item.September +
                      item.October +
                      item.November +
                      item.December +
                      item.January +
                      item.February +
                      item.March +
                      item.April +
                      item.May +
                      item.June
                  )}
                </Text>
                <Text className="w-36 pl-2">{item.membershipDate} ইং</Text>
              </View>
            ))}
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
});

export default MembersScreen;
