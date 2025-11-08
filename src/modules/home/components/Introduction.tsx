const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2  text-2xl font-medium lg:text-3xl'>
          <h1>Hello there - I&apos;m Aarav</h1>{' '}
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
      </div>

      <p className='mt-6 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
        I'm currently a Computer Science Doctorate Student at Purdue University
        under the guidance of{' '}
        <a
          href='https://www.cs.purdue.edu/homes/ayg/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 hover:underline dark:text-blue-400'
        >
          Dr. Ananth Grama
        </a>
        and{' '}
        <a
          href='https://www.rohanpaleja.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 hover:underline dark:text-blue-400'
        >
          Dr. Rohan Paleja
        </a>{' '}
        , with an interest in Machine Learning and Artificial Intelligence. I
        previously completed my Bachelor of Science degree from University of
        California, Riverside, where I also played and captained the NCAA D1
        tennis team.
      </p>
    </section>
  );
};

export default Introduction;
