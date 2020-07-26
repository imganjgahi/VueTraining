import Helper from '@/utils/Helper';

export default class Rule {
    
    static required(value: string) {
        return !Helper.isEmpty(value)
    }

    static validateIfNotEmpty(value: string, callback: () => void) {
        if(Helper.isEmpty(value)){
            return true
        }

        return callback()
    }

    static min(value: string, params: string | number) {
        if(typeof value === 'string'){
           return Rule.validateIfNotEmpty(value, () => {
                return value.length >= params
            })
        }

        return Object.keys(value).length >= params
    }

    static max(value: string, params: string | number) {
        if(typeof value === 'string'){
           return Rule.validateIfNotEmpty(value, () => {
                return value.length <= params
            })
        }

        return Object.keys(value).length <= params
    }

    static email(value: string) {
        return Rule.validateIfNotEmpty(value, () => {
            // eslint-disable-next-line
            const emailRegexValidation = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            return emailRegexValidation.test(value)
        })
    }  
    
    static accepted(value: string | number | boolean) {

        return ['yes', 1, '1', true,  'on'].includes(value)
    }

    static in(value: string, params: string) {
        return params.split(",").map(item => item.trim()).includes(value.toString())
    }
}