import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
// import About from '@/modules/about';
import Resume from '@/modules/about/components/Resume';

const PAGE_TITLE = 'Curriculum Vitae';
const PAGE_DESCRIPTION = "I don't like sand";

const ResumePage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Aarav Sane`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Resume />
      </Container>
    </>
  );
};

export default ResumePage;
