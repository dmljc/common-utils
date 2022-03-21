// 千分位分隔 (使用数组)

export const thousandFormat = (num: number): string => {
    let result: string = '';
    let numFloor = Math.floor(num);
    let str = numFloor.toString();
    const arr = str.split('').reverse();

    result = arr.reduce((prev, val, index) => {
        if (index % 3 === 0) {
            if (prev) {
                return val + ',' + prev;
            } else {
                return val;
            }
        } else {
            return val + prev;
        }
    }, '');

    return result;
}