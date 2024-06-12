/* eslint-disable simple-import-sort/imports */
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/bg-verde.png';
import porfolioMFD1 from '../images/portfolio/portfolio-mfd-mobile.png';
import porfolioWeCAB1 from '../images/portfolio/portfolio-wecab-desktop.jpeg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Aimee Pederson',
  description: 'Aimee Pederson | Frontend Developer, Conversion Rate Optimization Expert, QA Engineer',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Aimee Pederson.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I develop <strong className="text-stone-100">mobile-first</strong> websites and{' '}
        <strong className="text-stone-100">optimize existing websites</strong> for my clients. With over a{' '}
        <strong className="text-stone-100">
          decade of experience in Ecommerce, Conversion Rate Optimization, and User Experience,
        </strong>{' '}
        I know how to build a site that works for the business and the customer.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Seeing site metrics and user experiences improve is a <strong className="text-stone-100">thrill</strong> that
        keeps me excited about my day-to-day and{' '}
        <strong className="text-stone-100">I'd love to share that with you and your business.</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I watch a lot of Blippi with my pre-schooler, read romance, mystery, and self-improvement
        books, and work on the occasional house project (plant this, build/paint that.)
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I love building beautiful, responsive websites.  I have the most experience with React, 
  HTML, and Boostrap but am always interested in learning new technologies.  Because it is where I began,
   I have a soft spot for looking at data and A/B Testing.  These days, I'm launching my independent 
   career journey!  I continue to do what I love and changing the face of it from corporate to solo 
   allows me to be the best mom and partner I can be.`,
  aboutItems: [
    {label: 'Location', text: 'Minneapolis, MN', Icon: MapIcon},
    {label: 'Age', text: '40', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Interests', text: 'Reading, Gardening, Nature', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Minnesota, Twin Cities', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Self Employed / Contractor', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'German',
        level: 4,
      },
      {
        name: 'ASL',
        level: 4,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML / CSS',
        level: 9,
      },
      {
        name: 'JQuery',
        level: 8,
      },
      {
        name: 'JavaScript',
        level: 7,
      },
      {
        name: 'React',
        level: 5,
      },
      {
        name: 'Flexbox',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'EDI',
        level: 5,
      },
      {
        name: 'PHP',
        level: 4,
      },
      {
        name: 'Java',
        level: 3,
      },
      {
        name: 'Python',
        level: 3,
      },
    ],
  },
  {
    name: 'Analytics',
    skills: [
      {
        name: 'Adobe Analytics',
        level: 8,
      },
      {
        name: 'MS Excel',
        level: 8,
      },
      {
        name: 'MicroStrategy',
        level: 5,
      },
      {
        name: 'SQL',
        level: 3,
      },
    ],
  },
  {
    name: 'Content & Creative',
    skills: [
      {
        name: 'Adobe Photoshop',
        level: 7,
      },
      {
        name: 'Final Cut Pro',
        level: 6,
      },
      {
        name: 'InDesign',
        level: 5,
      },
    ],
  },
  {
    name: 'Miscellaneous',
    skills: [
      {
        name: 'Adobe Target, Monetate, Useitbetter',
        level: 10,
      },
      {
        name: 'SquareSpace',
        level: 8,
      },
      {
        name: 'Aha!',
        level: 8,
      },
      {
        name: 'Atlassian: Confluence, JIRA',
        level: 8,
      },
      {
        name: 'ContentSquare, Glassbox',
        level: 8,
      },
      {
        name: 'Postman',
        level: 5,
      },
      {
        name: 'Git',
        level: 5,
      },
      {
        name: 'Tealium',
        level: 6,
      },
      {
        name: 'Wix',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Mound Fire Department',
    description: 'Webmaster since 2005.',
    url: 'https://moundfire.com',
    image: porfolioMFD1,
  },
  {
    title: 'WeCAB - Site Operations',
    description: 'Site maintenance and consultation, pro bono basis 2013 to 2015.',
    url: 'https://wecab.org',
    image: porfolioWeCAB1,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/pede0364'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/6696064'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/aimee-pederson/'},
];
