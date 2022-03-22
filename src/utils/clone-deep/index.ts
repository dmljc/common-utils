/**
 * 深拷贝
 * @description: 
 * @author: zhangfangchao1
 */

export const cloneDeep = (obj: any): any => {
    if (typeof obj !== 'object' || typeof obj === null) {
        return obj;
    }

    let result:any = obj instanceof Array ? [] : {};
    
    for(const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = cloneDeep(obj[key])
        }
    }

    return result
}