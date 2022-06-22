import { ButtonType } from '@/lib/types';
import { Button } from '@/components/Button';
import { Container } from 'layouts/Container';
import { useRouter } from 'next/router';
import { ResumeDownload } from '@/components/ResumeDownload';
import Link from 'next/link';

const workExperience = [
  {
    company: 'Zed Sharing App',
    title: 'Frontend Developer',
    duration: 'Jun 1 - Jun 30 (2022)'
  },
  {
    company: 'Seraph',
    title: 'Frontend Developer',
    duration: 'March 1 - April 30 (2022)'
  },
  {
    company: 'Darwin',
    title: 'Fullstack Web Developer Intern',
    duration: 'May 5 - May 18 (2022)'
  },
  {
    company: 'Nova',
    title: 'Frontend Developer',
    duration: 'Jan 13 - Feb 17 (2022)'
  },
  {
    company: 'Stackz',
    title: 'Fullstack Web Developer Intern',
    duration: 'Oct 8 - Nov 3 (2021)'
  }
];

export default function Home({ recentArticles }) {
  const { push } = useRouter();
  return (
    <Container showCircles>
      <div>
        <div>
          <div className="grid items-center grid-cols-1 mt-12 text-center md:mt-24 md:text-left md:grid-cols-6">
            <h1 className="order-2 col-span-5 text-4xl leading-tight md:leading-normal md:order-1 sm:text-5xl">
              Hello 👋. My name is{' '}
              <span className="text-teal-500 dark:text-teal-400">Obed</span>. I
              am a fullstack web developer.
            </h1>
            <div className="order-1 md:order-2">
              {/* <Image
                alt="Obed Boakye Danquah"
                height={160}
                width={160}
                src={siteMetadata.avatarImage}
                placeholder="blur"
                blurDataURL={siteMetadata.avatarImage}
                className="col-span-1 rounded-full"
                layout="fixed"
              /> */}
            </div>
          </div>
          <div className="space-y-6 md:space-y-0 md:space-x-4">
            <ResumeDownload buttonType={ButtonType.PRIMARY}>
              Download Resume
            </ResumeDownload>
            <Button
              buttonType={ButtonType.SECONDARY}
              onButtonClick={() => push('/projects')}
            >
              Projects
            </Button>
          </div>
        </div>
        <hr className="hr"></hr>
        {/* <div>
          <h2>I love to share my knowledge through writing.</h2>
          <p>Check out a few of my most recent publishings.</p>
          <div className="my-16">
            <Button
              buttonType={ButtonType.PRIMARY}
              onButtonClick={() => push('/blog')}
            >
              See all articles
            </Button>
          </div>
          <div className="mt-16">
            <Subscribe size={SubscribeSize.LARGE} />
          </div>
        </div> */}
        <div className="mt-12 space-y-6">
          <h2 className="m-0 text-gray-900 dark:text-white">Work experience</h2>
          <p>
            Here&apos;s a brief rundown of my most recent experiences (personal
            projects).
          </p>
          <Link href="/projects">
            <p className="cursor-pointer">Find them here</p>
          </Link>
          <div className="space-y-2">
            {workExperience.map((workItem) => (
              <div
                key={workItem.company}
                className="flex items-center space-x-3 group flex-wrap sm:flex-nowrap"
              >
                <span className="flex-none text-gray-900 gover-hover:underline dark:text-white mb-2 sm:mb-0">
                  {workItem.company}
                </span>
                <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-700 mb-2 sm:mb-0"></span>
                {/* <span className="flex-none mb-2 sm:mb-0">{workItem.title}</span> */}
                <span className="flex-none mb-2 sm:mb-0">
                  {workItem.duration}
                </span>
              </div>
            ))}
          </div>
          {/* <div className="inline-flex w-full md:w-auto ">
            <a
              className="items-center justify-center w-full px-4 py-3 text-sm font-medium text-center text-white no-underline rounded-full md:text-xl md:px-12 bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
              href={siteMetadata.resume}
              target="_blank"
              rel="noreferrer"
            >
              View my resume
            </a>
          </div> */}
        </div>
      </div>
    </Container>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const data = await getPublishedArticles(process.env.BLOG_DATABASE_ID);
//   const { articles } = convertToArticleList(data);
//   await generateRssFeed();

//   return {
//     props: {
//       recentArticles: articles.slice(0, 3)
//     },
//     revalidate: 30
//   };
// };
