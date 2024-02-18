import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { supportedLocalesArray } from '@/constants';

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  if (!supportedLocalesArray.includes(locale))
    notFound();
  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
