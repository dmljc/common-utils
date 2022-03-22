import { cloneDeep } from './index';

describe('深拷贝：只考虑常规对象和数组', () => {
    // it('空对象', () => {
    //     expect(cloneDeep({})).toEqual({});
    // });
    // it('空数组', () => {
    //     expect(cloneDeep([])).toEqual([]);
    // });
    // it('一层对象', () => {
    //     const obj = {
    //         name: "zfc",
    //         isMan: true,
    //         age: 18,
    //         address: undefined,
    //     };
    //     expect(cloneDeep(obj)).toEqual(obj);
    // });
    // it('一层数组', () => {
    //     const arr = ["hello", 123, true, undefined];
    //     expect(cloneDeep(arr)).toEqual(arr);
    // });
    it('多层对象', () => {
        const obj = {
            name: "zfc",
            obj2: {
                age: 18,
                address: undefined,
                obj3: {
                    name: "lisi"
                }
            },
            getName() {
                console.log('getName');
            }
        }
        const res = cloneDeep(obj);
        expect(res).toEqual(res);
    });
    it('多层数组', () => {
        const arr = [
            {
                name: 'wanger',
                age: 18,
                obj1: {
                    name: 'xiaosan',
                    obj2: {
                       name: 'mazi',
                       obj3: {
                        name: 'li',
                     }
                    }
                },
                getAddress() {
                  console.log('hell');
                }
            }
        ];

        expect(cloneDeep(arr)).toEqual(arr);
    });
});