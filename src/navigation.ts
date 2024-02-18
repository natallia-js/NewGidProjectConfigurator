import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { supportedLocalesArray, pathnames, localePrefix } from './constants';

export const {
  Link: LocalizedLink,
  redirect: localizedRedirect,
  usePathname: localizedUsePathname,
  useRouter: localizedUseRouter,
  getPathname: localizedGetPathname } =
  createLocalizedPathnamesNavigation({ locales: supportedLocalesArray, localePrefix, pathnames });
