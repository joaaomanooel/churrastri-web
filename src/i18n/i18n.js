import I18n from 'i18n-js';
import ptBR from './locales/pt-BR';

I18n.locale = 'pt-BR';
I18n.fallbacks = true;
I18n.defaultLocale = 'pt-BR';
I18n.translations = { 'pt-BR': ptBR };

export default I18n;
