import { StyleSheet, View, Image, Text, Pressable } from 'react-native';



type ItemProps = { imageUrl: string | undefined };

export default function OrderIcon({ imageUrl }: ItemProps) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: imageUrl }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: 4,
    },

    image: {
        height: 50,
        width: 50,
        borderRadius: 12,
        elevation: 2,
        shadowColor: '#111',
    },
})