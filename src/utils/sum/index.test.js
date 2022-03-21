import { sum } from './index'

/**
 * @description: 两数之和
 * @name: zhangfangchao
 */

describe('两数之和', () => {
    it('正常情况', () => {
        const res = sum(1, 10);
        expect(res).toBe(11);
    })
})
