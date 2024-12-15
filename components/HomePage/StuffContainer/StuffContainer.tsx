import { StyleSheet, FlatList, View, Text, ActivityIndicator } from 'react-native';
import StuffCard from './StuffCard/StuffCard';
import React, { useState, useEffect } from 'react';
import { getProducts } from '@/services/products';
import { Product } from '@/services/types';



export default function StuffContainer() {

  const [products, setProducts] = useState<Product[] | null>(null); // Для хранения результата запроса
  const [error, setError] = useState<string | null>(null); // Для обработки ошибок
  const [loading, setLoading] = useState<boolean>(true); // Состояние загрузки

  // Функция для получения данных
  const fetchProducts = async () => {
    setLoading(true); // Устанавливаем состояние загрузки
    try {
      const data = await getProducts(); // Получаем данные
      setProducts(data); // Сохраняем данные
      setError(null); // Сбрасываем ошибку
    } catch (err) {
      setError((err as Error).message); // Устанавливаем ошибку
      setProducts(null); // Сбрасываем данные
    } finally {
      setLoading(false); // Завершаем загрузку
    }
  };

  // Загружаем данные при монтировании компонента
  useEffect(() => {
    fetchProducts();
  }, []);


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
            imageUrl={item.image_url || 'https://imgholder.ru/600x600/ccc/fff&text=Ой,+извините&font=matias'} // Заглушка
            price={String(item.price)}
            weight={String(item.product_weight)}
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