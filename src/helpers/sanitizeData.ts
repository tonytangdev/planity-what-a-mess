import { informationData } from "../interfaces/informationData"
import { jobData } from "../interfaces/jobData.interface"
import { userData } from "../interfaces/userData.interface"
import { response } from "../interfaces/response.interface"
import { sanitizeName } from "./sanitizeName"
import { sanitizeCity } from "./sanitizeCity"

/**
 * Sanitize data according to those rules :
 * - if user name is "#ERROR", you have to skip it and pick the name in another table
 * - name vowel are replaced by number (e by 3, a by 4, i by 1 and o by 0).
 * - cities are not written in a proper way (there are some letters in uppercase in the middle of the word, but they should only be at the beginning)
 * - You have to delete all `null` or `undefined` fields in the sanitize format
 * 
 * @param data data to sanitize
 * @returns sanitized data
 */
export function sanitizeData<T>(data: response<T>): response<T> {

    const sanitizedData = Object.keys(data).reduce((acc, key) => {

        let value: jobData | informationData | userData = data[key]

        const sanitizedValue: any = {
        }

        const sanitizedName = sanitizeName((value as userData).name)
        if (!!sanitizedName) {
            sanitizedValue.name = sanitizedName
        }

        const sanitizedCity = sanitizeCity((value as informationData).city)
        if (!!sanitizedCity) {
            sanitizedValue.city = sanitizedCity
        }

        const age = (value as informationData).age
        if (!!age) {
            sanitizedValue.age = age
        }

        const job = (value as jobData).job
        if (!!job) {
            sanitizedValue.job = job
        }

        if (Object.keys(sanitizedValue).length <= 0) return acc

        return {
            ...acc,
            [key]: sanitizedValue
        }
    }, {})

    return sanitizedData
}
