import { YoutubeEmbed } from '@/components/youtube-embed/youtube-embed'
import { fetchDemoById } from '@/hooks/FetchDemoById'
import { notFound } from 'next/navigation'
import { REVALIDATE_TIME } from '@/constants'
import fetchAllDemos from '@/hooks/FetchAllDemos'
import { stripHtmlTags, truncateDescription } from '@/lib/utils'

export async function generateStaticParams() {
  const allDemos = await fetchAllDemos()

  return allDemos.map((demo) => ({
    slug: demo.path.split('/').pop()!,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const allDemos = await fetchAllDemos()
  const demo = allDemos.find(
    (demo) => demo.path.split('/').pop() === params.slug
  )
  if (!demo) {
    console.error(`No demo found for slug: ${params.slug}`)
    return {}
  }
  const data = await fetchDemoById(demo.id)
  if (!data) {
    console.error(`No data found for ID: ${demo.id}`)
    notFound()
  }
  const metatags = data.metatag || []
  const youtubeId = data.youtubeUrl?.url
    ? extractYouTubeId(data.youtubeUrl.url)
    : null

  const thumbnailUrl = youtubeId
    ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
    : undefined
  const metaDescription = truncateDescription(
    stripHtmlTags(data.description?.value) || '',
    280
  )

  // Construct dynamic metadata
  interface MetaTagAttributes {
    [key: string]: string
  }

  interface MetaTagValue {
    __typename: 'MetaTagValue'
    attributes: MetaTagAttributes
  }

  interface MetaTagProperty {
    __typename: 'MetaTagProperty'
    attributes: MetaTagAttributes
  }

  interface MetaTagLink {
    __typename: 'MetaTagLink'
    attributes: MetaTagAttributes
  }

  type MetaTag = MetaTagValue | MetaTagProperty | MetaTagLink

  interface OpenGraphMetadata {
    title: string
    description: string
    url: string
    images: Array<{ url: string }>
  }

  interface TwitterMetadata {
    title: string
    description: string
    images: string[]
    card: 'summary_large_image' | 'summary'
  }

  interface PageMetadata {
    title: string
    description: string
    openGraph: OpenGraphMetadata
    twitter: TwitterMetadata
    metaTags: (JSX.Element | null)[]
  }

  return {
    title: data.title,
    description: metaDescription,
    openGraph: {
      title: data.title,
      description: data.description?.value || '',
      url: data.path,
      images: thumbnailUrl ? [{ url: thumbnailUrl }] : [],
    },
    twitter: {
      title: data.title,
      description: metaDescription,
      images: thumbnailUrl ? [thumbnailUrl] : [],
      card: thumbnailUrl ? 'summary_large_image' : 'summary',
    },
    metaTags: metatags.map((tag: MetaTag, index: number) => {
      switch (tag.__typename) {
        case 'MetaTagValue':
        case 'MetaTagProperty':
          return <meta key={index} {...tag.attributes} />
        case 'MetaTagLink':
          return <link key={index} {...tag.attributes} />
        default:
          return null
      }
    }),
  } satisfies PageMetadata
}

export default async function DemoDetail({
  params,
}: {
  params: { slug: string }
}) {
  const allDemos = await fetchAllDemos()
  const match = allDemos.find(
    (demo) => demo.path.split('/').pop() === params.slug
  )
  if (!match) {
    console.error(`No data found for slug: ${params.slug}`)
    notFound()
  }

  const data = await fetchDemoById(match.id)
  if (!data) {
    console.error(`No data found for ID: ${match.id}`)
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container mx-auto flex max-w-4xl flex-col items-center px-4 md:px-6">
            <h1 className="mb-8 text-center text-3xl font-bold tracking-tight md:text-5xl">
              {data.title}
            </h1>
            {data.youtubeUrl?.url && (
              <div className="mb-8 aspect-video w-full max-w-3xl overflow-hidden rounded-lg bg-gray-100">
                <YoutubeEmbed videoId={extractYouTubeId(data.youtubeUrl.url)} />
              </div>
            )}
            <div
              className="w-full max-w-3xl dark:text-white"
              dangerouslySetInnerHTML={{
                __html: data.description?.processed ?? '',
              }}
            />
            <div className="mt-12 flex w-full flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/demos/1"
                className="inline-flex items-center justify-center rounded-md bg-gray-100 px-6 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                Back to Demos
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
