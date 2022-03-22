/* 获取数据类型 */
export const getType = (x: any): string => {
    const originType = Object.prototype.toString.call(x);
    const spaceIndex = originType.indexOf(' ');
    const type = originType.slice(spaceIndex + 1, -1);
    return type.toLowerCase();
}