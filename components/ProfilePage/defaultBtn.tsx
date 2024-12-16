import { StyleSheet, ImageSourcePropType, Image, Text, Pressable, GestureResponderEvent } from 'react-native';


type ItemProps = {
    title: string,
    iconUrl: ImageSourcePropType,
    onPressFun: (event: GestureResponderEvent) => void;
};

export default function DefaultButton({ title, iconUrl, onPressFun }: ItemProps) {

    return (
        <Pressable
            style={styles.btn}
            onPress={onPressFun}
        >
            <Image
                style={styles.btnImage}
                source={iconUrl}
            />
            <Text style={styles.btnText}>{title}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: 8,
        height: 48,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        elevation: 2,
        shadowColor: '#171717',
        width: '100%',
    },

    btnText: {
        paddingHorizontal: 8,
        fontSize: 18,
        fontWeight: 600,
    },

    btnImage: {
        height: 32,
        width: 32,
    },
})