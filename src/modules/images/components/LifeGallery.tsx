import Image from 'next/image';
import React from 'react';

export interface LifeGalleryProps {
  images: string[];
}

const LifeGallery: React.FC<LifeGalleryProps> = ({ images }) => {
  if (images.length === 0) {
    return (
      <p className='text-center text-gray-500 dark:text-gray-400'>
        No images yet. Add photos to <code>public/images/life</code> and rebuild
        the site to see them here.
      </p>
    );
  }

  return (
    <div
      className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      data-aos='fade-up'
    >
      {images.map((src) => {
        // Use filename (without extension) as alt text
        const altText = src.split('/').pop()?.split('.')[0] ?? 'Life photo';
        return (
          <div
            key={src}
            className='relative h-64 w-full overflow-hidden rounded-lg shadow-md'
          >
            <Image
              src={src}
              alt={altText}
              layout='fill'
              objectFit='cover'
              placeholder='blur'
              blurDataURL='/next.svg'
              sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw'
            />
          </div>
        );
      })}
    </div>
  );
};

export default LifeGallery;
