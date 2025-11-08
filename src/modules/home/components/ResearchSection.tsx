// import { BsArrowUpRightSquare } from 'react-icons/bs';

// import SectionHeading from '@/common/components/elements/SectionHeading';
// import { RESEARCH_PROJECTS } from '@/common/constant/research';

// const ResearchSection = () => {
//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'active':
//         return 'bg-green-500/20 text-green-500 border-green-500/30';
//       case 'ongoing':
//         return 'bg-blue-500/20 text-blue-500 border-blue-500/30';
//       case 'completed':
//         return 'bg-gray-500/20 text-gray-500 border-gray-500/30';
//       default:
//         return 'bg-gray-500/20 text-gray-500 border-gray-500/30';
//     }
//   };

//   return (
//     <section className='space-y-5'>
//       <div className='space-y-3'>
//         <SectionHeading title='Research & Projects' />
//         <p className='text-neutral-600 dark:text-neutral-400'>
//           Current and past research projects in Machine Learning and Artificial
//           Intelligence
//         </p>
//       </div>
//       <div className='grid gap-4 md:grid-cols-2'>
//         try {} catch (error) {}
//         {RESEARCH_PROJECTS.map((project, index) => (
//           <div
//             key={index}
//             className='group relative rounded-lg border border-neutral-300 bg-neutral-50 p-6 transition-all duration-300 hover:border-neutral-400 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-800/50 hover:dark:border-neutral-600'
//           >
//             <div className='mb-3 flex items-start justify-between'>
//               <h3 className='text-lg font-semibold text-neutral-800 dark:text-neutral-200'>
//                 {project.title}
//               </h3>
//               {project.link && (
//                 <BsArrowUpRightSquare className='text-neutral-400 transition-colors group-hover:text-neutral-600 dark:text-neutral-500 group-hover:dark:text-neutral-300' />
//               )}
//             </div>
//             <p className='mb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400'>
//               {project.description}
//             </p>
//             <div className='mb-4 flex items-center gap-2'>
//               <span
//                 className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${getStatusColor(
//                   project.status,
//                 )}`}
//               >
//                 {project.status.charAt(0).toUpperCase() +
//                   project.status.slice(1)}
//               </span>
//               <span className='text-xs text-neutral-500 dark:text-neutral-400'>
//                 {project.period}
//               </span>
//             </div>
//             <div className='flex flex-wrap gap-2'>
//               {project.tags.map((tag, tagIndex) => (
//                 <span
//                   key={tagIndex}
//                   className='rounded-md bg-neutral-200 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300'
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ResearchSection;
