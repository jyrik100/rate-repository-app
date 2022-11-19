import { gql, useQuery, useMutation, useFragment_experimental } from '@apollo/client';

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


 const useSignIn = () => {
  const [mutate, result] = useMutation(SIGNIN);
  
  const signIn = async () => {    
    try {
      await mutate();

    } catch (e) {
      console.log(e);
    }
    
  };
  if(result.data){
  console.log(result.data) // jotasin syystä se kutsuu sitä ensin undefined
  console.log("mikki")
  
}  

return [signIn, result]
  
};

export default useSignIn;
