import { StyleSheet, View, Image, Modal, Pressable, TextInput, Text } from 'react-native';
import DefaultButton from '../ProfilePage/defaultBtn';
import React, { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import DefaultSeparator from '../ProfilePage/defaultSeparator';
import { updateAddress } from '@/services/updateAddress';
import { getGlobalId } from '@/utils/login/write_login_file';

export default function SettingsPage() {
    const [modalVisible, setModalVisible] = useState(false);
    const [profileImage, setProfileImage] = useState('https://i.redd.it/oye-doudou-v0-vzbhnyh9de4d1.jpg?width=1179&format=pjpg&auto=webp&s=ed58b3e30a4e7e322c806b1ff58b5438f4e94813');

    const [addressModalVisible, setAddressModalVisible] = useState(false);
    const [address, setAddress] = useState("");

    const [aboutModalVisible, setAboutModalVisible] = useState(false);
    const [about, setAbout] = useState("");

    const [exitModalVisible, setExitModalVisible] = useState(false);
    const [exit, setExit] = useState("");

    const selectImage = async () => {
        // Запрос разрешений
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("Доступ к фото и видео отклонен!");
            return;
        }

        // Открытие галереи
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'], // Указываем, что нужны только изображения
            allowsEditing: true,
            aspect: [1, 1], // Для квадратных изображений
            quality: 1,
        });

        if (!result.canceled) {
            setProfileImage(result.assets[0].uri); // Установка нового изображения
        }
    };

    const [street, setStreet] = useState("");
    const [entrance, setEntrance] = useState("");
    const [floor, setFloor] = useState("");

    const handleUpdateAddress = () => {
        const user_id = getGlobalId() || { id: 0 };
        const fullAddress = `${street}, подъезд ${entrance}, этаж ${floor}`;

        setAddressModalVisible(false);

        updateAddress(Number(user_id.id), fullAddress)
            .then(() => {
                alert("Адрес успешно обновлен!");
                setStreet("");
                setEntrance("");
                setFloor("");
            })
            .catch((error) => {
                alert("Ошибка при обновлении адреса: " + error.message);
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.sep}>
            </View>
            <DefaultButton
                title="Картинка профиля"
                iconUrl={require('../../assets/images/user-box-line.png')}
                onPressFun={() => { setModalVisible(true) }}
            />
            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modal}>
                    <View style={styles.modalWindow}>
                        <Pressable onPress={selectImage}>
                            <View style={styles.imageContainer}>
                                <Image
                                    style={styles.profileImage}
                                    source={{ uri: profileImage }}
                                />
                                <View style={styles.editImageContainer}>
                                    <Image
                                        style={styles.editImage}
                                        source={require('../../assets/images/edit-pen-2-line.png')}
                                    />
                                </View>
                            </View>
                        </Pressable>
                        <View style={styles.buttonContainer}>
                            <DefaultButton
                                title='Сохранить'
                                iconUrl={require('../../assets/images/check.png')}
                                onPressFun={() => setModalVisible(false)}
                            />
                            <DefaultButton
                                title='Отменить'
                                iconUrl={require('../../assets/images/close-line.png')}
                                onPressFun={() => setModalVisible(false)}
                            />
                        </View>
                    </View>
                </View>
            </Modal>


            <DefaultButton
                title="Адрес доставки"
                iconUrl={require('../../assets/images/map-marker-line.png')}
                onPressFun={() => { setAddressModalVisible(true) }}
            />
            <Modal
                visible={addressModalVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={() => setAddressModalVisible(false)}
            >
                <View style={styles.modal}>
                    <View style={styles.modalWindow}>
                        <TextInput
                            style={styles.input}
                            placeholder="Улица, дом, квартира"
                            value={street}
                            onChangeText={setStreet}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Подъезд"
                            value={entrance}
                            onChangeText={setEntrance}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Этаж"
                            value={floor}
                            onChangeText={setFloor}
                        />
                        <View style={styles.buttonContainer}>
                            <DefaultButton
                                title='Сохранить'
                                iconUrl={require('../../assets/images/check.png')}
                                onPressFun={handleUpdateAddress}
                            />
                            <DefaultButton
                                title='Отменить'
                                iconUrl={require('../../assets/images/close-line.png')}
                                onPressFun={() => setAddressModalVisible(false)}
                            />
                        </View>
                    </View>
                </View>
            </Modal>


            <DefaultButton
                title="О приложении"
                iconUrl={require('../../assets/images/settings-cog-line.png')}
                onPressFun={() => { setAboutModalVisible(true) }}
            />
            <Modal
                visible={aboutModalVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={() => setAboutModalVisible(false)}
            >
                <View style={styles.modal}>
                    <View style={styles.modalWindow}>
                        <View style={styles.textAboutContainer}>
                            <Text style={styles.textAbout}>
                                Проиложенние создано с помощью React-Native в учебных целях для модуля "Мобильная разработка"
                            </Text>
                            <Text style={styles.textAbout}>
                                Frontend: Валов Никита
                            </Text>
                            <Text style={styles.textAbout}>
                                Backend: Строев Данил
                            </Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <DefaultButton
                                title='Понятно'
                                iconUrl={require('../../assets/images/check.png')}
                                onPressFun={() => setAboutModalVisible(false)}
                            />
                        </View>
                    </View>
                </View>
            </Modal>

            <DefaultSeparator />

            <DefaultButton
                title="Выход"
                iconUrl={require('../../assets/images/door-exit-line.png')}
                onPressFun={() => { setExitModalVisible(true) }}
            />
            <Modal
                visible={exitModalVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={() => setExitModalVisible(false)}
            >
                <View style={styles.modal}>
                    <View style={styles.modalWindow}>
                        <Text>Вы действительно хотите выйти?</Text>
                        <View style={styles.yesNoBtnContainer}>
                            <DefaultButton
                                title='Да'
                                iconUrl={require('../../assets/images/check.png')}
                                onPressFun={() => {
                                    setExitModalVisible(false)

                                }}
                            />
                            <DefaultButton
                                title='Нет'
                                iconUrl={require('../../assets/images/close-line.png')}
                                onPressFun={() => setExitModalVisible(false)}
                            />
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    yesNoBtnContainer: {
        flexDirection: 'row',
        gap: 16,
    },
    container: {
        height: '100%',
        backgroundColor: '#f5f2f0',
        paddingHorizontal: 16,
        gap: 8,
    },
    sep: {
        height: 16,
    },
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalWindow: {
        backgroundColor: "#f5f2f0",
        paddingVertical: 48,
        paddingHorizontal: 16,
        borderRadius: 12,
        elevation: 16,
        shadowColor: '#000',
        minWidth: '75%',
        maxWidth: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: 128,
        height: 128,
        borderRadius: 64,
        overflow: 'hidden',
        elevation: 4,
        marginBottom: 16,
        marginLeft: 40,
    },
    editImage: {
        width: 32,
        height: 32,
    },
    buttonContainer: {
        minWidth: 200,
        gap: 8,
    },
    imageContainer: {
        flexDirection: 'row',
    },
    editImageContainer: {
        width: 40,
        height: 40,
        borderRadius: 16,
        backgroundColor: "#fff",
        left: -40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
    },
    input: {
        borderWidth: 2,
        borderColor: '#b99',
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginBottom: 8,
        height: 48,
        fontWeight: "500",
        minWidth: 200,
    },
    textAboutContainer: {
        marginHorizontal: 16,
        marginBottom: 16,
    },
    textAbout: {
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'justify',
    },
});
