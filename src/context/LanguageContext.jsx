import { createContext, useContext, useEffect, useState } from 'react';
import en_data from '../locales/en.json';
import tr_data from '../locales/tr.json';
import useLocalStorage from '../hooks/useLocalStorage';
import axios from 'axios';
import { toast } from 'react-toastify';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage('language', 'en');
  const [currentContent, setCurrentContent] = useState({});

  const t = (key) => {
    const translate = language === 'en' ? en_data : tr_data;
    return currentContent[key] || translate[key] || key;
  }; // iki ayrnı işlemi yapan fonksiyonu tanımlamış oldum ccyi de seçsem t'yi de seçsem veriyi çekebilcem

  useEffect(() => {
    const translate = language === 'en' ? en_data : tr_data;

    axios
      .post('https://reqres.in/api/translate', translate)
      .then((res) => {
        console.log('deneme', res.data);
        setCurrentContent(res.data); // API'den gelen veriyi state'e kaydediyoruz
        toast.success(t('ceviriBasarili'));
      })
      .catch((err) => {
        console.warn('hata', err);
      });
  }, [language]); // Dil değişiminde sadece bir kez çalışır

  return (
    <LanguageContext.Provider
      value={{ language, t, setLanguage, currentContent }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
