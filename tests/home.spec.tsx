import React from "react";
import { render, screen } from '@testing-library/react';
import RootPage from '@/app/[locale]/page';
import { describe, test as it, expect } from '@jest/globals';

describe('Page', () => {
  it('renders a heading', () => {
    render(<RootPage params={{locale: 'ru'}} />);

    expect(screen.getByTestId("main-div")).toBeInTheDocument();
  })
})
