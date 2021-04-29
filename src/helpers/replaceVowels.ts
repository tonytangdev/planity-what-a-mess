/**
 * Replace numbers with their corresponding vowels like so :
 * - 3 => e
 * - 4 => a
 * - 1 => i
 * - 0 => o
 * 
 * @param value value
 * @returns value with numbers replaced by corresponding vowels
 */
export const replaceVowels = (value: string): string => {
    let newValue = value
        .replace(/3/g, 'e')
        .replace(/4/g, 'a')
        .replace(/1/g, 'i')
        .replace(/0/g, 'o')
    return newValue
}