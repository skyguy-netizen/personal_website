import { BiRocket as ContactIcon } from 'react-icons/bi';
import {
  BsEnvelopeAtFill as EmailIcon,
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTwitter as TwitterIcon,
} from 'react-icons/bs';
import {
  FiBookOpen as LearnIcon,
  FiCoffee as ProjectIcon,
  FiCpu as DashboardIcon,
  FiPieChart as AnalyticsIcon,
  FiPocket as HomeIcon,
  FiRss as BlogIcon,
  FiUser as ProfileIcon,
} from 'react-icons/fi';

import {
  HiOutlineAcademicCap as EducationIcon,
  HiOutlineBookmark as AboutIcon,
  HiOutlineBriefcase as CareerIcon,
  HiOutlineDocumentText as ResumeIcon,
  HiOun,
} from 'react-icons/hi';

// import { BsBuildings as CompanyIcon } from 'react-icons/bs';
// import { IoSchool } from 'react-icons/io5';

import { PiChatCircleDotsBold as ChatIcon } from 'react-icons/pi';
import { SiJavascript } from 'react-icons/si';

import { MenuItemProps } from '../types/menu';

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home',
    type: 'Pages',
  },
  {
    title: 'Education',
    href: '/education',
    icon: <EducationIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home',
    type: 'Pages',
  },
  {
    title: 'Career',
    href: '/career',
    icon: <CareerIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About',
    type: 'Pages',
  },
  {
    title: 'Volunteering',
    href: '/volunteering',
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Volunteering',
    type: 'Pages',
  },
  // {
  //   title: 'Blog',
  //   href: '/blog',
  //   icon: <BlogIcon size={iconSize} />,
  //   isShow: false,
  //   isExternal: false,
  //   eventName: 'Pages: Blog',
  //   type: 'Pages',
  // },
  // {
  //   title: 'Learn',
  //   href: '/learn',
  //   icon: <LearnIcon size={iconSize} />,
  //   isShow: false,
  //   isExternal: false,
  //   eventName: 'Pages: Learn',
  //   type: 'Pages',
  // },
  // {
  //   title: 'About',
  //   href: '/about',
  //   icon: <ProfileIcon size={iconSize} />,
  //   isShow: true,
  //   isExternal: false,
  //   eventName: 'Pages: About',
  //   type: 'Pages',
  // },
  {
    title: 'Resume',
    href: '/resume',
    icon: <ResumeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Github Stats',
    type: 'Pages',
  },
  {
    title: 'Github Stats',
    href: '/stats',
    icon: <DashboardIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Github Stats',
    type: 'Pages',
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <ContactIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Contact',
    type: 'Pages',
  },
  // {
  //   title: 'Guestbook',
  //   href: '/guestbook',
  //   icon: <ChatIcon size={iconSize} />,
  //   isShow: false,
  //   isExternal: false,
  //   eventName: 'Pages: Chat',
  //   type: 'Pages',
  // },
];

// export const MENU_APPS: MenuItemProps[] = [
//   {
//     title: 'JS Playground',
//     href: '/playground',
//     icon: <SiJavascript size={iconSize} />,
//     isShow: false,
//     isExternal: false,
//     eventName: 'Pages: Playground',
//     type: 'Pages',
//   },
// ];

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: 'Email',
    href: 'mailto:aaravtennis@gmail.com',
    icon: <EmailIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Contact: Email',
    className: '!bg-green-600 border border dark:border-neutral-700',
    type: 'Link',
  },

  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/aarav-sane/',
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Linkedin',
    className: '!bg-blue-500 border border dark:border-neutral-700',
    type: 'Link',
  },
  {
    title: 'Twitter',
    href: 'https://x.com/agsane8108?s=09',
    icon: <TwitterIcon size={iconSize} />,
    isShow: false,
    isExternal: true,
    eventName: 'Social: Twitter',
    className: '!bg-sky-500 border border dark:border-neutral-700',
    type: 'Link',
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/aarav_sane',
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Instagram',
    className: '!bg-orange-700 border border dark:border-neutral-700',
    type: 'Link',
  },
  {
    title: 'Github',
    href: 'https://github.com/skyguy-netizen',
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Github',
    className: '!bg-black border border dark:border-neutral-700',
    type: 'Link',
  },
];

// export const EXTERNAL_LINKS: MenuItemProps[] = [
//   {
//     title: 'Analytics',
//     href: 'https://analytics.aulianza.com/share/LK5kiRuosw9pORLa/aulianza.id',
//     icon: <AnalyticsIcon size={iconSize} />,
//     isShow: false,
//     isExternal: true,
//     eventName: 'External Link: Analytics',
//     type: 'Link',
//   },
// ];
