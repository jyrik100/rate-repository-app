import { gql, ApolloClient,useQuery, useMutation, useFragment_experimental } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import {setAccessToken} from '../hooks/useAuthStorage';

const GET_REPOSITORIES = gql`
query Query {
  repositories {
    edges {
      node {
        fullName
        description
        language
        stargazersCount
        forksCount
        reviewCount
        ratingAverage
        ownerAvatarUrl
      }
    }
  }
}
`
const SIGNINA = gql` 
mutation authenicate ($username: String!, $password:String!){
  authenticate(username: "kalle", password: "password") {
    accessToken
  }
}
`;




const SIGNIN = gql` 

mutation authenticate {
  authenticate(credentials: {username: "kalle", password: "password"} ) {
    accessToken
  }
}


`;

/* input AuthenticateInput {
  username: String!
  password: String!
}

mutation authenticate($credentials: AuthenticateInput){
  authenticate(credentials:$AuthenticateInput ) {
    accessToken
  }
}
 */

/* 
const GetSign =() => {
  const { data, error, loading }= useQuery(GET_REPOSITORIES);
   const { data, error, loading } = useQuery(GET_REPOSITORIES,{
    fetchPolicy: 'cache-and-network',
    // Other options
  });
  console.log(data)
 
  console.log(data)

}
export default GetSign; */

import AsyncStorage from '@react-native-async-storage/async-storage';


const useSignIn = () => {
  const [mutate, result] = useMutation(SIGNIN);

  const signIn = async () => {
    const { data } = await mutate(); // request token based on static password/user
    
    if (data) {
    const value=data.authenticate.accessToken
    try {
      await AsyncStorage.setItem('@access_Token', value)
    } catch (e) {
      // saving error
    }

    try {
      const value = await AsyncStorage.getItem('@access_Token')
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
    console.log("storage")
    console.log(value)
    //await authStorage.setAccessToken("mikki"); //whats wrong with this ans not being a function4
    }
    // store the token to storage data.??
   //client.resetStore();  // reset everything
 if(data){
  console.log(data)
   console.log("UseSignin data")
 }
   return await mutate();   // use this on old function

  };
  if(result.data){
    console.log(result.data.authenticate.accessToken) // jotasin syystä se kutsuu sitä ensin undefined
    console.log("UseSignIn result")

    
  }  
  

  return [signIn, result];
};


export default useSignIn;
