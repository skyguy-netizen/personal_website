import { VOLUNTEERING } from '@/common/constant/volunteer';

import CareerCard from './CareerCard';

const VolunteeringList = () => {
  return (
    <section className='space-y-6'>
      <div className='grid gap-3 '>
        {VOLUNTEERING?.map((career, index) => (
          <CareerCard key={index} {...career} />
        ))}
      </div>
    </section>
  );
};

export default VolunteeringList;
