import { useEffect, useState } from 'react';
import { useAppPreferences } from '../context/AppPreferencesContext';
import { translateText } from '../utils/translator';

export function useTranslation(textKey, dictionary = null) {
  const { language } = useAppPreferences();
  const [translatedContent, setTranslatedContent] = useState(textKey);

  useEffect(() => {
    async function resolveTranslation() {
      // 1. If we have a manual translation dictionary, check it first.
      if (dictionary && dictionary[language] && dictionary[language][textKey]) {
        setTranslatedContent(dictionary[language][textKey]);
        return;
      }

      // 2. If trying to show English and we assume source code is English, show literal key
      if (language === 'en' && (!dictionary || !dictionary['en'])) {
        setTranslatedContent(textKey);
        return;
      }

      // 3. Otherwise rely on automatic fetching API logic (Fallback)
      // We pass 'en' as default source because we will feed English text keys
      // Ensure the 'textKey' is an actual English string, not a generic "navbar.home" token, 
      // if using this API fallback effectively.
      const englishSource = (dictionary && dictionary['en'] && dictionary['en'][textKey]) || textKey;
      
      const result = await translateText(englishSource, language);
      setTranslatedContent(result);
    }
    
    resolveTranslation();
  }, [textKey, language, dictionary]);

  return translatedContent;
}

// A wrapper component to easily wrap any text
export function LocaleText({ text, dictionary }) {
  const t = useTranslation(text, dictionary);
  return <>{t}</>;
}
