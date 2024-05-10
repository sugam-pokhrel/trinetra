import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { Stack } from 'expo-router'
import LoginForm from '../compos/LoginScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function index() {

  useEffect(()=>{
    AsyncStorage.getItem('user').then((user)=>{
      console.log('User:', user);
    }
    )
    
  })
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Stack.Screen options={{ title: "Login" }} />

    <LoginForm/>
  </View>

  )
}