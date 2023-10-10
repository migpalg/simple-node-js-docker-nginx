"use strict";

/**
 * Deep freeze an object
 * @template T type of the object to be deep freezed
 * @param {T} data object to be deep freezed
 * @returns {Readonly<T>} deep freezed object
 */
function deepFreeze(data) {
  return JSON.parse(JSON.stringify(data));
}

module.exports = { deepFreeze };
