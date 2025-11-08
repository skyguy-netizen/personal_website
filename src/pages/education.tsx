import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
// import About from '@/modules/about';
import EducationList from '@/modules/about/components/EducationList';

const PAGE_TITLE = 'Education';
const PAGE_DESCRIPTION = 'What shaped me';

const EducationPage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Aarav Sane`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <EducationList />
      </Container>
    </>
  );
};

export default EducationPage;
