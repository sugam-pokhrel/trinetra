import React, { useState ,useEffect} from 'react';
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

    if(email=='shreejanpkota009@gmail.com' && password=='testapikey'){
      asyncStorage.setItem('user', JSON.stringify({email, password}));
      setEmail('');
      setPassword('');
  
      router.replace('/');
    }else{
      alert('Invalid Credentials');
    }
    
   
    
    
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your api key"
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