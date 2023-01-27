import { mdxToHtml } from 'lib/mdx';
import { projectQuery, projectSlugsQuery } from 'lib/queries';
import { getClient, sanityClient } from 'lib/sanity-server';
import { Project } from 'lib/types';
import { MDXRemote } from 'next-mdx-remote';
import components from 'components/MDXComponents';
import ProjectLayout from 'layouts/project';
import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from 'lib/sanity';

export default function ProjectPage({ project }: { project: Project }) {
  console.log('project image: ', project.coverImage);

  return (
    <ProjectLayout project={project}>
      <MDXRemote
        {...project.description}
        components={
          {
            ...components
          } as any
        }
      />
      <Link href={project.url} target="_blank">
        Check it out!
      </Link>
      {/* SHOULD ADD IMAGE HERE */}
    </ProjectLayout>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(projectSlugsQuery);
  console.log('Paths: ', paths);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params, preview = false }) {
  const { project } = await getClient(preview).fetch(projectQuery, {
    slug: params.slug
  });

  if (!project) {
    return { notFound: true };
  }

  const { html } = await mdxToHtml(project.description);

  return {
    props: {
      project: {
        ...project,
        description: html
      }
    }
  };
}
