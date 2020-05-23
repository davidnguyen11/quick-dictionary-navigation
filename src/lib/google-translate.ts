import { NavigateFunc } from './';

export function goolgeTranslateFunc(info: chrome.contextMenus.OnClickData): string {
  return `https://translate.google.com/#view=home&op=translate&sl=auto&tl=vi&text=${info.selectionText}`;
}

export const googleTranslate: NavigateFunc = {
  url: goolgeTranslateFunc,
  name: 'Goolge Translate',
  id: 'google-translate-menu-item',
};
