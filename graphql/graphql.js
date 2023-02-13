import { gql } from "@apollo/client";

const GET_GRAPHQL = gql 
`query jobs {
    messages{
      data{
        id
        attributes{
          greetings
        }
        }
      }
     
      
    }`

export default GET_GRAPHQL