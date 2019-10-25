import gql from 'graphql-tag';

export const SET_SITE = gql`
  mutation setSite($siteId: ID!) {
    setSite(siteId: $siteId) {
      site {
        id
        name
      }
    }
  }
`;