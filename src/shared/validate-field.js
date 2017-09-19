import isEmpty from 'lodash/isEmpty'

export function validateCustomer(data) {
    let errors = {}
    if (data.gender.length>1) {
        errors.gender = true
    }
    return {errors, isValid: isEmpty(errors)}

}
export function validateRegistration(data) {
    let errors = {}
    if (data.password.length<5) {
        errors.password = true
    }
    return {errors, isValid: isEmpty(errors)}

}
