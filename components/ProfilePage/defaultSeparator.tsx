import { StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react';

export default function DefaultSeparator() {
    return (
        <View style={styles.separator}>
            <></>
        </View>
    )
}

const styles = StyleSheet.create({
    separator: {
        borderBottomWidth: 1,
        borderColor: '#dba',
        marginVertical: 16,
        marginHorizontal: 12,
        top: 0.5,
    }
})