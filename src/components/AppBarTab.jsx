import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';


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
  <Link to="/"><Text style={{ color: "white" }}>RepositoryList</Text></Link>

    
  </View>;
};

export default AppBarTab;