import {config} from '@vue/test-utils'
import en from './src/i18n/locale.en.json'
import store from './src/store'

config.mocks['$t'] = msg => en[msg]
config.mocks['$store'] = store
