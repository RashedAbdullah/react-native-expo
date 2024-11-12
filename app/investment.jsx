import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { formatPrice } from "@/utils/format-price";
import getInvestments from "../utils/investments";
import { SafeAreaView } from "react-native-safe-area-context";

const InvestmentScreen = () => {
  const options = { year: "numeric", month: "long", day: "numeric" };

  const investments = getInvestments();

  const calculateTotals = () => ({
    totalInvestment: investments.reduce((sum, inv) => sum + inv.amount, 0),
    totalPaidAmount: investments.reduce((sum, inv) => sum + inv.paidAmount, 0),
    totalDueAmount: investments.reduce(
      (sum, inv) => sum + (inv.amount - inv.paidAmount),
      0
    ),
    totalProfitAmount: investments.reduce(
      (sum, inv) => sum + inv.profitAmount,
      0
    ),
  });

  const totals = calculateTotals();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ইনভেস্টমেন্টস</Text>
      {investments.length > 0 ? (
        <ScrollView horizontal style={styles.scrollContainer}>
          <View>
            <View style={styles.headerRow}>
              <Text className="border-r w-40 font-bold text-center">
                কনজিউমার
              </Text>
              <Text className="border-r w-40 font-bold text-center">
                এমাউন্ট
              </Text>
              <Text className="border-r w-40 font-bold text-center">
                পরিশোধিত
              </Text>
              <Text className="border-r w-40 font-bold text-center">বকেয়া</Text>
              <Text className="border-r w-48 font-bold text-center">
                নেওয়ার তারিখ
              </Text>
              <Text className="border-r w-48 font-bold text-center">
                পরিশোধের শেষ ডেট
              </Text>
              <Text className="border-r w-40 font-bold text-center">
                মুনাফা
              </Text>
              <Text className="w-40 pl-3 font-bold text-center">হিসাব</Text>
            </View>
            <ScrollView style={styles.verticalScroll}>
              {investments.map((item, index) => (
                <View key={index} style={styles.row}>
                  <Text className="border-r w-40 pl-3">
                    {item.consumerName}
                  </Text>
                  <Text className="border-r w-40 pl-3">
                    {formatPrice(item.amount)}
                  </Text>
                  <Text className="border-r w-40 pl-3">
                    {formatPrice(item.paidAmount)}
                  </Text>
                  <Text className="border-r w-40 pl-3">
                    {formatPrice(item.amount - item.paidAmount)}
                  </Text>
                  <Text className="border-r w-48 pl-3">
                    {new Date(item.takenDate).toLocaleDateString("bn", options)}{" "}
                    ইং
                  </Text>
                  <Text className="border-r w-48 pl-3">
                    {new Date(item.paymentLastDate).toLocaleDateString(
                      "bn",
                      options
                    )}{" "}
                    ইং
                  </Text>
                  <Text className="border-r w-40 pl-3">
                    {formatPrice(item.profitAmount)}
                  </Text>
                  <Text className="w-40 pl-3 text-center">{item.status}</Text>
                </View>
              ))}
              <View style={styles.footer}>
                <Text className="border-r w-40 pl-3 text-center font-bold">
                  মোট
                </Text>
                <Text className="border-r w-40 pl-3 font-bold">
                  {formatPrice(totals.totalInvestment)}
                </Text>
                <Text className="border-r w-40 pl-3 font-bold">
                  {formatPrice(totals.totalPaidAmount)}
                </Text>
                <Text className="border-r w-40 pl-3 font-bold">
                  {formatPrice(totals.totalDueAmount)}
                </Text>
                <Text className="border-r w-48 pl-3"></Text>
                <Text className="border-r w-48 pl-3"></Text>
                <Text className="border-r w-40 pl-3 font-bold">
                  {formatPrice(totals.totalProfitAmount)}
                </Text>
                <Text className="w-40 pl-3"></Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      ) : (
        <Text style={styles.noDataText}>কোনো ইনভেস্টমেন্ট পাওয়া যায়নি।</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  scrollContainer: {
    flexDirection: "row",
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    paddingVertical: 8,
  },
  headerCell: {
    flex: 1,
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    paddingHorizontal: 4,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  cell: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    paddingHorizontal: 4,
  },
  verticalScroll: {
    maxHeight: 400,
  },
  footer: {
    flexDirection: "row",
    paddingVertical: 8,
    backgroundColor: "#f0f0f0",
  },
  footerCell: {
    flex: 1,
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    paddingHorizontal: 4,
  },
  noDataText: {
    textAlign: "center",
    color: "#999",
    fontSize: 16,
    marginTop: 20,
  },
});

export default InvestmentScreen;
