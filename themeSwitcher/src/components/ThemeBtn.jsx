import React from 'react';
import useTheme from '../contexts/theme';

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    darkModeStatus ? darkTheme() : lightTheme();
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
      <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {themeMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
      </span>
    </label>
  );
}
