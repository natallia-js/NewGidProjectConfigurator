import type { Metadata } from 'next';
import MainHeader from '@/localeApp/components/MainHeader/index';
import { supportedLocalesArray } from '@/constants';
import '@/localeApp/styles/globals.css';

export const metadata: Metadata = {
  title: 'New GID Configurator',
  description: 'Generated by Natallia Fedartsova',
  icons: {
    icon: '/images/favicon.ico',
  },
};

// Since we use a dynamic route segment for the [locale] param, we need to provide all
// possible values via generateStaticParams to Next.js, so the routes can be rendered at build time
export function generateStaticParams() {
  return supportedLocalesArray.map((locale) => ({ locale }));
}

interface Props {
  children: React.ReactNode,
  params: { locale: string }
};

export default function RootLayout({ children, params: { locale } }: Props) {
  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col flex-no-wrap text-primary">
        <div className="flex-none">
          <MainHeader />
        </div>
        <main className="grow flex">
          {children}
        </main>
      </body>
    </html>
  )
};