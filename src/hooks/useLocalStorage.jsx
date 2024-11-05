import { useState } from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    // ilk açılışta localStorage'dan okuyoruz
    const localVal = localStorage.getItem(key);

    // Eğer localVal 'undefined' veya 'null' ise defaultValue döndür
    if (localVal === null || localVal === 'undefined') {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }

    try {
      return JSON.parse(localVal); // Burada parse ediyoruz
    } catch (error) {
      // Eğer JSON parse hatası olursa, defaultValue'yu kullan
      console.error(`Error parsing localStorage key "${key}":`, error);
      return defaultValue;
    }
  });

  // value değiştiğinde localStorage'a yazıyoruz
  const setLocalStorage = (newValue) => {
    const valueToStore =
      newValue instanceof Function ? newValue(value) : newValue;
    localStorage.setItem(key, JSON.stringify(valueToStore));
    setValue(valueToStore);
  };

  return [value, setLocalStorage];
}
