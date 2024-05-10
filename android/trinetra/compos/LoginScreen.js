import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import asyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
  
    // You can add your login logic here, such as sending the email and password to your backend for authentication
    console.log('Email:', email);
    console.log('Password:', password);

    if(email=='admin@gmail.com' && password=='admin'){
      asyncStorage.setItem('user', email);
      setEmail('');
      setPassword('');
  
      router.replace('/');
    }else{
      alert('Invalid Credentials');
    }
    // Reset the form after login attempt
   
    
    
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default LoginForm;