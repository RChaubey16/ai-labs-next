import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import { YoutubeEmbed } from '@/components/youtube-embed/youtube-embed'
import { fetchDemos } from '@/hooks/FetchDemos'
import { fetchDemoById } from '@/hooks/FetchDemoById'
import { notFound } from 'next/navigation'
import { REVALIDATE_TIME } from '@/constants'
export async function generateStaticParams() {
  let allDemos: { id: string }[] = []
  let hasNextPage = true
  let endCursor: string | null = null
  while (hasNextPage) {
    const { nodes, pageInfo } = await fetchDemos({
      first: 100,
      after: endCursor,
    })
    allDemos.push(...nodes.map((node) => ({ id: node.id })))
    hasNextPage = pageInfo.hasNextPage
    endCursor = pageInfo.endCursor
  }
  return allDemos
}
export default async function DemoDetail({
  params,
}: {
  params: { id: string }
}) {
  const data = await fetchDemoById(params.id)
  if (!data) notFound()
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6 flex flex-col items-center">
            <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-5xl text-center">
              {data.title}
            </h1>
            {data.youtubeUrl?.url && (
              <div className="mb-8 aspect-video w-full overflow-hidden rounded-lg bg-gray-100 max-w-3xl">
                <YoutubeEmbed videoId={extractYouTubeId(data.youtubeUrl.url)} />
              </div>
            )}
            <div
              className="dark:text-white w-full max-w-3xl"
              dangerouslySetInnerHTML={{
                __html: data.description?.processed ?? '',
              }}
            />
            <div className="mt-12 flex flex-col gap-4 sm:flex-row justify-center w-full">
              <a
                href="/test"
                className="inline-flex items-center justify-center rounded-md bg-gray-100 px-6 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                Back to Demos
              </a>
              <a
                href="#"
                className="bg-qed-blue inline-flex items-center justify-center rounded-md px-6 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Try this Demo
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
function extractYouTubeId(url: string): string {
  try {
    const u = new URL(url)
    return u.searchParams.get('v') || u.pathname.split('/').pop() || ''
  } catch {
    return ''
  }
}
export const revalidate = REVALIDATE_TIME
