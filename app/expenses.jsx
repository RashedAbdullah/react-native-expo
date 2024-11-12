import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import getExpenses from "../utils/expenses";
import { formatPrice } from "@/utils/format-price";
import { SafeAreaView } from "react-native-safe-area-context";

const ExpensesScreen = () => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const expenses = getExpenses();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>খরচের তালিকা</Text>
      {expenses.length > 0 ? (
        <ScrollView horizontal style={styles.scrollContainer}>
          <View>
            <View style={styles.headerRow}>
              <Text className="text-center border-r w-56 font-bold">
                খরচের বিবরণ
              </Text>
              <Text className="text-center border-r w-52 pl-2 font-bold">
                টাকা
              </Text>
              <Text className="text-center w-52 pl-2 font-bold">তারিখ</Text>
            </View>
            <ScrollView style={styles.verticalScroll}>
              {expenses.map((item, index) => (
                <View key={index} style={styles.row}>
                  <Text className="text-center border-r w-56">{item.cost}</Text>
                  <Text className="text-center border-r w-52 pl-2">
                    {formatPrice(item.amount)}
                  </Text>
                  <Text className="text-center w-52 pl-2">
                    {new Date(item.date).toLocaleDateString("bn", options)} ইং
                  </Text>
                </View>
              ))}
              <View style={styles.footer}>
                <Text className="font-bold text-center w-56 border-r">মোট</Text>
                <Text className="font-bold text-center w-52 border-r">
                  {formatPrice(
                    expenses.reduce((sum, exp) => sum + exp.amount, 0)
                  )}
                </Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      ) : (
        <Text style={styles.noDataText}>কোনো খরচের তথ্য পাওয়া যায়নি।</Text>
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
    width: 100,
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
    width: 100,
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
    width: 100,
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

export default ExpensesScreen;
