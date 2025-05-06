import { Demo } from '@/components/demos/demos'
import { fetchDemos } from './FetchDemos'

export default async function fetchAllDemos(): Promise<Demo[]> {
  let allDemos: Demo[] = []
  let hasNextPage = true
  let endCursor: string | null = null
  while (hasNextPage) {
    const { nodes, pageInfo } = await fetchDemos({
      first: 100,
      after: endCursor,
    })
    allDemos = [...allDemos, ...nodes]
    hasNextPage = pageInfo.hasNextPage
    endCursor = pageInfo.endCursor
  }
  return allDemos
}
