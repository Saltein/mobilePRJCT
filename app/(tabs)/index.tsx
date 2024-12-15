import { StyleSheet, View } from 'react-native';
import FindingBar from '@/components/HomePage/FindingBar';
import StuffContainer from '@/components/HomePage/StuffContainer/StuffContainer';
import DefaultSeparator from '@/components/ProfilePage/defaultSeparator';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FindingBar/>
      <DefaultSeparator/>
      <StuffContainer/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f2f0',
    height: '100%'
  },
})