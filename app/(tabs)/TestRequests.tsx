import DefaultButton from '@/components/ProfilePage/defaultBtn';
import { getProducts } from '@/services/products';
import { OrderByUser, Product } from '@/services/types';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { getOrdersByUserId } from '@/services/orders_by_user_id';

export default function TestRequests() {
    const [orders, setOrders] = useState<OrderByUser[] | null>([]); // Для хранения результата запроса
    const [error, setError] = useState<string | null>(null); // Для обработки ошибок

    const fetchOrders = async () => {
        try {
            const data = await getOrdersByUserId('1'); // Ожидаем выполнения функции
            setOrders([data]); // Оборачиваем объект в массив
            setError(null); // Сбрасываем ошибку
        } catch (err) {
            setError((err as Error).message); // Устанавливаем сообщение об ошибке
            setOrders([]); // Сбрасываем данные
        }
    };
    

    return (
        <ScrollView>
            <View style={styles.margin}>
            </View>
            <DefaultButton
                title="Запрос"
                iconUrl={require('../../assets/images/send-line.png')}
                onPressFun={fetchOrders} // Вызываем функцию для получения данных
            />
            <Text style={styles.text}>
                {(() => {
                    if (error) {
                        return `Ошибка: ${error}`; // Выводим ошибку, если она есть
                    } 
                    else if (orders) {
                        return JSON.stringify(orders, null, 2); // Выводим продукты в формате JSON
                    } 
                    else {
                        return 'Нажмите "Запрос" для получения данных'; // Текст по умолчанию
                    }
                })()}
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        fontSize: 14,
    },

    margin: {
        height: 16,
    }
});