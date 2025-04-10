import React from 'react';
import useTheme from './contexts/Theme';

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    darkModeStatus ? darkTheme() : lightTheme();
  };

  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === 'dark'}
      />
      <div className="relative w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 transition-colors duration-300 peer-checked:bg-blue-600">
        <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-6 transition-transform duration-300"></div>
      </div>
      <span className="text-sm font-medium text-gray-900 dark:text-gray-200 transition-colors duration-300">
        Toggle Theme
      </span>
    </label>
  );
}
