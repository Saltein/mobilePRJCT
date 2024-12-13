import OrderCard from '@/components/OrdersPage/OrderCard/OrderCard';
import { StyleSheet, FlatList } from 'react-native';


// Список заказов
const DATA = [
    {
        id: '323413345',
        status: 'В пути',
        deliveryDate: '11.12.2024 11:44',
        orderPrice: 654,
        products: [
            {
                id: '1293',
                imageUrl: 'https://dolina-sad.ru/upload/resize_cache/webp/iblock/c7e/c7e99bba4d1e65a04288c8144b551990.webp',
            },
            {
                id: '124',
                imageUrl: 'https://gryadka.ua/content/images/37/772x768l80mc0/41029152139446.jpeg',
            },
            {
                id: '125',
                imageUrl: 'https://i.pinimg.com/originals/39/94/0c/39940cb554e6b92654bd4313193fd4bb.jpg',
            },
            {
                id: '126',
                imageUrl: 'https://grandservice.ru/wp-content/uploads/2023/12/41201.jpg',
            },
            {
                id: '1253',
                imageUrl: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-66/134/642/453/018/56/100051332595b0.jpg',
            },
            {
                id: '123453',
                imageUrl: 'https://dolina-sad.ru/upload/resize_cache/webp/iblock/c7e/c7e99bba4d1e65a04288c8144b551990.webp',
            },
            {
                id: '126453',
                imageUrl: 'https://dolina-sad.ru/upload/resize_cache/webp/iblock/c7e/c7e99bba4d1e65a04288c8144b551990.webp',
            },
            {
                id: '121233',
                imageUrl: 'https://dolina-sad.ru/upload/resize_cache/webp/iblock/c7e/c7e99bba4d1e65a04288c8144b551990.webp',
            },
            {
                id: '1284673',
                imageUrl: 'https://dolina-sad.ru/upload/resize_cache/webp/iblock/c7e/c7e99bba4d1e65a04288c8144b551990.webp',
            },
            {
                id: '154323',
                imageUrl: 'https://dolina-sad.ru/upload/resize_cache/webp/iblock/c7e/c7e99bba4d1e65a04288c8144b551990.webp',
            },
        ],
    },
    {
        id: '456288567',
        status: 'Доставлен',
        deliveryDate: '09.12.2024 15:42',
        orderPrice: 543,
        products: [
            {
                id: '12633',
                imageUrl: 'https://dolina-sad.ru/upload/resize_cache/webp/iblock/c7e/c7e99bba4d1e65a04288c8144b551990.webp',
            },
            {
                id: '18523',
                imageUrl: 'https://gryadka.ua/content/images/37/772x768l80mc0/41029152139446.jpeg',
            },
        ],
    },
    {
        id: '345692585',
        status: 'Отменен',
        deliveryDate: '04.12.2024 17:23',
        orderPrice: 1442,
        products: [
            {
                id: '125',
                imageUrl: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-15/977/422/633/151/112/100030685156b0.jpg',
            },
            {
                id: '1274233',
                imageUrl: 'https://cdn1.ozone.ru/s3/multimedia-j/6249707755.jpg',
            },
            {
                id: '12633',
                imageUrl: 'https://avatars.mds.yandex.net/get-altay/11047345/2a0000018ce9a71e6dc39c28fa4fdf17a964/XXL_height',
            },
            {
                id: '1823',
                imageUrl: 'https://avatars.mds.yandex.net/i?id=a477009e123ba655d2b8d21fcb9ee996512ab26d-5297573-images-thumbs&n=13',
            },
        ],
    },
    {
        id: '583786944',
        status: 'Отменен',
        deliveryDate: '04.12.2024 17:23',
        orderPrice: 1442,
        products: [
            {
                id: '1213',
                imageUrl: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-15/977/422/633/151/112/100030685156b0.jpg',
            },
            {
                id: '1234523',
                imageUrl: 'https://cdn1.ozone.ru/s3/multimedia-j/6249707755.jpg',
            },
            {
                id: '1283353',
                imageUrl: 'https://avatars.mds.yandex.net/get-altay/11047345/2a0000018ce9a71e6dc39c28fa4fdf17a964/XXL_height',
            },
            {
                id: '178223',
                imageUrl: 'https://avatars.mds.yandex.net/i?id=a477009e123ba655d2b8d21fcb9ee996512ab26d-5297573-images-thumbs&n=13',
            },
        ],
    },
    {
        id: '159485657',
        status: 'Отменен',
        deliveryDate: '04.12.2024 17:23',
        orderPrice: 1442,
        products: [
            {
                id: '1226453',
                imageUrl: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-15/977/422/633/151/112/100030685156b0.jpg',
            },
            {
                id: '12975683',
                imageUrl: 'https://cdn1.ozone.ru/s3/multimedia-j/6249707755.jpg',
            },
            {
                id: '14562323',
                imageUrl: 'https://avatars.mds.yandex.net/get-altay/11047345/2a0000018ce9a71e6dc39c28fa4fdf17a964/XXL_height',
            },
            {
                id: '123',
                imageUrl: 'https://avatars.mds.yandex.net/i?id=a477009e123ba655d2b8d21fcb9ee996512ab26d-5297573-images-thumbs&n=13',
            },
        ],
    },
    {
        id: '665829154',
        status: 'Отменен',
        deliveryDate: '04.12.2024 17:23',
        orderPrice: 1442,
        products: [
            {
                id: '12553',
                imageUrl: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-15/977/422/633/151/112/100030685156b0.jpg',
            },
            {
                id: '12663',
                imageUrl: 'https://cdn1.ozone.ru/s3/multimedia-j/6249707755.jpg',
            },
            {
                id: '12773',
                imageUrl: 'https://avatars.mds.yandex.net/get-altay/11047345/2a0000018ce9a71e6dc39c28fa4fdf17a964/XXL_height',
            },
            {
                id: '12883',
                imageUrl: 'https://avatars.mds.yandex.net/i?id=a477009e123ba655d2b8d21fcb9ee996512ab26d-5297573-images-thumbs&n=13',
            },
        ],
    },
];

export default function TabOneScreen() {
    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={DATA}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) =>
                <OrderCard
                    id={item.id}
                    status={item.status}
                    deliveryDate={item.deliveryDate}
                    orderPrice={item.orderPrice}
                    products={item.products}
                />}
            numColumns={1}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        padding: 16,
        backgroundColor: '#f5f2f0'
    },
});
