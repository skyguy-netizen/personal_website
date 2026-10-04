import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Hobbies from '@/modules/hobbies/components/Hobbies';

const PAGE_TITLE = 'Hobbies';
const PAGE_DESCRIPTION = 'Things I do for fun';

const HobbiesPage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Aarav Sane`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Hobbies />
      </Container>
    </>
  );
};

export default HobbiesPage;
