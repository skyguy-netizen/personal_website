import Breakline from '@/common/components/elements/Breakline';

import Introduction from './Introduction';
import NewsSection from './NewsSection';
// import ResearchSection from './ResearchSection';

const Home = () => {
  return (
    <>
      <Introduction />
      <Breakline className='mb-7 mt-8' />
      <NewsSection />
      {/* <ResearchSection /> */}
      {/* <Breakline className='my-8' /> */}
    </>
  );
};

export default Home;
