import { YoutubeEmbed } from '@/components/youtube-embed/youtube-embed'
import { fetchDemoById } from '@/hooks/FetchDemoById'
import { notFound } from 'next/navigation'
import { REVALIDATE_TIME } from '@/constants'
import fetchAllDemos from '@/hooks/FetchAllDemos'
import { stripHtmlTags } from '@/lib/utils'

// Type definitions
interface MetaTagAttributes {
  [key: string]: string;
}

interface MetaTagValue {
  __typename: 'MetaTagValue';
  attributes: MetaTagAttributes;
}

interface MetaTagProperty {
  __typename: 'MetaTagProperty';
  attributes: MetaTagAttributes;
}

interface MetaTagLink {
  __typename: 'MetaTagLink';
  attributes: MetaTagAttributes;
}

type MetaTag = MetaTagValue | MetaTagProperty | MetaTagLink;

interface OpenGraphMetadata {
  title: string;
  description: string;
  url: string;
  images: Array<{ url: string }>;
}

interface TwitterMetadata {
  title: string;
  description: string;
  images: string[];
  card: 'summary_large_image' | 'summary';
}

interface PageMetadata {
  title: string;
  description: string;
  openGraph: OpenGraphMetadata;
  twitter: TwitterMetadata;
  metaTags: (JSX.Element | null)[];
}

export async function generateStaticParams() {
  try {
    const allDemos = await fetchAllDemos()
    console.log(`Generating static params for ${allDemos.length} demos`)
    
    if (allDemos.length === 0) {
      console.error('No demos available for static generation - this will cause 404 errors')
    }
    
    return allDemos.map((demo) => {
      const slug = demo.path.split('/').pop()!
      console.log(`Generating static path for slug: ${slug}`)
      return { slug }
    })
  } catch (error) {
    console.error('Error in generateStaticParams:', error)
    throw error // This will fail the build, which is better than silent failure
  }
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
    return {}
  }
  const data = await fetchDemoById(demo.id)
  if (!data) {
    notFound()
  }
  const metatags = data.metatag || []
  const youtubeId = data.youtubeUrl?.url
    ? extractYouTubeId(data.youtubeUrl.url)
    : null

  const thumbnailUrl = youtubeId
    ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
    : undefined

  const metaDescription = stripHtmlTags(data?.description?.value)

  return {
    title: data.title,
    description: metaDescription,
    openGraph: {
      title: data.title,
      description: metaDescription,
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
  try {
    const allDemos = await fetchAllDemos()
    console.log(`Fetched ${allDemos.length} demos for slug: ${params.slug}`)
    
    const match = allDemos.find(
      (demo) => demo.path.split('/').pop() === params.slug
    )
    
    if (!match) {
      console.error(`No demo found for slug: ${params.slug}`)
      notFound()
    }

    const data = await fetchDemoById(match.id)
    if (!data) {
      console.error(`fetchDemoById returned null for ID: ${match.id}`)
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
  } catch (error) {
    console.error('Error in DemoDetail:', error)
    throw error
  }
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
