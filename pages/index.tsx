import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import ProjectCard from 'components/ProjectCard';
import VideoCard from '../components/VideoCard';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Jakša Vlahović
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Fullstack Developer
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Helping people build their ideas and products. I love web
                development, serverless, and React, React Native and Next.js.
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Jaksa Vlahovic"
                height={176}
                width={176}
                src="/avatar.jpg"
                sizes="30vw"
                priority
                className="rounded-full"
              />
            </div>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Featured Projects
          </h3>
          <div className="flex gap-6 flex-col md:flex-row">
            <ProjectCard
              title="Twitter Clone"
              slug="twitter-clone"
              gradient="from-[#0093E9] to-[#80D0C7]"
            />
            <ProjectCard
              title="Project 2"
              slug="project-2"
              gradient="from-[#0093E9] to-[#80D0C7]"
            />
            <ProjectCard
              title="Project 3"
              slug="project-3"
              gradient="from-[#0093E9] to-[#80D0C7]"
            />
          </div>
          <Link
            href="/blog"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            <>
              {'See all projects'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </>
          </Link>
        </div>
      </Container>
    </Suspense>
  );
}
