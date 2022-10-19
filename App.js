import Main from './src/Main';
import { NativeRouter } from 'react-router-native';
import { StatusBar } from 'expo-status-bar';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';
import Constants from 'expo-constants';

const apolloClient = createApolloClient();

const App = () => {
  console.log(Constants.manifest.extra);

  const value = "tama on pääassiasTESTATAAM"
  return (
  <>      
  <NativeRouter>  
  <ApolloProvider client={apolloClient}>      
  <Main value = {value}/>  
  </ApolloProvider>   
  </NativeRouter>      
  <StatusBar style="auto" />    
  </>
)
}

export default App;