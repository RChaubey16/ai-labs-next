// hooks/useFetchDemos.ts
import { gql } from '@urql/core'
import { getClient } from '@/utils/drupal/client'

export const useFetchDemos = async () => {
  try {
    const client = await getClient({
      url: process.env.NEXT_PUBLIC_DRUPAL_GRAPHQL_URI!,
      auth: {
        uri: process.env.NEXT_PUBLIC_DRUPAL_AUTH_URI!,
        clientId: process.env.NEXT_PUBLIC_DRUPAL_CLIENT_ID!,
        clientSecret: process.env.NEXT_PUBLIC_DRUPAL_CLIENT_SECRET!,
      },
    })

    const MY_QUERY = gql`
      query MyQuery {
        nodeAiDemos(first: 10) {
          nodes {
            id
            technologies {
              ... on TermTags {
                id
                name
                path
              }
            }
            path
            title
            description {
              value
            }
          }
        }
      }
    `
    const result = await client.query(MY_QUERY, {}).toPromise()
    return result.data.nodeAiDemos.nodes
  } catch (err) {
    console.error('fetchDemos failed:', err)
    return []
  }
}
