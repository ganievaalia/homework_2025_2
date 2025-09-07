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

const factorial = n => {
    if (n < 0) throw new Error('Факториал не определен для отрицательных чисел');
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};