import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';
import TopTracks from 'components/TopTracks';
import avatar from 'public/avatar.jpg';

export default function About() {
  return (
    <Container title="About – Jakša Vlahović">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              GitHub:{' '}
              <a
                href="https://github.com/jaksa-v"
                target="_blank"
                rel="noreferrer"
              >
                @jaksa-v
              </a>
            </li>
            <li>
              LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/jak%C5%A1a-vlahovi%C4%87-a51757154/"
                target="_blank"
                rel="noreferrer"
              >
                Jakša Vlahović
              </a>
            </li>
            <li>
              CV:{' '}
              <a
                href="https://drive.google.com/file/d/1eg6y-fl93VJYJWW3SPH5DsRTgiamUB9Y/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Jakša Vlahović
              </a>
            </li>
            <li>
              Instagram:{' '}
              <a
                href="https://www.instagram.com/jaksaa07"
                target="_blank"
                rel="noreferrer"
              >
                @jaksaa07
              </a>
            </li>
          </ul>
          <h3>Job Title</h3>
          <p>Jakša Vlahović, Fullstack Developer</p>
          <h3>Bio</h3>
          <p>
            {/* Jakša Vlahović is the VP of Developer Experience at{' '}
            <a href="http://vercel.com/">Vercel</a>, where he helps developers
            build a faster web and leads the Next.js community. He leads the
            community for the React framework Next.js and is an open-source
            contributor. An educator, writer, and speaker, Lee has created
            courses on React, Next.js, and web development. */}
            to be written
          </p>

          <h2>Photos</h2>
          <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="Jakša Vlahović photo"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
          </div>
          <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Top Tracks
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Curious what I'm currently jamming to? Here's my top tracks on
            Spotify updated daily.
          </p>
          <TopTracks />
        </div>
      </div>
    </Container>
  );
}
