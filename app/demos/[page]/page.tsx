import { fetchDemos } from '@/hooks/useFetchDemos';
import ProjectCard from '@/components/project-card';
import Pagination from '@/components/pagination/pagination';
import { notFound } from 'next/navigation';

const ITEMS_PER_PAGE = 6;

type Demo = {
  id: string;
  title: string;
  description: { value: string };
  technologies: { id: string; name: string; path: string }[];
  path: string;
};

type PageProps = {
  params: { page: string };
};

async function fetchAllDemos(): Promise<Demo[]> {
  let allDemos: Demo[] = [];
  let hasNextPage = true;
  let endCursor: string | null = null;

  while (hasNextPage) {
    const { nodes, pageInfo } = await fetchDemos({
      first: 100,
      after: endCursor,
    });
    allDemos = [...allDemos, ...nodes];
    hasNextPage = pageInfo.hasNextPage;
    endCursor = pageInfo.endCursor;
  }

  return allDemos;
}

export async function generateStaticParams() {
  const allDemos = await fetchAllDemos();
  const totalPages = Math.ceil(allDemos.length / ITEMS_PER_PAGE);

  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

export default async function DemosPage({ params }: PageProps) {
  const page = parseInt(params.page, 10);
  if (isNaN(page) || page < 1) {
    notFound();
  }

  const allDemos = await fetchAllDemos();
  const totalPages = Math.ceil(allDemos.length / ITEMS_PER_PAGE);

  if (page > totalPages) {
    notFound();
  }

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const demos = allDemos.slice(startIndex, endIndex);

  const hasPreviousPage = page > 1;
  const hasNextPage = page < totalPages;

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">All AI Demos</h1>
          <p className="text-gray-600">Explore our collection of AI experiments</p>
        </div>

        {demos.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <p>No demos available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {demos.map((demo) => (
              <ProjectCard
                key={demo.id}
                title={demo.title}
                description={demo.description.value}
                tags={demo.technologies}
                demoUrl={demo.path}
                path={demo.path}
              />
            ))}
          </div>
        )}

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          prevLink={hasPreviousPage ? `/demos/${page - 1}` : null}
          nextLink={hasNextPage ? `/demos/${page + 1}` : null}
          hasPreviousPage={hasPreviousPage}
          hasNextPage={hasNextPage}
        />
      </div>
    </section>
  );
}

// export const revalidate = 3600; // Revalidate every hour (3600 seconds)