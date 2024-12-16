import { StyleSheet, View, Text, FlatList } from 'react-native';
import OrderIcon from './OrderIcon/OrderIcon';
import { OrderItem } from '@/services/types';
import { getRandomInt } from '@/utils/rng';


type Product = {
    id: string;
    imageUrl: string;
};

type ItemProps = {
    id: string,
    status: string,
    deliveryDate: string,
    orderPrice: string,
    products: Array<OrderItem>;
};

export default function OrderCard({
    id,
    status,
    deliveryDate,
    orderPrice,
    products,
}: ItemProps) {
    return (
        <View style={styles.container}>
            <View style={styles.status_ordernumber}>
                <Text style={styles.statusText}>{status}</Text>
                <Text style={styles.priceText}>{id}</Text>
            </View>
            <Text style={styles.dateText}>{deliveryDate}</Text>
            <View style={styles.imageContainerView}>
                <FlatList
                    contentContainerStyle={styles.imageContainer}
                    data={products}
                    keyExtractor={item => item.product.id.toString() + getRandomInt(1, 10000)}
                    renderItem={({ item }) =>
                        <OrderIcon imageUrl={item.product.image_url} />}
                    horizontal={true}
                />
            </View>
            <Text style={styles.priceText}>{String(orderPrice)} ₽</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        elevation: 2,
        shadowColor: '#171717',

        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        marginBottom: 8,
    },

    imageContainer: {
        flexDirection: 'row',
        overflow: 'hidden',
        margin: 2
    },

    imageContainerView: {
        overflow: 'hidden',
        borderRadius: 12,
        marginBottom: 4,
        left: -2,
    },

    status_ordernumber: {
        width: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    statusText: {
        fontSize: 18,
        fontWeight: 600,
    },

    dateText: {
        fontSize: 11,
        fontWeight: 400,
        marginBottom: 8,
    },

    priceText: {
        fontSize: 11,
        fontWeight: 400,
        color: '#888',
    }
})