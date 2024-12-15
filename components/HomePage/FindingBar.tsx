import React from 'react';
import { StyleSheet, View, Image, TextInput, Pressable } from 'react-native';

export default function FindingBar() {
    return (
        <View style={styles.mainCon}>
            <Pressable style={styles.container1}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/text-align-justify.png')}
                />
            </Pressable>
            <View style={styles.container2}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/search-line.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Найти товары"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainCon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        marginLeft: 16,
        height: "auto",

        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,

        backgroundColor: '#fff',
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        marginHorizontal: 16,
        height: "auto",

        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        flexGrow: 1, // Позволяет элементу расширяться
        flexShrink: 1, // Позволяет сжиматься при недостатке места

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
        fontWeight: "500",
    },
});
