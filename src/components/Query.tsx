import {useQuery, gql} from '@apollo/client';

export const GET_POST = gql`
  query {
    user(id: 3) {
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
