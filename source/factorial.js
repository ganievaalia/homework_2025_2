'use strict';

/**
 * Функция, вычисляющая факториал числа
 * @param {Number} n - число для вычисления факториала
 * 
 * @example
 * // returns 1
 * factorial(0);
 * 
 * @example
 * // returns 120
 * factorial(5);
 * 
 * @throws {Error} Если число отрицательное
 * @returns {Number} Факториал числа
 */
const factorialCache = new Map();

const factorial = n => {
    if (n < 0) throw new RangeError('Факториал не определен для отрицательных чисел');
    if (n === 0 || n === 1) return 1;
    
    if (factorialCache.has(n)) {
        return factorialCache.get(n);
    }
    
    const result = n * factorial(n - 1);
    factorialCache.set(n, result);
    
    return result;
};
