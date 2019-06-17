<p align="center">
  <img src="https://user-images.githubusercontent.com/9268746/59143538-6f530400-89dd-11e9-92ac-22ea34733f9c.png" height="100" /><br/>
  <span><b>TalentHub</b>: <span>Job board and ATS</span><br/>
</p>

<p align="center">
  <a href="https://app.netlify.com/sites/talenthub-beta/deploys"><img src="https://api.netlify.com/api/v1/badges/6a911a11-1a42-4fa5-8c68-617943dde091/deploy-status"></a>
</p>

<p align="center">
  <img alt="TalentHub - Job board" src="https://user-images.githubusercontent.com/9268746/59143835-5ef05880-89e0-11e9-8edd-7e868475c112.png" />
  <img alt="TalentHub - Job posting" src="https://user-images.githubusercontent.com/9268746/59143860-8fd08d80-89e0-11e9-8d02-d459cd0c181c.png" />
</p>

<br/>

## What is this?

TalentHub is an open source web app to help post jobs and track applicants in hiring porcess.

## Features

- [x] **Job board**: View and search active jobs on the map;
- [x] **Post a Job**: Add a job posting that will be displayed on the board;
- [x] **Apply to a Job**: Apply to a job with a Linkedin account;
- [ ] **Talent Dashboard**: Track applicants during an interview in a simple dashboard view;
- [ ] **Add Talents**: Add Candidates to the dashboard

## Tech Stack

- [Create React App](https://github.com/facebook/create-react-app)
- [React](https://github.com/facebook/react)
- [GraphQL](https://github.com/facebook/graphql)
- [Apollo Client](https://www.apollographql.com/docs/react/api/apollo-client/)

The client is build to be server agnostic, it is designed to work with any back-end with GraphQL interface. Current implementation uses the interface provided by [FaunaDB Cloud](https://fauna.com/serverless-cloud).

## Cool things

I've used Google Maps with Snazzy Maps styling. Also [Slate](https://github.com/ianstormtaylor/slate) for rich text editing in job posting page.

## Usage

Firstly, create a `.env` in the root directory with following content
```
REACT_APP_GRAPHQL_API=<HOST URL FOR YOUR GRAPHQL API, FOR EXAMPLE: https://graphql.fauna.com/graphql>
REACT_APP_GRAPHQL_AUTH_TOKEN=<API AUTH KEY>
REACT_APP_GMAPS_TOKEN=<GMAPS TOKEN WITH PLACES MODULE ENABLED>
```

Then just do

```
yarn install
yarn start
```

## License

[MIT](LICENSE)
