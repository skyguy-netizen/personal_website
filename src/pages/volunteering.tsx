import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
// import About from '@/modules/about';
import VolunteeringList from '@/modules/about/components/VolunteeringList';

const PAGE_TITLE = 'Volunteering';
const PAGE_DESCRIPTION = 'Just for fun & passion';

const VolunteeringPage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Aarav Sane`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <VolunteeringList />
      </Container>
    </>
  );
};

export default VolunteeringPage;
