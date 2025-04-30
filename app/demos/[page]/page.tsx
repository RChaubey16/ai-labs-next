import { fetchDemos } from '@/hooks/FetchDemos'
import Pagination from '@/components/pagination/pagination'
import { notFound } from 'next/navigation'
import { Demo } from '@/components/demos/demos'
import DemoGallery from '@/components/demo-gallery/demo-gallery'
import { REVALIDATE_TIME } from '@/constants'
const ITEMS_PER_PAGE = 6

type PageProps = {
  params: { page: string }
}

async function fetchAllDemos(): Promise<Demo[]> {
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

export async function generateStaticParams() {
  const allDemos = await fetchAllDemos()
  const totalPages = Math.ceil(allDemos.length / ITEMS_PER_PAGE)

  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }))
}

export default async function DemosPage({ params }: PageProps) {
  const page = parseInt(params.page, 10)
  if (isNaN(page) || page < 1) {
    notFound()
  }

  const allDemos = await fetchAllDemos()
  const totalPages = Math.ceil(allDemos.length / ITEMS_PER_PAGE)

  if (page > totalPages) {
    notFound()
  }

  const startIndex = (page - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const demos = allDemos.slice(startIndex, endIndex)

  const hasPreviousPage = page > 1
  const hasNextPage = page < totalPages

  return (
    <section className="py-16 md:py-24">
      <DemoGallery
        demos={demos}
        page={page}
        totalPages={totalPages}
        hasPreviousPage={hasPreviousPage}
        hasNextPage={hasNextPage}
        
      />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        prevLink={hasPreviousPage ? `/demos/${page - 1}` : null}
        nextLink={hasNextPage ? `/demos/${page + 1}` : null}
        hasPreviousPage={hasPreviousPage}
        hasNextPage={hasNextPage}
      />
    </section>
  )
}

export const revalidate = REVALIDATE_TIME
