import { NavigateFunc } from './';

export function cambridgeFunc(info: chrome.contextMenus.OnClickData): string {
  return `https://dictionary.cambridge.org/dictionary/english/${info.selectionText}`;
}

export const cambridge: NavigateFunc = {
  url: cambridgeFunc,
  name: 'Cambridge',
  id: 'cambridge-dictionary-menu-item',
};
