import { cambridgeFunc } from '../lib/cambridge';

describe('testing parse', () => {
  it('should return undefined', () => {
    const actual = cambridgeFunc({ selectionText: 'hello' } as never);
    expect(actual).toEqual('https://dictionary.cambridge.org/dictionary/english/hello');
  });
});
