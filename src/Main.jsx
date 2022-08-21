//import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './components/RepositoryList';
import List from  './components/list';

const styles = StyleSheet.create({
  container: {
    padding: 20
  },

    text: {    
    color: 'blue',    
    fontSize: 15,    
    fontWeight: '700'  
  }
 }
);


/* const List = () => {

  return <Text>asasd</Text>

}
 */

const Main = (props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text} >Rate Repository Application: {props.value}</Text>
      <List/>
      <RepositoryList/>
    </View>
  );

};

export default Main;