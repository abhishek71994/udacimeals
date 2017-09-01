/**
 * Created by harekrishna on 30/8/17.
 */
export function capitalize (str = '') {
    return typeof str !== 'string'
        ? ''
        : str[0].toUpperCase() + str.slice(1)
}