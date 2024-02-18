'use client'

import { LocalizedLink } from '@/navigation';
import { RealPathnames } from '@/constants';

export default function NotFoundPage() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <LocalizedLink href={RealPathnames.Main}>Go Home</LocalizedLink>
    </div>
  )
}
