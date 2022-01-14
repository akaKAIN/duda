/*
Написать функцию, которая принимает два аргумента: текст и максимальную длину строки.
Функция должна вернуть строку, в которой текс прижат к правому краю строки, слина которой равна максимальной длине строки.,
Если текст меньше длины строки, то строка дозаполняется пробелами.
Если текст больше длины строки, то от него отсекается левая часть, не помещающаяся в строку.
 */
/**
 *
 * @param text {string}
 * @param maxLen {number}
 * @return {string}
 * @example
 * const row = textFormatLeft("hi", 5); //
 * console.log(row); // '   hi'
 */
export function textFormatLeft(text, maxLen) {
  // TODO: тут реализация функции
}



/*
Написать функцию, которая принимает два аргумента: текст и любую букву.
Функция должна возвращать количество повтороений переданной буквы в тексте.
Если в функцию переданы пустая строка или буква, то результат равен 0
 */
/**
 *
 * @param text {string}
 * @param target {string}
 * @return {number}
 * @example
 * const count = literalCounter("Hello world", "l");
 * console.log(count); // 3
 */
export function literalCounter(text, target) {
  // TODO: тут реализация функции
}

/*
Написать функцию, которая принимает текст и возвращает букву, которая чаще всего встречается в тексте.
Если какие-то буквы встречаются одинаково часто, то результатом работы функции будет первая максимально встреченная буква.
 */
/**
 *
 * @param text {string}
 * @return {string}
 * @example
 * const letter = popularLetter("Duda, da-da, tuda-suda");
 * console.log(letter); // "d"
 */
export function popularLetter(text) {
  // TODO: тут реализация функции
}
