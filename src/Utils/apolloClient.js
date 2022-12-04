import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';

console.log(Constants.manifest.extra.env); // mikä arvo

const httpLink = createHttpLink({
  // Replace the IP address part with your own IP address!
 // uri: 'http://172.31.2.19:5000/graphql',
  //uri: 'http://172.31.2.31:4000/graphql',  // laita tää rimpsu .enviin ja sitten alla oleva
  //uri: process.env.GRAPHQL_URL,

//  uri: 'http://localhost:4000/graphql'

  uri: Constants.manifest.extra.env

  
  //192.168.10.190
  

});

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {    
    try {      
      const accessToken = await authStorage.getAccessToken();      
      return {        
        headers: 
        {  ...headers, authorization: accessToken ? `Bearer ${accessToken}` : '',        
        },      
      };    
    } 
    catch (e) {      
          console.log(e);      
          return {        
            headers,      
          };    
    }  
  });
  
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;