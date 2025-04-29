import { gql } from '@urql/core'
import { getClient } from '@/utils/drupal/client'
import { Demo } from '@/components/demos/demos'

interface PaginationParams {
  first?: number
  after?: string | null
  before?: string | null
  last?: number
}

interface PageInfo {
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string | null
  endCursor: string | null
}

interface FetchDemosResult {
  nodes: Demo[]
  pageInfo: PageInfo
}

export const fetchDemos = async (
  paginationParams: PaginationParams = { first: 10 }
): Promise<FetchDemosResult> => {
  try {
    const client = await getClient({
      url: process.env.NEXT_PUBLIC_DRUPAL_GRAPHQL_URI!,
      auth: {
        uri: process.env.NEXT_PUBLIC_DRUPAL_AUTH_URI!,
        clientId: process.env.NEXT_PUBLIC_DRUPAL_CLIENT_ID!,
        clientSecret: process.env.NEXT_PUBLIC_DRUPAL_CLIENT_SECRET!,
      },
    })

    const variables: Record<string, any> = {}
    if (paginationParams.first !== undefined)
      variables.first = paginationParams.first
    if (paginationParams.after) variables.after = paginationParams.after
    if (paginationParams.before) variables.before = paginationParams.before
    if (paginationParams.last !== undefined)
      variables.last = paginationParams.last

    console.log('GraphQL Variables:', variables)

    const MY_QUERY = gql`
      query MyQuery($first: Int, $after: Cursor, $before: Cursor, $last: Int) {
        nodeAiDemos(
          first: $first
          after: $after
          before: $before
          last: $last
        ) {
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
            youtubeUrl {
              url
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
      }
    `

    const result = await client.query(MY_QUERY, variables).toPromise()

    if (!result.data) {
      console.error('GraphQL response error:', result.error)
      throw new Error(result.error?.message || 'GraphQL query failed')
    }
    console.log(result.data.nodeAiDemos.nodes)

    return {
      nodes: result.data.nodeAiDemos.nodes,
      pageInfo: result.data.nodeAiDemos.pageInfo,
    }
  } catch (err) {
    console.error('fetchDemos failed:', err)
    return {
      nodes: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: null,
        endCursor: null,
      },
    }
  }
}
