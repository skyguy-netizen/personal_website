import fs from 'fs';
import path from 'path';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import LifeGallery from '@/modules/images/components/LifeGallery';

interface ImagesPageProps {
  imagePaths: string[];
}

const PAGE_TITLE = 'Images';
const PAGE_DESCRIPTION = 'Snapshots from my life';

const ImagesPage: NextPage<ImagesPageProps> = ({ imagePaths }) => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Aarav Sane`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <LifeGallery images={imagePaths} />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps<ImagesPageProps> = async () => {
  const lifeDir = path.join(process.cwd(), 'public', 'images', 'life');
  let files: string[] = [];
  try {
    files = fs.readdirSync(lifeDir);
  } catch (err) {
    // Folder might be empty or not exist yet
    files = [];
  }

  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  const imagePaths = files
    .filter((file) =>
      imageExtensions.includes(path.extname(file).toLowerCase()),
    )
    .map((file) => `/images/life/${file}`);

  return {
    props: {
      imagePaths,
    },
    revalidate: 60, // ISR: rebuild every minute if files change
  };
};

export default ImagesPage;
