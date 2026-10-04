import Link from 'next/link';

import SectionHeading from '@/common/components/elements/SectionHeading';
import { NEWS } from '@/common/constant/news';

const NewsSection = () => {
  return (
    <section className='space-y-5'>
      <SectionHeading title='News' />
      <div>
        {NEWS?.map((item, index) => (
          <div key={index} className='relative flex gap-4'>
            <div className='flex flex-col items-center'>
              <span className='mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-neutral-500 dark:bg-neutral-400' />
              {index < NEWS.length - 1 && (
                <span className='w-px flex-1 bg-neutral-300 dark:bg-neutral-700' />
              )}
            </div>
            <div className={index < NEWS.length - 1 ? 'pb-6' : ''}>
              <div className='text-sm font-medium text-neutral-500 dark:text-neutral-400'>
                {item.date}
              </div>
              <p className='text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-300'>
                {item.text}{' '}
                {item.link && (
                  <Link
                    href={item.link}
                    className='text-blue-500 hover:underline dark:text-blue-400'
                  >
                    {item.linkLabel || 'Learn more'}
                  </Link>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
