import Container from 'components/Container';
import { allProjectsQuery } from 'lib/queries';
import { urlForImage } from 'lib/sanity';
import { getClient } from 'lib/sanity-server';
import { Project } from 'lib/types';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
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
        <div className="flex flex-col items-start w-full">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
            Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            These are the projects I have built or worked on.
          </p>
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 self-center w-full mt-4">
            {projects.map((project) => (
              <Link key={project.slug} href={`projects/${project.slug}`}>
                <div className="border border-gray-600 rounded-2xl p-4 dark:border-gray-400 flex flex-col justify center items-center">
                  <h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-1 text-black dark:text-white">
                    {project.title}
                  </h3>
                  <div className="mt-4 relative w-full h-48">
                    <Image
                      src={urlForImage(project.coverImage).url()}
                      alt={project.slug}
                      fill
                      className="object-cover rounded-2xl"
                      priority
                    />
                  </div>
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
