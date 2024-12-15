import DefaultButton from '@/components/ProfilePage/defaultBtn';
import { getProducts } from '@/services/products';
import { Product } from '@/services/types';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';

export default function TestRequests() {
    const [products, setProducts] = useState<Product[] | null>(null); // Для хранения результата запроса
    const [error, setError] = useState<string | null>(null); // Для обработки ошибок

    const fetchProducts = async () => {
        try {
            const data = await getProducts(); // Ожидаем выполнения функции
            setProducts(data); // Сохраняем результат в состояние
            setError(null); // Сбрасываем ошибку
        } catch (err) {
            setError((err as Error).message); // Устанавливаем сообщение об ошибке
            setProducts(null); // Сбрасываем данные
        }
    };

    return (
        <ScrollView>
            <View style={styles.margin}>
            </View>
            <DefaultButton
                title="Запрос"
                iconUrl={require('../../assets/images/send-line.png')}
                onPressFun={fetchProducts} // Вызываем функцию для получения данных
            />
            <Text style={styles.text}>
                {(() => {
                    if (error) {
                        return `Ошибка: ${error}`; // Выводим ошибку, если она есть
                    } 
                    else if (products) {
                        return JSON.stringify(products, null, 2); // Выводим продукты в формате JSON
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
