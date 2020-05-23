import { cambridge } from './cambridge';
import { googleTranslate } from './google-translate';

export const modules: DictionaryNavigations = [cambridge, googleTranslate];

export type DictionaryNavigations = NavigateFunc[];

export interface NavigateFunc {
  url: (info: chrome.contextMenus.OnClickData) => string;
  id: string;
  name: string;
  title?: string;
}
