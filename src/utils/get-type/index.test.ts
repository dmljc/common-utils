import { getType } from './index';

describe('获取数据类型', () => {
    // 基本类型
    it('string', () => {
        expect(getType('hello')).toBe('string');
    });
    it('number', () => {
        expect(getType(10)).toBe('number');
        expect(getType(NaN)).toBe('number');
        expect(getType(Infinity)).toBe('number');
        expect(getType(-Infinity)).toBe('number');
    });
    it('undefined', () => {
        expect(getType(undefined)).toBe('undefined');
    });
    it('null', () => {
        expect(getType(null)).toBe('null');
    });
    it('boolean', () => {
        expect(getType(true)).toBe('boolean');
    });
    it('bigint', () => {
        expect(getType(BigInt(10))).toBe('bigint');
    });
    it('symbol', () => {
        expect(getType(Symbol())).toBe('symbol');
    });

    // 引用类型
    it('object', () => {
        expect(getType({})).toBe('object');
    });
    it('array', () => {
        expect(getType([])).toBe('array');
    });
    it('function', () => {
        expect(getType(() => {})).toBe('function');
    });
    it('date', () => {
        expect(getType(new Date())).toBe('date');
    });
    it('regexp', () => {
        expect(getType(new RegExp(''))).toBe('regexp');
    });
    // 引用类型 ES6+
    it('map', () => {
        expect(getType(new Map())).toBe('map');
    });
    it('weakmap', () => {
        expect(getType(new WeakMap())).toBe('weakmap');
    });
    it('set', () => {
        expect(getType(new Set())).toBe('set');
    });
    it('weakset', () => {
        expect(getType(new WeakSet())).toBe('weakset');
    });
    it('promise', () => {
        expect(getType(Promise.resolve())).toBe('promise');
    });
    // error
    it('error', () => {
        expect(getType(new Error())).toBe('error');
    });
});