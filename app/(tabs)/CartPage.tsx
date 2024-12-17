import { StyleSheet, FlatList, View, Text, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Product } from '@/services/types';
import { getGlobalId } from '@/utils/login/write_login_file';
import { getCartByUserId } from '@/services/get_cart_by_user_id';
import CartCard from '@/components/CartPage/CartCard/CartCard';
import DefaultButton from '@/components/ProfilePage/defaultBtn';

export default function CartPage() {
    const [cart, setCart] = useState<Product[] | null>(null); // Список товаров в корзине
    const [error, setError] = useState<string | null>(null); // Ошибка
    const [loading, setLoading] = useState<boolean>(true); // Индикатор загрузки

    // Функция для получения данных
    const fetchProducts = async () => {
        setLoading(true);
        try {
            const globalId = getGlobalId();
            const userId = globalId ? Number(globalId.id) : null;
            if (!userId) throw new Error('Пользователь не авторизован');

            const data = await getCartByUserId(userId);
            setCart(data.cartData || []);
            console.log('data.cartData', data.cartData)
            setError(null);
        } catch (err) {
            setError((err as Error).message);
            setCart(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts(); // Загружаем данные при монтировании компонента
    }, []);

    const renderContent = () => {
        if (loading) {
            return <ActivityIndicator size="large" color="#0000ff" />;
        }

        if (error) {
            return <Text style={styles.error}>Ошибка: {error}</Text>;
        }

        if (!cart || cart.length === 0) {
            return <Text style={styles.empty}>В корзине пусто</Text>;
        }

        return (
            <View style={styles.globalCon}>
                <FlatList
                    data={cart}
                    renderItem={({ item }) => (
                        <CartCard
                            title={item.product.name}
                            imageUrl={item.product.image_url || 'https://imgholder.ru/600x600/ccc/fff&text=Ой,+извините&font=matias'}
                            price={String(item.product.price)}
                            weight={String(item.product.product_weight)}
                        />
                    )}
                    keyExtractor={(item) => String(item.id)}
                    contentContainerStyle={styles.container}
                    numColumns={1}
                />
                <View style={styles.buttonCon}>
                    <DefaultButton
                        title='Купить'
                        iconUrl={require('../../assets/images/check.png')}
                        onPressFun={() => {}}
                    />
                </View>
            </View>
        );
    };

    return <View>{renderContent()}</View>;
}

const styles = StyleSheet.create({
    buttonCon: {
        padding: 16,
    },
    globalCon: {
        justifyContent: 'space-between',
        height: '100%',
    },
    container: {
        height: 'auto',
        paddingBottom: 100,
        marginHorizontal: 16,
        marginVertical: 16,
        flexDirection: 'column',
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
    empty: {
        textAlign: 'center',
        marginTop: 20,
        color: '#888',
    },
});