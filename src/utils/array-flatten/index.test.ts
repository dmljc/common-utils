/**
 * @description: 数组深度 扁平化
 * @author: zhangfangchao
 */
import { flattenDeep, flattenDeep2 } from './index';

describe('正常数据深度扁平化场景', () => {
    it('空数组', () => {
        const res = flattenDeep2([]);
        expect(res).toEqual([]);
    });
    it('1维数组', () => {
        const arr = [1, 'a', true, undefined, null];
        const res = flattenDeep2(arr);
        expect(res).toEqual([1, 'a', true, undefined, null]);
    });
    it('2维数组', () => {
        const arr = [1, 'a', true, undefined, null, [1, 'a', true, undefined, null]];
        const res = flattenDeep2(arr);
        expect(res).toEqual([1, 'a', true, undefined, null,1, 'a', true, undefined, null,]);
    });
    it('3维数组', () => {
        const arr = [1, 'a', true, ['hello', 33, [undefined, false, '0']]];
        const res = flattenDeep2(arr);
        expect(res).toEqual([1, 'a', true, 'hello', 33, undefined, false, '0']);
    });
});