import { Demo } from '@/components/demos/demos'
import { fetchDemos } from './FetchDemos'

export default async function fetchAllDemos(): Promise<Demo[]> {
  try {
    let allDemos: Demo[] = []
    let hasNextPage = true
    let endCursor: string | null = null
    
    console.log('Starting to fetch all demos')
    
    while (hasNextPage) {
      try {
        const { nodes, pageInfo } = await fetchDemos({
          first: 100,
          after: endCursor,
        })
        
        if (!nodes || nodes.length === 0) {
          console.warn('Received empty nodes in fetchAllDemos, pageInfo:', pageInfo)
        }
        
        allDemos = [...allDemos, ...nodes]
        hasNextPage = pageInfo.hasNextPage
        endCursor = pageInfo.endCursor
        
        console.log(`Fetched ${nodes.length} demos, total: ${allDemos.length}`)
      } catch (error) {
        console.error('Error in fetchAllDemos pagination loop:', error)
        throw error
      }
    }
    
    if (allDemos.length === 0) {
      console.error('No demos were fetched, this might cause 404 errors')
    }
    
    return allDemos
  } catch (error) {
    console.error('Fatal error in fetchAllDemos:', error)
    throw error // Let Next.js handle the error instead of returning empty array
  }
}
