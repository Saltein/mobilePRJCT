import { StyleSheet, View, Image, Text, Pressable } from 'react-native';



type ItemProps = {title: string, imageUrl: string, price: string, weight?: string | number;};

export default function StuffCard({title, imageUrl, price, weight}: ItemProps) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: imageUrl }}
            />
            <View style={styles.labelContainer}>
                <Text style={styles.price}>{price} ₽</Text>
                <Text numberOfLines={1} style={styles.label}>{title}</Text>
                <Text style={styles.weight}>
                    {weight === 'null' ? ' ' : `${String(weight)} г`}
                </Text>
            </View>
            <Pressable style={styles.btn}>
                <Text style={styles.btnLabel}>В корзину</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 230,
        flexGrow: 1, // Позволяет элементу расширяться
        backgroundColor: "#fff",
        borderRadius: 12,
        marginLeft: 16,
        marginVertical: 8,
        maxWidth: 130,
        minWidth: 70,
        elevation: 4,
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
        fontSize: 11,
        color: "#444",
        
    },

    price: {
        fontWeight: 700,
        fontSize: 18,
    },

    weight: {
        fontWeight: 300,
        fontSize: 11,
        color: "#666"
    },

    btn: {
        borderRadius: 8,
        backgroundColor: "#badbad",
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