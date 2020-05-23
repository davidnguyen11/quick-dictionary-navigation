import { goolgeTranslateFunc } from '../lib/google-translate';

describe('testing parse', () => {
  it('should return undefined', () => {
    const actual = goolgeTranslateFunc({ selectionText: 'hello' } as never);
    expect(actual).toEqual('https://translate.google.com/#view=home&op=translate&sl=auto&tl=vi&text=hello');
  });
});
