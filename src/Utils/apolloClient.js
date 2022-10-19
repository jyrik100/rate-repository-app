import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';


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

const createApolloClient = () => {
  
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;