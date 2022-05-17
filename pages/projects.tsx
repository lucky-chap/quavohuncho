import { Container } from 'layouts/Container';
import Image from 'next/image';

export default function Projects() {
  return (
    <Container title="Projects - Obed Boakye Danquah">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400">
          Projects
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          A selection of my favorite works.
        </span>
      </h1>
      <div className="grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-3">
        <div className="col-span-1">
          <h2 className="mt-0">Seraph</h2>
          <p>
            Ideated and implemented Seraph, a feature-rich web application for
            creating, accessing and sharing code snippets.
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://seraph-app.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Visit Seraph
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-midnight md:h-[450px] h-auto">
              <Image
                className=""
                objectFit="fill"
                src="/static/seraph.png"
                placeholder="blur"
                blurDataURL="/static/seraph.png"
                width={9110}
                height={3139}
                layout="fill"
                alt={'Seraph screenshot'}
              />
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="mt-0">Nova</h2>
          <p>
            An easy to use agile project management tool designed to help
            visualize work, limit work-in-progress, and maximize efficiency and
            flow.
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://nova-react.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Visit Nova
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-midnight md:h-[450px] h-auto">
              <Image
                className=""
                objectFit="fill"
                src="/static/nova.png"
                placeholder="blur"
                blurDataURL="/static/nova.png"
                width={9110}
                height={3139}
                layout="fill"
                alt={'Nova screenshot'}
              />
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="mt-0">Darwin</h2>
          <p>
            A web application that makes it easy for you to turn your code into
            gifs and images.
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://darwin-app.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Visit Darwin
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-midnight md:h-[450px] h-auto">
              <Image
                className=""
                objectFit="fill"
                src="/static/darwin.png"
                placeholder="blur"
                blurDataURL="/static/darwin.png"
                width={9110}
                height={3139}
                layout="fill"
                alt={'Darwin screenshot'}
              />
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="mt-0">Stackz</h2>
          <p>
            A platform designed and developed with the aim of helping developers
            share ideas through blog posts.
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://stackz.herokuapp.com"
            target="_blank"
            rel="noreferrer"
          >
            Visit Stackz
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-midnight md:h-[450px] h-auto">
              <Image
                className=""
                objectFit="fill"
                src="/static/stackz.png"
                placeholder="blur"
                blurDataURL="/static/stackz.png"
                width={9110}
                height={3139}
                layout="fill"
                alt={'Stackz screenshot'}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
