import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
export default function index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Stack.Screen options={{ title: "Overview" }} />

    <Text>Open up App.js to start I love yang sin on your app!</Text>
  </View>

  )
}