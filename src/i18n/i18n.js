import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ru from './locale.ru.json'
import en from './locale.en.json'


const locales = {
  en,
  ru,
}

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'ru',
  messages: locales,
})