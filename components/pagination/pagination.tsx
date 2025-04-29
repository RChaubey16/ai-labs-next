import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  prevLink: string | null;
  nextLink: string | null;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export default function Pagination({
  currentPage,
  totalPages,
  prevLink,
  nextLink,
  hasPreviousPage,
  hasNextPage,
}: PaginationProps) {
  return (
    <div className="mt-10 flex justify-center items-center space-x-4">
      {prevLink ? (
        <Link href={prevLink}>
          <Button variant="outline" disabled={!hasPreviousPage}>
            Previous
          </Button>
        </Link>
      ) : (
        <Button variant="outline" disabled={!hasPreviousPage}>
          Previous
        </Button>
      )}
      <span className="text-sm text-gray-700">
        Page {currentPage} of {totalPages}
      </span>
      {nextLink ? (
        <Link href={nextLink}>
          <Button variant="outline" disabled={!hasNextPage}>
            Next
          </Button>
        </Link>
      ) : (
        <Button variant="outline" disabled={!hasNextPage}>
          Next
        </Button>
      )}
    </div>
  );
}