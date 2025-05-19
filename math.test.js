// math.test.js
const { add, divide } = require('./math');

describe('Математические функции', () => {
  test('сложение двух чисел', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('деление двух чисел', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('деление на ноль вызывает ошибку', () => {
    expect(() => divide(10, 0)).toThrow('Деление на ноль');
  });
});