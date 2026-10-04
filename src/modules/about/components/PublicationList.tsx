import { PUBLICATIONS } from '@/common/constant/publications';

import PublicationCard from './PublicationCard';

const PublicationList = () => {
  return (
    <section className='space-y-6'>
      <p className='text-sm text-neutral-500 dark:text-neutral-400'>
        <span className='text-blue-600 dark:text-blue-300'>Blue</span> —
        Conference.{' '}
        <span className='text-orange-600 dark:text-orange-300'>Orange</span> —
        Journal. <span className='text-pink-600 dark:text-pink-300'>Pink</span>{' '}
        — Workshop / Other.
      </p>
      <div className='grid gap-4 md:grid-cols-1'>
        {PUBLICATIONS?.map((item, index) => (
          <PublicationCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default PublicationList;
