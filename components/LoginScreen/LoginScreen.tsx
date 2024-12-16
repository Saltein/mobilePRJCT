import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Modal, Alert } from 'react-native';
import DefaultButton from '../ProfilePage/defaultBtn';
import DefaultSeparator from '../ProfilePage/defaultSeparator';
import RegistrationScreen from './RegistrationScreen';
import { getUserByEmail } from '../../services/get_user_by_email';
import { checkPassword } from '@/services/check_password';

interface LoginScreenProps {
  onLogin: () => void; // Пропс для обновления состояния входа
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [passwordModal, setPassword] = useState('');

  const [registrationModalVisible, setRegistrationModalVisible] = useState(false);
  const [registration, setRegistration] = useState("");

  const [emai, setLogin] = useState("");

  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [password, setPasswordModal] = useState("");

  const handleEmailLogin = async () => {
    console.log('Email:', email);

    if (!email) {
      Alert.alert('Ошибка', 'Пожалуйста, заполните все поля');
      return; 
    }
    try {
      const data = await getUserByEmail(email);
      
      if (!data) {
        console.log('data:', data);
      }
      setLogin(email); // Обновление состояния после успешной 
      setPasswordModalVisible(true)
    } catch (error) {
      Alert.alert('Такого пользователя не существует. Зарегистрируйтесь')
      console.log(error)
    }
  };

  const handlePasswordLogin = async () => {
    console.log('Email:', email, 'Password:', password);

    if (!password) {
      Alert.alert('Ошибка', 'Пожалуйста, заполните все поля');
      return; 
    }
    try {
      const data = await checkPassword(email, password);
      console.log('data:', data);
      if (!data) {
        console.log('data:', data);
      }
      if (data.message === 'Login_successful'){
        console.log('aboba__________________data:', data);
        onLogin()
      }
    } catch (error) {
      Alert.alert('Неправильный пароль')
      console.log(error)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Вход</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <DefaultButton
        title='Войти'
        onPressFun={() => { handleEmailLogin() }}
        iconUrl={require('../../assets/images/login-line.png')}
      />
      <Modal
        visible={passwordModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setPasswordModalVisible(false)}
      >
        <View style={styles.modal}>
          <View style={styles.modalWindow}>
            <Text style={styles.title}>Введите пароль</Text>
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              value={password}
              onChangeText={setPasswordModal}
              secureTextEntry
            />
            <DefaultButton
              title='Войти'
              onPressFun={() => { handlePasswordLogin() }}
              iconUrl={require('../../assets/images/login-line.png')}
            />
          </View>
        </View>
      </Modal>


      <DefaultSeparator />


      <Pressable onPress={() => { setRegistrationModalVisible(true) }}>
        <View style={styles.regButton}>
          <Text style={styles.regText}>Зарегистрироватьcя</Text>
        </View>
      </Pressable>
      <Modal
        visible={registrationModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setRegistrationModalVisible(false)}
      >
        <View style={styles.modal}>
          <View style={styles.modalWindow}>
            <RegistrationScreen onRegistration={() => { }} onLogin={() => setRegistrationModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f2f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    width: '100%',
  },
  regButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    top: -16,
  },
  regText: {
    color: '#00f',
    textDecorationLine: 'underline',
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalWindow: {
    backgroundColor: "#f5f2f0",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    elevation: 16,
    shadowColor: '#000',
    minWidth: '90%',
    maxWidth: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
