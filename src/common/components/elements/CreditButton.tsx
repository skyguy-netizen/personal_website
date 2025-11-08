import { useState } from 'react';
import { FiInfo } from 'react-icons/fi';

const CreditButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed bottom-4 right-4 z-50'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='rounded-full bg-gray-800 p-3 text-white shadow-lg transition-colors hover:bg-gray-700'
        aria-label='Credits'
      >
        <FiInfo size={20} />
      </button>

      {isOpen && (
        <div className='absolute bottom-16 right-0 w-64 rounded-lg bg-white p-4 text-sm text-gray-700 shadow-xl dark:bg-gray-800 dark:text-gray-300'>
          <p>
            Website template by{' '}
            <a
              href='https://github.com/aulianza'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline'
            >
              @aulianza
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default CreditButton;
