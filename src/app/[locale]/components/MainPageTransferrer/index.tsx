import { LocalizedLink } from '@/navigation';
import { RealPathnames } from '@/constants';

interface Props {
  appName: string;
  currentLocale: string;
  mainPageHref: RealPathnames;
};

export default function MainPageTransferrer({ appName, currentLocale, mainPageHref }: Props): React.JSX.Element {
  return (
    <LocalizedLink
      aria-current={'page'}
      href={mainPageHref}
      locale={currentLocale}>
      {appName}
    </LocalizedLink>
  );
}
