import { StyleSheet, FlatList, View, Text, ActivityIndicator } from 'react-native';
import StuffCard from './StuffCard/StuffCard';
import React, { useState, useEffect } from 'react';
import { getProducts } from '@/services/products';
import { Product } from '@/services/types';
import { addProductToCartById } from '@/services/addToCart';
import { getGlobalId } from '@/utils/login/write_login_file';


type ItemProps = {};

export default function StuffContainer({ fetchProducts }: { fetchProducts: () => Promise<Product[]> }) {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Функция для получения данных
  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchProducts(); // Вызываем переданную функцию
      setProducts(data);
      setError(null);
    } catch (err) {
      setError((err as Error).message);
      setProducts(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();  // Загружаем данные при монтировании компонента
  }, [fetchProducts]);  // Перезагружаем данные при изменении функции


  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
      return <Text style={styles.error}>Ошибка: {error}</Text>;
    }

    if (!products || products.length === 0) {
      return <Text style={styles.empty}>Нет доступных товаров</Text>;
    }

    return (
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <StuffCard
            title={item.name}
            imageUrl={item.image_url || 'https://imgholder.ru/600x600/ccc/fff&text=Ой,+извините&font=matias'}
            price={String(item.price)}
            weight={String(item.product_weight)}
            buttonTitle='aboba'
            user_id={getGlobalId() || { id: 0 }}
            product_id={item.id}
          />
        )}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.container}
        numColumns={3}
      />
    );
  };

  return (
    <View>{renderContent()}</View>
  );
}



const styles = StyleSheet.create({
  container: {
    height: 'auto',
    paddingBottom: 100,

    marginRight: 16,
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