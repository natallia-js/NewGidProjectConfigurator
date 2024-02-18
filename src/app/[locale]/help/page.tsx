import { lazy, Suspense } from 'react';
import { useLocale } from 'next-intl';
import { SupportedLocales } from '@/constants';
import Spinner from '@/localeApp/components/Spinner/index';
const HelpRuComponent = lazy(() => import('./HelpRu'));
const HelpEnComponent = lazy(() => import('./HelpEn'));

export default function CommonHelpPage(): React.JSX.Element {
  const locale = useLocale();

  return (
    <Suspense fallback={<Spinner loadingTitle=''/>}>
      {locale === SupportedLocales.ru && <HelpRuComponent/>}
      {locale === SupportedLocales.en && <HelpEnComponent/>}
    </Suspense>
  );
}
