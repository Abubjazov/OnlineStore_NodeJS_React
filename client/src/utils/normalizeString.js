export const normalizeString = (string, index) => {
    let strArr = string.toLowerCase().split('')
    strArr[index] = strArr[index].toUpperCase()

    return strArr.join('')
}
