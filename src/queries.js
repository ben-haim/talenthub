import { gql } from 'apollo-boost'

export const JOBS_QUERY = gql`
  query FindAllJobs {
    allJobs {
      data {
        title
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

export const CREATE_JOB = gql`
  mutation CreateAJob(
      $type: String!,
      $title: String!,
      $name: String!,
      $description: String,
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
      requirements: [
        "5+ years of production experience",
        "Proven experience leading a small team"
      ]
      responsibilities: [
        "Development of the application",
        "Team coordination"
      ]
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