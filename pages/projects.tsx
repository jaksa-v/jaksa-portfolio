import Container from 'components/Container';
import { allProjectsQuery } from 'lib/queries';
import { getClient } from 'lib/sanity-server';
import { Project } from 'lib/types';
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

export default function Projects({
  projects
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Projects – Jakša Vlahović"
      // description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
      description="My projects"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 w-full">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Projects
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              These are the projects I have built or worked on.
            </p>
            {projects.map((project) => (
              <Link key={project.slug} href={`projects/${project.slug}`}>
                <div className="mb-16">
                  <h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-1 text-black dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {/* {project.description} */}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {/* {project.technologies} */}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {/* {project.link} */}
                  </p>
                  {/* SHOULD INSERT IMAGE */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps({ preview = false }) {
  const projects: Project[] = await getClient(preview).fetch(allProjectsQuery);

  return { props: { projects } };
}
