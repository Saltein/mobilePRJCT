import OrderCard from '@/components/OrdersPage/OrderCard/OrderCard';
import { StyleSheet, FlatList, View, Text, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getOrdersByUserId } from '@/services/orders_by_user_id';
import { OrderByUser } from '@/services/types';
import { formatDateTime } from '@/utils/formatDateTime';
import { getGlobalId } from '@/utils/login/write_login_file';

export default function TabOneScreen() {
    const [userId, setUserId] = useState<string | null>(null);
    const [orders, setOrders] = useState<OrderByUser[] | null>(null); // Для хранения результата запроса
    const [error, setError] = useState<string | null>(null); // Для обработки ошибок
    const [loading, setLoading] = useState<boolean>(true); // Состояние загрузки

    const fetchOrders = async (id: string) => {
        setLoading(true); // Показываем индикатор загрузки
        try {
            const data = await getOrdersByUserId(id); // Ожидаем выполнения функции
            setOrders(data.orderData); // Сохраняем массив заказов
            setError(null); // Сбрасываем ошибку
        } catch (err) {
            setError((err as Error).message); // Устанавливаем сообщение об ошибке
            setOrders(null); // Сбрасываем данные
        } finally {
            setLoading(false); // Завершаем загрузку
        }
    };

    useEffect(() => {
        const globalId = getGlobalId();
        setUserId(globalId ? String(globalId.id) : null);
        console.log("abobas id:", getGlobalId())
    }, []);
    useEffect(() => {
        if (userId) {
            fetchOrders(userId);
        }
    }, [userId]);

    const renderContent = () => {
        if (loading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            );
        }

        if (error) {
            return <Text style={styles.error}>Ошибка: {error}</Text>;
        }

        if (!orders || orders.length === 0) {
            return (
                <View style={styles.noOrders}>
                    <Text style={styles.empty}>Вы еще не делали заказов</Text>
                </View>
            )
        }

        return (
            <FlatList
                contentContainerStyle={styles.container}
                data={orders}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <OrderCard
                        id={String(item.id)}
                        status={item.status}
                        deliveryDate={formatDateTime(item.created_at)}
                        orderPrice={item.total_price}
                        products={item.OrderItems}
                    />
                )}
                numColumns={1}
            />
        );
    };

    return <View>{renderContent()}</View>;
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        padding: 16,
        backgroundColor: '#f5f2f0',
    },
    error: {
        color: 'red',
        fontSize: 16,
    },
    empty: {
        fontSize: 16,
        color: 'gray',
    },
    noOrders: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    }
});
