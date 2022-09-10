//import Constants from 'expo-constants';
import RepositoryList from './components/RepositoryList';
import List from  './components/list';
import Text1 from './components/Text';
import AppBar from './components/AppBar';
import SignIn from './components/SignIn';
import { Route, Routes, Navigate } from 'react-router-native';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:'#e1e4e8',
  },

    text: {    // this defines the first row
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
      <Text1 style={{ paddingBottom: 10 }} fontSize='normal'>Text with custom style</Text1>
      <Text1 color="primary" fontSize='normal'>Text with secondary color</Text1>
      <AppBar/>
      <Routes>        
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/SignIn" element={<SignIn />} exact />        
        <Route path="*" element={<Navigate to="/" replace />} />      
      </Routes>
      <List/>
    </View>
  );

};

export default Main;