import Link from 'next/link';

import NowPlaying from 'components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <NowPlaying />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            About
          </Link>
          {/* <Link
            href="/newsletter"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Newsletter
          </Link> */}
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/jaksa-v">GitHub</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/jak%C5%A1a-vlahovi%C4%87-a51757154/">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://www.instagram.com/jaksaa07">
            Instagram
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/blog"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Blog
          </Link>
          <Link
            href="/guestbook"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Guestbook
          </Link>
        </div>
      </div>
    </footer>
  );
}
