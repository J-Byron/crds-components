import gql from 'graphql-tag';

export const GET_USER_GROUPS = gql`
  {
    user {
      nickName
      imageUrl
      groups(id: 198153) {
        endDate
        id
        name
        userStartDate
        userEndDate
      }
    }
  }
`;
