import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './components/RepositoryList';
import List from  './components/list';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});


/* const List = () => {

  return <Text>asasd</Text>

}
 */

const Main = (props) => {

  return (
    <View style={styles.container}>
      <Text>Rate Repository Application: {props.value}</Text>
      <List/>
      <RepositoryList/>
    </View>
  );

};

export default Main;