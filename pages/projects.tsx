import Container from 'components/Container';

export default function Projects() {
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
          </div>
        </div>
      </div>
    </Container>
  );
}
