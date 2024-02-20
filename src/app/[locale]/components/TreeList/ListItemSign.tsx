'use client'

import { useRef } from 'react';

interface Props {
  expand: boolean;
}

export default function ListItemSign({ expand }: Props): React.JSX.Element {
  const signRef = useRef(null);

  const handleSignClick = () => {
    //if (expand)
    //console.log(signRef)
  };

  return (
    <div
      className="inline-block w-[24px] text-center"
      onClick={handleSignClick}>
      <svg
        ref={signRef}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className="h-4 w-4">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  )
}
