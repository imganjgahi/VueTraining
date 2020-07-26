export default class Helper {
    
// eslint-disable-next-line
    static isEmpty(value: any): boolean {
        if(Helper.isObject(value)){
            return Object.keys(value).length === 0
        }

        return (
            value === undefined ||
            value === null ||
            value.length === 0
        )
    }
// eslint-disable-next-line
    static isObject(value: any): boolean {

        return value instanceof Object && !Array.isArray(value)
    }
}