import { gql } from 'apollo-boost'

export const JOBS_QUERY = gql`
  query FindAllJobs {
    allJobs {
      data {
        _id
        title
        requirements
        responsibilities
        company {
          name
          description
          logo
          address
          latitude
          longitude
        }
      }
    }
  }
`

export const FIND_JOB = gql`
  query FindJobByID($id: ID!) {
    findJobByID(id: $id) {
      title
      company {
        logo
      }
    }
  }
`

export const CREATE_JOB = gql`
  mutation CreateAJob(
      $type: String!,
      $title: String!,
      $name: String!,
      $description: String,
      $requirements: String!,
      $responsibilities: String!,
      $website: String,
      $logo: String!,
      $address: String!,
      $latitude: Float!,
      $longitude: Float!,
      $email: String
    ) {
    createJob(data: {
      type: $type
      title: $title
      requirements: $requirements
      responsibilities: $responsibilities
      company: { create: {
        name: $name
        description: $description
        website: $website
        logo: $logo
        address: $address
        latitude: $latitude
        longitude: $longitude
        email: $email
      }}
    }) {
      title
    }
  }
`

export const CREATE_TALENT = gql`
  mutation CreateATalent {
    createTalent(data: { })
  }
`