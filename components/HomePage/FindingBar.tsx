import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Pressable, Modal } from 'react-native';
import DefaultButton from '../ProfilePage/defaultBtn';
import RNPickerSelect from 'react-native-picker-select';
import StuffContainer from '@/components/HomePage/StuffContainer/StuffContainer';
import DefaultSeparator from '@/components/ProfilePage/defaultSeparator';
import { getProducts } from '@/services/products';
import { getProductsByCategory } from '@/services/get_products_by_category';
import { getCategories } from '../../services/get_categories'; // Импортируем функцию для получения категорий

type ItemType = {
    id: string;
    label: string;
    value: string;
};

export default function FindingBar() {
    const [sortModalVisible, setSortModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const [fetchFunction, setFetchFunction] = useState(() => getProducts);
    const [dataExample, setDataExample] = useState<ItemType[]>([]); // Состояние для списка категорий

    useEffect(() => {
        // Функция для загрузки категорий
        const fetchCategories = async () => {
            try {
                const categories = await getCategories(); // Запрос к серверу
                const formattedCategories = categories.map((category: { id: number; name: string }) => ({
                    label: category.name,
                    value: category.id,
                }));
                setDataExample(formattedCategories); // Устанавливаем преобразованный список
            } catch (error) {
                console.error('Ошибка загрузки категорий:', error);
            }
        };

        fetchCategories();
    }, []); // Пустой массив зависимостей для выполнения только при монтировании

    const handleSortButton = (categoryId: number) => {
        setFetchFunction(() => () => getProductsByCategory(categoryId));
        setSortModalVisible(false);
    };

    const resetSelection = () => {
        setSelectedValue(null);
        setFetchFunction(() => getProducts);
    };

    return (
        <View style={styles.container}>
            <View style={styles.mainCon}>
                <Pressable
                    style={styles.sortButton}
                    onPress={() => setSortModalVisible(true)}
                >
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/text-align-justify.png')}
                    />
                </Pressable>
                <View style={styles.searchBar}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/search-line.png')}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Найти товары"
                    />
                </View>

                <Modal
                    visible={sortModalVisible}
                    animationType="fade"
                    transparent={true}
                    onRequestClose={() => setSortModalVisible(false)}
                >
                    <View style={styles.modal}>
                        <View style={styles.modalWindow}>
                            <Text style={styles.labelModal}>Сортировать по категории</Text>
                            <View style={styles.picker}>
                                <RNPickerSelect
                                    onValueChange={(value) => {
                                        console.log('value: ', value);
                                        setSelectedValue(value);
                                        handleSortButton(value);
                                    }}
                                    items={dataExample}
                                    style={pickerSelectStyles}
                                    placeholder={{
                                        label: 'Выберите категорию...',
                                        value: null,
                                        color: '#9EA0A4',
                                    }}
                                    value={selectedValue}
                                />
                            </View>

                            <View style={styles.buttonsContainer}>
                                <DefaultButton
                                    title="Сбросить"
                                    iconUrl={require('../../assets/images/check.png')}
                                    onPressFun={() => {
                                        resetSelection();
                                        setSortModalVisible(false);
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <DefaultSeparator />
            <StuffContainer fetchProducts={fetchFunction} />
        </View>
    );
}

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 8,
    },
    container: {
        marginBottom: 108,
    },
    labelModal: {
        fontSize: 18,
        fontWeight: '700',
        top: -20,
    },
    picker: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 12,
        elevation: 2,
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalWindow: {
        backgroundColor: '#f5f2f0',
        paddingVertical: 48,
        paddingHorizontal: 16,
        borderRadius: 12,
        elevation: 16,
        shadowColor: '#000',
        minWidth: '75%',
        maxWidth: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    mainCon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sortButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        marginLeft: 16,
        height: 'auto',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        backgroundColor: '#fff',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        marginHorizontal: 16,
        height: 'auto',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: 32,
        height: 32,
        marginHorizontal: 8,
    },
    input: {
        flex: 1,
        borderWidth: 0,
        borderColor: '#0000',
        borderRadius: 12,
        paddingHorizontal: 8,
        height: 48,
        fontWeight: '500',
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 12,
        color: 'black',
        paddingRight: 30,
    },
});
