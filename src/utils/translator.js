export async function translateText(text, targetLang, sourceLang = 'en') {
  if (!text || text.trim() === '') return text;

  // We check memory/cache first
  const cacheKey = `translation_${sourceLang}_${targetLang}_${text}`;
  const cachedVal = localStorage.getItem(cacheKey);
  if (cachedVal) {
    return cachedVal;
  }

  try {
    // Using a free API (MyMemory Translation API) for demo purposes
    // Be aware that this has a daily limit of 500 words/day without email, 50,000 words/day with email.
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.responseData && data.responseData.translatedText) {
      const translation = data.responseData.translatedText;
      // Save to cache to prevent re-fetching the same string
      localStorage.setItem(cacheKey, translation);
      return translation;
    }
    return text; // Fallback to original text if API fails
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
}
