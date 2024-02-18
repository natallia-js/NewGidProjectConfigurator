'use client'

import { useEffect, useState } from 'react';
import LightModeSign from './LightModeSign';
import DarkModeSign from './DarkModeSign';
import { LOCAL_STORAGE_THEME_NAME } from './constants';
import { ThemeName } from './types';
import './styles.css';

export default function DarkLightModeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(ThemeName.LIGHT);

  useEffect(() => {
    if (
        localStorage.theme === ThemeName.DARK ||
        (
          !(LOCAL_STORAGE_THEME_NAME in localStorage) &&
          window.matchMedia(`(prefers-color-scheme: ${ThemeName.DARK})`).matches
        )
    ) {
      setTheme(ThemeName.DARK);
    } else {
      setTheme(ThemeName.LIGHT);
    };
  }, []);

  function setTheme(themeName: ThemeName) {
    document.querySelector("html")?.setAttribute("data-theme", themeName);
    setCurrentTheme(themeName)
    localStorage.theme = themeName;
  };

  function handleToggleTheme() {
    if (currentTheme === ThemeName.DARK) {
      setTheme(ThemeName.LIGHT);
    } else if (currentTheme === ThemeName.LIGHT) {
      setTheme(ThemeName.DARK);
    }
  }

  return (
    <div
      className="relative">
      <div
        className="flex item-center justify-items-center">
        <button
          type="button"
          className="inline-flex items-center"
          onClick={handleToggleTheme}>
          {
            currentTheme === ThemeName.LIGHT
              ? <LightModeSign currentTheme={currentTheme} />
              : currentTheme === ThemeName.DARK
                ? <DarkModeSign currentTheme={currentTheme} />
                : null
          }
        </button>
      </div>
    </div>
  )
}
