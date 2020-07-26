import Rule from './Rule'

export default class Validator {
    fields: string[];
    validationBag: {[key: string]: string};
    errors: {[key: string]: string};
    
    constructor(wrapper: any, resolve: () => void, reject: any){
        this.fields = wrapper.fields;
        this.validationBag = wrapper.validationBag;
        this.errors = {};
        Promise.all(this.promises()).then(resolve).catch(error => {
            wrapper.error.set(this.errors);
            reject({message: error})
        })
    }

    getValue(fieldName: string) {

        return fieldName.split(".").reduce((previousValue: any, current)=> {
            return previousValue[current]
        }, this.fields)
    }

    
    validate(field: string) {
        return new Promise((resolve, reject)=> {
            const 
                rules: {[key: string]: string } | string = this.validationBag[field],
                rulesCount = rules.length,
                value = this.getValue(field);
                for (const index in (rules as unknown as object)) {
                    if (!Object.prototype.hasOwnProperty.call(rules, field)) {
                        const [rule, param] = rules[+index].split(":");
                        try {
                            if(!(Rule as any)[rule](value, param)){
                                this.errors[field] = rule;
                                reject("your input was invalid")
                            }
                        } catch (error) {
                            reject(`invalid form validation by rule name: '${rule}'`)
                        }
                    }

                    if(parseInt(index) + 1 === rulesCount){
                        resolve()
                    }
                }
        })
    }

    promises() {
        const promiseList = []

        for(const field in this.validationBag){
            promiseList.push(this.validate(field))
        }

        return promiseList
    }
}