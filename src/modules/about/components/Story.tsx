import ReactMarkdown from 'react-markdown';

import { ABOUT } from '@/common/constant/about';

const Story = () => {
  return (
    <div className='prose prose-neutral dark:prose-invert max-w-none'>
      <ReactMarkdown>{ABOUT}</ReactMarkdown>
    </div>
  );
};

export default Story;
