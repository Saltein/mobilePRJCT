import React from 'react';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';

export default function StuffCard() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: 'https://dolina-sad.ru/upload/resize_cache/webp/iblock/c7e/c7e99bba4d1e65a04288c8144b551990.webp' }}
            />
            <View style={styles.labelContainer}>
                <Text
                    style={styles.price}
                >150 ₽</Text>
                <Text
                    style={styles.label}
                >Агурец</Text>
                <Text
                    style={styles.weight}
                >50г</Text>
            </View>
            <Pressable style={styles.btn}>
                <Text style={styles.btnLabel}>В корзину</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 260,
        width: "31.9%",
        backgroundColor: "#f3f3f3",
        borderRadius: 12,
    },

    image: {
        height: '55%',
        borderRadius: 12,
        elevation: 2,
        shadowColor: '#171717',
    },


    labelContainer: {
        marginHorizontal: 8,
        marginVertical: 4,
    },

    label: {
        fontWeight: 500,
        fontSize: 16,
        color: "#444"
    },

    price: {
        fontWeight: 700,
        fontSize: 20,
    },

    weight: {
        fontWeight: 300,
        fontSize: 14,
        color: "#666"
    },

    btn: {
        borderRadius: 8,
        backgroundColor: "#fff",
        height: 32,
        margin: 4,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',

        elevation: 2,
        shadowColor: '#171717',
    },

    btnLabel: {
        fontWeight: 500
    }
})