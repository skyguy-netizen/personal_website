import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import PublicationList from '@/modules/about/components/PublicationList';

const PAGE_TITLE = 'Publications';
const PAGE_DESCRIPTION = 'Papers and research';

const PublicationsPage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Aarav Sane`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <PublicationList />
      </Container>
    </>
  );
};

export default PublicationsPage;
