/**
 * @description: 数组深度扁平化 push
 * @author: zhangfangchao
 * @param {any} arr
 */
export const flattenDeep = (arr: any[]): any[] => {
    let result: any[] = [];

    arr.forEach((item) => {
        if (Array.isArray(item)) {
            const flatItem = flattenDeep(item);
            flatItem.forEach((el) => result.push(el));
        } else {
            result.push(item);
        }
    });

    return result;
}

/**
 * @description: 数组扁平化：concat
 * @author: zhangfangchao
 */

export const flattenDeep2 = (arr: any[]): any[] => {
    let result: any[] = [];

    arr.forEach((item) => {
        if (Array.isArray(item)) {
            const flatItem = flattenDeep2(item);
            result = result.concat(flatItem);
        } else {
            result = result.concat(item);
        }
    });

    return result;
}



