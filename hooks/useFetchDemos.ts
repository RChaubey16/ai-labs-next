// hooks/useFetchDemos.ts
import { useState, useEffect } from 'react'
import { gql } from '@urql/core'
import { getClient } from '@/utils/drupal/client'

export const useFetchDemos = () => {
  const [demos, setDemos] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
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
                processed
              }
            }
          }
        }
      `

      try {
        const result = await client.query(MY_QUERY, {}).toPromise()
        console.log(result.data.nodeAiDemos.nodes)
        setDemos(result.data.nodeAiDemos.nodes)

        setLoading(false)
      } catch (error) {
        setError('Error fetching data')
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { demos, loading, error }
}
