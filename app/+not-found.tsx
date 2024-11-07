import { Link, Stack } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Not Found' }} />
      <ThemedView className="flex-1 items-center justify-center bg-gray-100 p-6">
        <ThemedText type="title" className="text-2xl font-bold text-gray-800">
          এই পৃষ্ঠাটি বিদ্যমান নেই।
        </ThemedText>
        <Link href="/" className="mt-6">
          <ThemedText type="link" className="text-lg font-semibold text-blue-500 underline">
            হোম স্ক্রিনে যান!
          </ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}
