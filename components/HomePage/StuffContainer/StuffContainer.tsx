import { StyleSheet, FlatList } from 'react-native';
import StuffCard from './StuffCard/StuffCard';


const DATA = [
  {
    id: '1',
    title: 'агурец',
    price: 150,
    weight: 50,
    imageUrl: 'https://dolina-sad.ru/upload/resize_cache/webp/iblock/c7e/c7e99bba4d1e65a04288c8144b551990.webp',
  },
  {
    id: '2',
    title: 'памидор',
    price: 329,
    weight: 76,
    imageUrl: 'https://gryadka.ua/content/images/37/772x768l80mc0/41029152139446.jpeg',
  },
  {
    id: '3',
    title: 'анонас',
    price: 400,
    weight: 954,
    imageUrl: 'https://i.pinimg.com/originals/39/94/0c/39940cb554e6b92654bd4313193fd4bb.jpg',
  },
  {
    id: '4',
    title: 'пиражочек',
    price: 65,
    weight: 96,
    imageUrl: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-15/977/422/633/151/112/100030685156b0.jpg',
  },
  {
    id: '5',
    title: 'шаколад',
    price: 67,
    weight: 80,
    imageUrl: 'https://cdn1.ozone.ru/s3/multimedia-j/6249707755.jpg',
  },
  {
    id: '6',
    title: 'мяско',
    price: 349,
    weight: 500,
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/11047345/2a0000018ce9a71e6dc39c28fa4fdf17a964/XXL_height',
  },
  {
    id: '7',
    title: 'сырочек',
    price: 245,
    weight: 100,
    imageUrl: 'https://avatars.mds.yandex.net/i?id=a477009e123ba655d2b8d21fcb9ee996512ab26d-5297573-images-thumbs&n=13',
  },
  {
    id: '8',
    title: 'сок',
    price: 299,
    weight: 2000,
    imageUrl: 'https://grandservice.ru/wp-content/uploads/2023/12/41201.jpg',
  },
  {
    id: '9',
    title: 'хльебушикфывфывфывфвы',
    price: 110,
    weight: 320,
    imageUrl: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-66/134/642/453/018/56/100051332595b0.jpg',
  },
];





export default function StuffContainer() {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) =>
        <StuffCard
          title={item.title}
          imageUrl={item.imageUrl}
          price={String(item.price)}
          weight={String(item.weight)}
        />}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
      numColumns={3}
    />
  );
}


const styles = StyleSheet.create({
  container: {
    height: 'auto',
    paddingBottom: 100,

    marginRight: 16,
    marginTop: 8,
    backgroundColor: "#fff",
  },
});