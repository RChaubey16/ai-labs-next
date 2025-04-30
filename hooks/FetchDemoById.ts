import { gql } from '@urql/core'
import { getClient } from '@/utils/drupal/client'

const NODE_BY_ID_QUERY = gql`
  query GetNodeById($id: ID!) {
    nodeAiDemo(id: $id) {
      youtubeUrl {
        url
      }
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
        processed
      }
    }
  }
`

export const fetchDemoById = async (id: string) => {
  try {
    const client = await getClient({
      url: process.env.NEXT_PUBLIC_DRUPAL_GRAPHQL_URI!,
      auth: {
        uri: process.env.NEXT_PUBLIC_DRUPAL_AUTH_URI!,
        clientId: process.env.NEXT_PUBLIC_DRUPAL_CLIENT_ID!,
        clientSecret: process.env.NEXT_PUBLIC_DRUPAL_CLIENT_SECRET!,
      },
    })

    const result = await client.query(NODE_BY_ID_QUERY, { id }).toPromise()

    if (!result.data?.nodeAiDemo) {
      console.error('No data found for ID:', id, 'Error:', result.error)
      return null
    }
    return result.data.nodeAiDemo
  } catch (error) {
    console.error('Error fetching demo by ID:', error)
    return null
  }
}
