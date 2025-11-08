import { BsFillBootstrapFill, BsRobot } from 'react-icons/bs';
import {
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiUnity,
  SiTensorflow,
  SiDocker,
  SiPytorch,
} from 'react-icons/si';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  Python: <SiPython size={iconSize} className='text-emerald-500' />,
  'C++': <SiCplusplus size={iconSize} className='text-emerald-500' />,
  Unity: <SiUnity size={iconSize} className='text-emerald-500' />,
  TensorFlow: <SiTensorflow size={iconSize} className='text-emerald-500' />,
  Ollama: <BsRobot size={iconSize} className='text-emerald-500' />,
  AutoML: <BsRobot size={iconSize} className='text-orange-500' />,
  PyCaret: <SiPython size={iconSize} className='text-blue-600' />,
  PyTorch: <SiPytorch size={iconSize} className='text-red-500' />,
  // 'Artificial Intelligence/Machine Learning': (
  //   <BsRobot size={iconSize} className='text-rose-500' />
  // ),
  CSS: <SiCss3 size={iconSize} className='text-blue-300' />,
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-400' />,
  TypeScript: <SiTypescript size={iconSize} className='text-blue-400' />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  TailwindCSS: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  // Bootstrap: (
  //   <BsFillBootstrapFill size={iconSize} className='text-purple-500' />
  // ),
  Docker: <SiDocker size={iconSize} className='text-blue-500' />,
};
