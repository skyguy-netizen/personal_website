import Image from '@/common/components/elements/Image';
import SectionHeading from '@/common/components/elements/SectionHeading';
import { HOBBY_PHOTOS } from '@/common/constant/hobbies';

const Hobbies = () => {
  return (
    <div className='space-y-10'>
      <section className='space-y-5'>
        <SectionHeading title='Photography' />
        {/* <p className='text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400'>
          I&apos;m learning to take good photos — mostly nature and scenic
          views. This is where I&apos;ll put the ones I&apos;m proud of.
        </p> */}
        {HOBBY_PHOTOS.length === 0 ? (
          <div className='rounded-lg border border-dashed border-neutral-300 px-6 py-10 text-center text-sm text-neutral-500 dark:border-neutral-700 dark:text-neutral-400'>
            No photos yet — the first ones will land here soon.
          </div>
        ) : (
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            {HOBBY_PHOTOS.map((src) => (
              <div
                key={src}
                className='relative h-64 w-full overflow-hidden rounded-lg'
              >
                <Image
                  src={src}
                  alt={src.split('/').pop()?.split('.')[0] ?? 'Hobby photo'}
                  fill
                  className='object-cover'
                />
              </div>
            ))}
          </div>
        )}
      </section>

      <section className='space-y-5'>
        <SectionHeading title='Art' />
        {/* <p className='text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400'>
          Something I want to explore more of — sketching, painting, and
          whatever else catches my eye. Work in progress.
        </p> */}
        <div className='rounded-lg border border-dashed border-neutral-300 px-6 py-10 text-center text-sm text-neutral-500 dark:border-neutral-700 dark:text-neutral-400'>
          Nothing to show yet — check back later.
        </div>
      </section>

      <section className='space-y-5'>
        <SectionHeading title='Music' />
        {/* <p className='text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400'>
          Always listening, slowly learning. Playlists, finds, and progress
          will live here.
        </p> */}
        <div className='rounded-lg border border-dashed border-neutral-300 px-6 py-10 text-center text-sm text-neutral-500 dark:border-neutral-700 dark:text-neutral-400'>
          Nothing to show yet — check back later.
        </div>
      </section>
    </div>
  );
};

export default Hobbies;
