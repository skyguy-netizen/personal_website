import { useEffect, useState } from 'react';

import useIsMobile from '@/common/hooks/useIsMobile';

import Navigation from '../../sidebar/Navigation';
import Profile from '../../sidebar/Profile';

const Sidebar = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id='sidebar'
      // className='flex flex-col space-y-6 transition-all duration-300 lg:py-8'
      className='sticky top-0 z-10 flex flex-col space-y-6 transition-all duration-300 lg:py-6'
    >
      <Profile isScrolled={isScrolled} />
      {!isMobile && (
        <div className='space-y-3'>
          <Navigation />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
