import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
// import About from '@/modules/about';
import CareerList from '@/modules/about/components/CareerList';

const PAGE_TITLE = 'Career';
const PAGE_DESCRIPTION = 'My career at a glimpse';

const CareerPage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Aarav Sane`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <CareerList />
      </Container>
    </>
  );
};

export default CareerPage;
