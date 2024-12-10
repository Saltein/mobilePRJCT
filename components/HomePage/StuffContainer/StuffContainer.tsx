import React from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import StuffCard from './StuffCard/StuffCard';

export default function StuffContainer() {
    return (
        <View style={styles.container}>
            <StuffCard/>
            <StuffCard/>
            <StuffCard/>
            <StuffCard/>
            <StuffCard/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,

        marginVertical: 16,
        marginHorizontal: 16,
        backgroundColor: "#fff",
        minHeight: 156,
        overflow: "hidden",
    },
});