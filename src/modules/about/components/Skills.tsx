import { memo, ReactNode } from 'react';

import { STACKS } from '@/common/constant/stacks';

const Tag = memo(({ icon, title }: { icon: ReactNode; title: string }) => (
  <div className='mr-3 flex w-max items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-5 py-2 text-[15px] shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50'>
    {icon}
    <span>{title}</span>
  </div>
));

const Skills = () => {
  const skillsArray = Object.entries(STACKS);

  return (
    <div className='space-y-8'>
      <div className='w-full'>
        <div className='relative flex w-full flex-wrap justify-start gap-3 overflow-hidden py-2'>
          {skillsArray.map(([title, icon], index) => (
            <Tag key={index} icon={icon} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
