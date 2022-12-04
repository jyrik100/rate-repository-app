import Main from './src/Main';
import { NativeRouter } from 'react-router-native';
import { StatusBar } from 'expo-status-bar';
import { gql,ApolloProvider, useQuery } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';
import Constants from 'expo-constants';
import SignIn from './src/components/SignIn';
//import useSignIn from './src/hooks/useSignIn';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';

const authStorage = new AuthStorage(); // initialise the storage

const apolloClient = createApolloClient(authStorage); // send the access token on each request

const App = () => {
  console.log(Constants.manifest.extra);
  

  const value = "tama on pääassiasTESTATAAM"
  return (
  <>      
  <NativeRouter>  
    <ApolloProvider client={apolloClient}>  
      <AuthStorageContext.Provider value={authStorage}>
        <Main value = {value}/>  
      </AuthStorageContext.Provider>    
    </ApolloProvider>   
  </NativeRouter>      
  <StatusBar style="auto" />    
  </>
)
}

export default App;





