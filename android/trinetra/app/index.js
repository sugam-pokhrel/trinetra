import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import LoginForm from '../compos/LoginScreen'
export default function index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Stack.Screen options={{ title: "Overview" }} />

    <LoginForm/>
  </View>

  )
}