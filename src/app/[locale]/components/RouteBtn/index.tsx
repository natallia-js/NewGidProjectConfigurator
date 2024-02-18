import { LocalizedLink } from '@/navigation';
import { RealPathnames } from '@/constants';

interface Props {
  title: string;
  currentLocale: string;
  href: RealPathnames;
};

export default function RouteBtn({ title, currentLocale, href }: Props): React.JSX.Element {
  return (
    <LocalizedLink
      href={href}
      locale={currentLocale}>
      {title}
    </LocalizedLink>
  )
}
