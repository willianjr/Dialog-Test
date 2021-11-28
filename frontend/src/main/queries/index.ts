import { gql } from '@apollo/client'

const GET_LIST = gql`
  query List($searchParams: String!) {
    list(name: $searchParams) {
      _id
      name
      picture
      age
      eyeColor
      company
      email
    }
  }
`
const GET_USER = gql`
  query User($perfilParams: ID!) {
    user(user: $perfilParams) {
      _id
      name
      picture
      age
      eyeColor
      company
      email
      friends {
        _id
        name
        picture
        age
        eyeColor
        company
        email
      }
    }
  }
`

export default { GET_LIST, GET_USER }
