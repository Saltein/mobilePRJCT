import { StyleSheet, View, Text, Pressable } from 'react-native';

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
        marginTop: 16,
        marginHorizontal: 12,
    }
})