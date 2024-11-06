import {useQuery, gql} from '@apollo/client';

export const GET_POST = gql`
  query ($uid: ID!) {
    user(id: $uid) {
      id
      username
      email
      phone
      company {
        name
      }
    }
  }
`;
