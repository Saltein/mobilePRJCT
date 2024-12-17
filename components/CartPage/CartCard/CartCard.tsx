import { StyleSheet, View, Image, Text, Pressable } from 'react-native';


type ItemProps = { title: string, imageUrl: string, price: string, weight?: string | number; };

export default function CartCart({ title, imageUrl, price, weight }: ItemProps) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: imageUrl }}
            />
            <View style={styles.labelContainer}>
                <View style={styles.labelPrice}>

                    <Text numberOfLines={1} style={styles.label}>{title}</Text>

                    <Text style={styles.price}>{price} ₽</Text>

                </View>
                <Text style={styles.weight}>
                    {weight === 'null' ? ' ' : `${String(weight)} г`}
                </Text>
            </View>
            {/* <Pressable style={styles.btn}>
                <Text style={styles.btnLabel}>В корзину</Text>
            </Pressable> */}
        </View>
    )
}


const styles = StyleSheet.create({
    labelPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '83%',
    },
    container: {
        backgroundColor: "#fff",
        elevation: 2,
        shadowColor: '#171717',

        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 12,
        marginBottom: 8,
        flexDirection: 'row',
        height: 120,
    },

    image: {
        width: '30%',
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
        fontSize: 18,
        maxWidth: '85%',
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