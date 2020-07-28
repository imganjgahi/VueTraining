export default class Error {
    error: any

    constructor() {
        this.clear()
    }

    set(error: {[key: string]: string}) {
        this.error = error
    }
    append(error: {[key: string]: string}) {
        this.error = error
    }

    all() {
        this.error
    }

    clear() {
        this.error = {}
    }

    has(field: string, rule: string | null = null){
        const hasProperty = Object.prototype.hasOwnProperty.call(this.error, field);

        if(rule === null){
            return hasProperty
        }

        return hasProperty && this.error[field] === rule
    }
}