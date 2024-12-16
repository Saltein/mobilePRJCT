import React, { useState, Dispatch, SetStateAction } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import DefaultButton from '../ProfilePage/defaultBtn';
import DefaultSeparator from '../ProfilePage/defaultSeparator';
import { registrateUser } from '../../services/regitrate_user';

interface RegistrationScreenProps {
    onRegistration: () => void; // Пропс для обновления состояния входа
    onLogin: () => void;
}

export default function RegistrationScreen({ onRegistration, onLogin }: RegistrationScreenProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegistration = async () => {
        // Проверка заполнения всех полей
        if (!email || !password || !confirmPassword || !name || !phone) {
            Alert.alert('Ошибка', 'Пожалуйста, заполните все поля');
            return;
        }

        // Проверка совпадения паролей
        if (password !== confirmPassword) {
            Alert.alert('Ошибка', 'Пароли не совпадают');
            return;
        }

        try {
            // Выполнение регистрации
            const user = await registrateUser(email, password, name, phone);
            console.log('Пользователь зарегистрирован:', user);
            onRegistration(); // Обновление состояния после успешной регистрации
        } catch (error) {
            Alert.alert('Ошибка', 'Не удалось зарегистрироваться. Попробуйте снова.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Регистрация</Text>
            <TextInput
                id='name'
                style={styles.input}
                placeholder="Имя"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                id='phone'
                style={styles.input}
                placeholder="Телефон"
                value={phone}
                onChangeText={setPhone}
            />
            <DefaultSeparator />
            <TextInput
                id='email'
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                id='password'
                style={styles.input}
                placeholder="Пароль"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                id='confirmPassword'
                style={styles.input}
                placeholder="Подтвердите пароль"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <DefaultButton
                title='Зарегистрироваться'
                onPressFun={handleRegistration}
                iconUrl={require('../../assets/images/check.png')}
            />
            <DefaultSeparator />
            <Pressable onPress={onLogin}>
                <View style={styles.regButton}>
                    <Text style={styles.regText}>Войти</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f2f0',
        gap: 8,
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
});
