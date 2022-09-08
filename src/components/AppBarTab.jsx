import { ink, Pressable, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    color: "white",
    fontSize:40,
    paddingBottom: 10,
    fontStyle: 'arial'
    
  },
  // ...
});

const AppBarTab = () => {
  return <View style={styles.container}>
    <Pressable>Repositories</Pressable>

    
  </View>;
};

export default AppBarTab;