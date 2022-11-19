import { gql, useQuery, useMutation } from '@apollo/client';

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


mutation  Authenticate($username: String!, $password:String!) {
  authenticate(credentials: {username: "kalle", password: "password"}) {
    accessToken
  }
}


`;



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
    const [mutate, result] = useMutation(SIGNIN, {    
      onError: (error) => {
      console.log(error.graphQLErrors[0].message)
    }
  })
  mutate() // tähän parameterjä??
    console.log(result)
  
  };


 





  export default useSignIn;
 /* 
  {
    "data": {
      "authenticate": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiYmU0Mjk4NC0wNTFiLTRhMDEtYjQ1ZC1iOGQyOWMzMjIwMGMiLCJpYXQiOjE2NjY1MjM0OTMsImV4cCI6MjI3MTMyMzQ5Mywic3ViIjoiYWNjZXNzVG9rZW4ifQ.56yZLrdt9lhND1YJbQDRzYTGnoMVvk1K8chRndE-9QE"
      }
    }
  } */


 /*  export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)  {
      value
    }
  }
` */
