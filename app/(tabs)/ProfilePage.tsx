import { StyleSheet, View, Image, Text, Pressable } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://i.redd.it/oye-doudou-v0-vzbhnyh9de4d1.jpg?width=1179&format=pjpg&auto=webp&s=ed58b3e30a4e7e322c806b1ff58b5438f4e94813' }}
        />
        <View style={styles.profileText}>
          <Text style={styles.profileName}>
            Абобка Абобыч
          </Text>
          <Pressable style={styles.settingsBtn}>
            <Text style={styles.settingsText}>Настрйоки ›</Text>
          </Pressable>
        </View>
      </View>

      <Pressable style={styles.btn}>
        <Image
          style={styles.btnImage}
          source={require('../../assets/images/box-line.png')}
        />
        <Text style={styles.btnText}>Заказы</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 16,
    backgroundColor: '#f5f2f0'
  },

  profileCard: {
    flexDirection: 'row',
  },

  profileImage: {
    height: 96,
    width: 96,
    borderRadius: 48,
    elevation: 2,
    shadowColor: '#171717',
  },

  profileText: {
    marginLeft: 16,
  },

  profileName: {
    marginTop: 16,
    fontSize: 26,
    fontWeight: 600,
  },

  settingsBtn: {
    padding: 8,
    left: -8,
    top: -8
  },

  settingsText: {
    fontSize: 18,
    fontWeight: 300,
  },

  btn: {
    marginTop: 16,
    paddingHorizontal: 8,
    height: 48,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#171717',
  },

  btnText: {
    paddingLeft: 8,
    fontSize: 18,
    fontWeight: 600,
  },

  btnImage: {
    height: 32,
    width: 32,
  },
});
