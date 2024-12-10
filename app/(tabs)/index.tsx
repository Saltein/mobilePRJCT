import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import FindingBar from '@/components/HomePage/FindingBar';
import StuffContainer from '@/components/HomePage/StuffContainer/StuffContainer';

export default function TabOneScreen() {
  return (
    <View>
      <FindingBar/>
      <StuffContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
