import en from '../translations/en';
import ru from '../translations/ru';

class TranslationApi {
    constructor() {
        this.locales = {
            'en': en,
            'ru': ru
        }
    }

    getLocale(language) {
        return this.locales[language];
    }
}


export const translationApi = new TranslationApi();
