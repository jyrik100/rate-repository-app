import Main from './src/Main';
import { NativeRouter } from 'react-router-native';
import { StatusBar } from 'expo-status-bar';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';
import Constants from 'expo-constants';
import SignIn from './src/components/SignIn';
import useSignIn from './src/hooks/useSignIn';

const apolloClient = createApolloClient();

const App = () => {
  console.log(Constants.manifest.extra);
//  useSignIn()

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