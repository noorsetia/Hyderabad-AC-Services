import { createContext, useContext, useEffect, useMemo, useState } from "react";

const SUPPORTED_LANGUAGES = ["en", "hi", "te", "ar", "kn", "ml", "ta"];
const SUPPORTED_THEMES = ["light", "dark"];

const AppPreferencesContext = createContext(null);

function getInitialLanguage() {
  const storedLanguage = window.localStorage.getItem("siteLanguage");
  if (storedLanguage && SUPPORTED_LANGUAGES.includes(storedLanguage)) {
    return storedLanguage;
  }
  return "en";
}

function getInitialTheme() {
  const storedTheme = window.localStorage.getItem("siteTheme");
  if (storedTheme && SUPPORTED_THEMES.includes(storedTheme)) {
    return storedTheme;
  }

  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

function AppPreferencesProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage());
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("siteLanguage", language);

    // Dynamic Google Translate Trigger for the entire website
    const switchGoogleTranslate = () => {
      const googleTranslateCombo = document.querySelector(".goog-te-combo");
      
      // Ensure proper reset for English
      if (language === "en") {
          // Clear cookies used by Google Translate to prevent persistent translation
          document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${window.location.hostname}; path=/;`;
          document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.hyderabad-ac-services.com; path=/;"; // fallback
          
          // To perfectly restore original English React components, it requires a quick programmatic refresh
          // only if the page has already been modified by Google Translate.
          const htmlEl = document.querySelector('html');
          if (htmlEl && (htmlEl.classList.contains('translated-ltr') || htmlEl.classList.contains('translated-rtl'))) {
            window.location.reload();
          }
      } else if (googleTranslateCombo) {
        googleTranslateCombo.value = language;
        googleTranslateCombo.dispatchEvent(new Event("change"));
      }
    };

    // Run this immediately and retry briefly if the script is still loading
    switchGoogleTranslate();
    setTimeout(switchGoogleTranslate, 1500);

  }, [language]);

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem("siteTheme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      theme,
      setTheme,
      languageOptions: [
        { value: "en", label: "English" },
        { value: "hi", label: "Hindi" },
        { value: "te", label: "Telugu" },
        { value: "ar", label: "Arabic" },
        { value: "kn", label: "Kannada" },
        { value: "ml", label: "Malayalam" },
        { value: "ta", label: "Tamil" },
      ],
    }),
    [language, theme]
  );

  return <AppPreferencesContext.Provider value={value}>{children}</AppPreferencesContext.Provider>;
}

function useAppPreferences() {
  const contextValue = useContext(AppPreferencesContext);

  if (!contextValue) {
    throw new Error("useAppPreferences must be used inside AppPreferencesProvider");
  }

  return contextValue;
}

export { AppPreferencesProvider, useAppPreferences };
