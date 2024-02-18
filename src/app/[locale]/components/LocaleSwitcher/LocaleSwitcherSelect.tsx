'use client';

import { ChangeEvent, ReactNode, useTransition } from 'react';
import { localizedUsePathname, localizedUseRouter } from '@/navigation';
import './styles.css';

interface Props {
  children: ReactNode;
  defaultValue: string;
};

// A Client Component that registers an event listener for the `change` event of the select, uses `useRouter`
// to change the locale and uses `useTransition` to display a loading state during the transition
export default function LocaleSwitcherSelect({ children, defaultValue }: Props): React.JSX.Element {
  const router = localizedUseRouter();
  const pathname = localizedUsePathname();
  const [isPending, startTransition] = useTransition();

  function onLocaleChange(event: ChangeEvent<HTMLSelectElement>) {
    const newLocale = event.target.value;
    // Switching a locale saving another path information
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <select
      className="locale-select"
      defaultValue={defaultValue}
      disabled={isPending}
      onChange={onLocaleChange}>
      {children}
    </select>
  );
}
