import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import { PropsWithChildren, Suspense } from 'react';

import Container from 'components/Container';
import ViewCounter from 'components/ViewCounter';
import { Project } from 'lib/types';
import { urlForImage } from 'lib/sanity';

export default function ProjectLayout({
  children,
  project
}: PropsWithChildren<{ project: Project }>) {
  return (
    <Container
      title={`${project.title} – Jakša Vlahović`}
      //   description={project.excerpt}
      image={urlForImage(project.coverImage).url()}
      //   date={new Date(project.date).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {project.title}
        </h1>
        <Suspense fallback={null}>
          <div className="w-full mt-4 prose dark:prose-dark max-w-none">
            {children}
          </div>
          {/* <div className="text-sm text-gray-700 dark:text-gray-300">
            <a
              href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
                `https://leerob.io/blog/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {'Discuss on Twitter'}
            </a>
            {` • `}
            <a
              href="https://github.com/leerob/leerob.io/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'Suggest Change'}
            </a>
          </div> */}
        </Suspense>
      </article>
    </Container>
  );
}
