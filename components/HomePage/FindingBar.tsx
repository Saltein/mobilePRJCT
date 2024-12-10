import React from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';

export default function FindingBar() {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={require('../../assets/images/search-line.png')}
            />
            <TextInput 
                style={styles.input} 
                placeholder="Найти товары"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16,
        marginHorizontal: 16,
        height: "auto",

        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
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
