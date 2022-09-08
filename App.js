import Main from './src/Main';
import { NativeRouter } from 'react-router-native';
import { StatusBar } from 'expo-status-bar';

const App = () => {

  const value = "tama on pääasia"
  return (
  <>      
  <NativeRouter>        
  <Main value = {value}/>     
  </NativeRouter>      
  <StatusBar style="auto" />    
  </>
)
}

export default App;