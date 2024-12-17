import React, { useState, useEffect } from 'react';
import DefaultButton from '@/components/ProfilePage/defaultBtn';
import DefaultSeparator from '@/components/ProfilePage/defaultSeparator';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import OrdersPage from '../../components/OrdersPage/OrdersPage';
import SettingsPage from '@/components/SettingsPage/SettingsPage';
import { getGlobalId } from '@/utils/login/write_login_file';
import { getUserById } from '@/services/get_user_by_id';

// Создаём типы для маршрутов
type RootStackParamList = {
  Profile: undefined;
  OrdersPage: undefined;
  SettingsPage: undefined;
};

// Указываем тип навигации для профиля
type ProfilePageScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;
type OrdersPageNavigationProp = StackNavigationProp<RootStackParamList, 'OrdersPage'>;
type SettingsPageNavigationProp = StackNavigationProp<RootStackParamList, 'SettingsPage'>;


const Stack = createStackNavigator<RootStackParamList>();

function ProfilePageScreen() {
  const navigation = useNavigation<ProfilePageScreenNavigationProp>();
  const [userName, setUserName] = useState("Загрузка...");

  const handleOrdersPage = () => {
    navigation.navigate('OrdersPage');
  };

  const handleSettingsPage = () => {
    navigation.navigate('SettingsPage');
  };

  useEffect(() => {
    async function fetchUserName() {
      try {
        const id = getGlobalId() || { id: 0 }; // Получаем ID
        const user = await getUserById(id.id); // Ждем результат
        setUserName(user?.name || "Неизвестный пользователь"); // Устанавливаем имя
      } catch (error) {
        console.error("Ошибка при получении пользователя:", error);
        setUserName("Ошибка загрузки");
      }
    }

    fetchUserName();
  }, []); // Пустой массив зависимостей запускает эффект только один раз

  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Image
          style={styles.profileImage}
          source={{
            uri: 'https://i.redd.it/oye-doudou-v0-vzbhnyh9de4d1.jpg?width=1179&format=pjpg&auto=webp&s=ed58b3e30a4e7e322c806b1ff58b5438f4e94813',
          }}
        />
        <View style={styles.profileText}>
          <Text style={styles.profileName}>{userName}</Text>
          <Pressable
            style={styles.settingsBtn}
            onPress={handleSettingsPage}
          >
            <Text style={styles.settingsText}>Настройки ›</Text>
          </Pressable>
        </View>
      </View>

      <DefaultSeparator/>
      <DefaultButton
        title="Заказы"
        iconUrl={require('../../assets/images/box-line.png')}
        onPressFun={handleOrdersPage}
      />
    </View>
  );
}

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfilePageScreen}
        options={{
          title: "Профиль"
        }}
      />
      <Stack.Screen
        name="OrdersPage"
        component={OrdersPage}
        options={{
          title: "Заказы"
        }}
      />
      <Stack.Screen
        name="SettingsPage"
        component={SettingsPage}
        options={{
          title: "Настройки"
        }}
      />
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 16,
    backgroundColor: '#f5f2f0',
  },

  profileCard: {
    flexDirection: 'row',
  },

  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 48,
    elevation: 2,
    shadowColor: '#171717',
  },

  profileText: {
    marginLeft: 16,
  },

  profileName: {
    marginTop: 16,
    fontSize: 22,
    fontWeight: 600,
  },

  settingsBtn: {
    padding: 8,
    left: -8,
    top: -8,
  },

  settingsText: {
    fontSize: 14,
    fontWeight: 300,
  },
});
