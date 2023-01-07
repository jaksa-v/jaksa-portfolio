import 'styles/global.css';

import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { Montserrat } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';

const montserratVariable = Montserrat({ subsets: ['latin-ext', 'latin'] });

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <main className={montserratVariable.className}>
          <Component {...pageProps} />
          <Analytics />
        </main>
      </ThemeProvider>
    </SessionProvider>
  );
}
