import { thousandFormat  } from './index';

describe('数字千分位分隔', () => {
    it('大于1000', () => {
        const res = thousandFormat(123456789);
        expect(res).toBe('123,456,789');
    });

    it('小于1000',() => {
        const res = thousandFormat(123);
        expect(res).toBe('123');
    });
});