// import React from "react"
// import { graphql } from "gatsby"
// import { Query } from "@apollo/react-hooks"
// import gql from "graphql-tag"

// const APOLLO_QUERY = gql`
//   {
//     tweets {
//       text
//       created_at
//     }
//   }
// `

// function TwitterFeed() {
//   return (
//     <div>
//       <Query query={APOLLO_QUERY}>
//         {({ data, loading, error }) => {
//           if (loading) return <span>Loading...</span>
//           if (error) return <p>{error.message}</p>
//           console.log(data)
//         }}
//       </Query>
//     </div>
//   )
// }

// export default TwitterFeed
