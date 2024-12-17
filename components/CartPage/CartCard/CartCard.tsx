import DefaultButton from '@/components/ProfilePage/defaultBtn';
import { deleteFromCartById } from '@/services/deleteFromCartById';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';


type ItemProps = {
    title: string;
    imageUrl: string;
    price: string;
    weight?: string | number;
    user_id: { id: number };
    product_id: number;
    onItemDeleted?: () => void; // Новый пропс
};

export default function CartCard({ title, imageUrl, price, weight, user_id, product_id, onItemDeleted }: ItemProps) {
    const handleDelete = async () => {
        try {
            await deleteFromCartById(user_id.id, product_id);
            console.log('Deleted from cart:', 'userId:', user_id.id, 'productId:', product_id);
            if (onItemDeleted) {
                onItemDeleted(); // Вызываем функцию обновления
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <View style={styles.labelContainer}>
                <View style={styles.labelPrice}>
                    <Text numberOfLines={1} style={styles.label}>{title}</Text>
                    <Text style={styles.price}>{price} ₽</Text>
                </View>
                <Text style={styles.weight}>
                    {weight === 'null' ? ' ' : `${String(weight)} г`}
                </Text>
                <View style={styles.btnCon}>
                    <Pressable onPress={handleDelete} style={styles.btn}>
                        <Text style={styles.btnLabel}>Удалить</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#f33',
        width: 140,
        height: 32,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },
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
        alignItems: 'flex-end',
        width: '65%',
    },

    label: {
        fontWeight: 500,
        fontSize: 18,
        maxWidth: '85%',
        left: -30,
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

    btnCon: {
        width: 140,
        justifyContent: 'flex-end',
        height: 60,
        right: -8
    },

    btnLabel: {
        fontWeight: 700,
        color: 'white'
    }
})