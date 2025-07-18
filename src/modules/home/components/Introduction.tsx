const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2  text-2xl font-medium lg:text-3xl'>
          <h1>Hello there - I&apos;m Aarav</h1>{' '}
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
        {/* <div className='space-y-4'>
          <ul className='ml-5 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-10'>
            <li>
              Based in Jakarta, Indonesia <span className='ml-1'>🇮🇩</span>
            </li>
            <li>Working remotely</li>
          </ul>
        </div> */}
      </div>

      <p className='mt-6 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
        I'm currently a Computer Science Doctorate Student at Purdue University
        with an interest in Machine Learning/Artifical Intelligence. I
        previously completed my Bachelor of Science degree from University of
        California, Riverside, where I also played and captained the NCAA D1
        tennis team
      </p>
    </section>
  );
};

export default Introduction;
