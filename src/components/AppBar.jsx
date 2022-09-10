import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppbarTab from './AppBarTab';
import SignInTab from './SignInTab';


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
//<Pressable>Repositories</Pressable>

const AppBar = () => {
  return <View style={styles.container}>
  <table>
  <tr>
    <td><AppbarTab /></td>
    <td><SignInTab/></td>
  </tr>
</table>

     
    
  </View>;
};

export default AppBar;