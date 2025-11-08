import { GetServerSideProps } from 'next';
import { getProviders, signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';

interface SignInProps {
  providers: {
    [key: string]: {
      id: string;
      name: string;
      type: string;
      signinUrl: string;
      callbackUrl: string;
    };
  };
}

const SignInPage = ({ providers }: SignInProps) => {
  const getProviderIcon = (providerId: string) => {
    switch (providerId) {
      case 'google':
        return <FcGoogle size={20} />;
      case 'github':
        return <FaGithub size={20} />;
      default:
        return null;
    }
  };

  const getProviderColor = (providerId: string) => {
    switch (providerId) {
      case 'google':
        return 'bg-white hover:bg-gray-100 border-gray-300 text-gray-700 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:border-neutral-600';
      case 'github':
        return 'bg-gray-900 hover:bg-gray-800 border-gray-900 text-white dark:bg-gray-800 dark:hover:bg-gray-700';
      default:
        return 'bg-neutral-200 hover:bg-neutral-300 border-neutral-300';
    }
  };

  return (
    <Container data-aos='fade-up'>
      <PageHeading
        title='Sign In'
        description='Sign in to your account to access personalized features'
      />
      <div className='mt-8 space-y-4'>
        {Object.values(providers).map((provider) => (
          <button
            key={provider.id}
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            className={`flex w-full items-center justify-center gap-3 rounded-lg border px-6 py-3 font-medium transition-all duration-300 ${getProviderColor(
              provider.id,
            )}`}
          >
            {getProviderIcon(provider.id)}
            <span>Continue with {provider.name}</span>
          </button>
        ))}
      </div>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers: providers || {},
    },
  };
};

export default SignInPage;
