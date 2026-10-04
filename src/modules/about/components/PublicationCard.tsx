import { HiOutlineDocumentText as PaperIcon } from 'react-icons/hi';

import Card from '@/common/components/elements/Card';
import { PublicationKind, PublicationProps } from '@/common/types/publications';

const TAG_STYLES: Record<PublicationKind, string> = {
  conference:
    'border-blue-400/40 bg-blue-500/15 text-blue-600 dark:text-blue-300',
  journal:
    'border-orange-400/40 bg-orange-500/15 text-orange-600 dark:text-orange-300',
  workshop:
    'border-pink-400/40 bg-pink-500/15 text-pink-600 dark:text-pink-300',
};

const PublicationCard = ({
  title,
  authors,
  tag,
  venue,
  kind,
  link,
  tagLink,
}: PublicationProps) => {
  return (
    <Card className='flex flex-col gap-4 border border-neutral-300 px-6 py-4 dark:border-neutral-900 sm:flex-row sm:items-center sm:gap-5'>
      <PaperIcon size={50} />

      <div className='space-y-1'>
        <a
          href={link || '#'}
          target='_blank'
          data-umami-event={`Click Publication: ${title}`}
        >
          <h6>{title}</h6>
        </a>
        <div className='space-y-2 text-sm text-neutral-600 dark:text-neutral-400'>
          <div>{authors}</div>
          <p className='italic'>
            <a
              href={tagLink || link || '#'}
              target='_blank'
              className={`mr-2 inline-block rounded border px-1.5 py-0.5 text-xs font-semibold not-italic ${TAG_STYLES[kind]}`}
            >
              {tag}
            </a>
            {venue}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PublicationCard;
