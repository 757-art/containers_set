import Validator from '../src/index';


test('Тестируем регулярные выражения', () => {
  let user = new Validator()
  expect(null).toEqual(user.validateUsername("0rag09_rn"));
});

test('Тестируем регулярные выражения', () => {
  let user = new Validator()
  expect(null).toEqual(user.validateUsername("Arag09_rn3"));
});

test('Тестируем регулярные выражения', () => {
  let user = new Validator()
  expect(null).toEqual(user.validateUsername("_Arag09_rn"));
});

test('Тестируем регулярные выражения', () => {
  let user = new Validator()
  expect(null).toEqual(user.validateUsername("Arag09_rn_"));
});

test('Тестируем регулярные выражения', () => {
  let user = new Validator()
  expect(["Arag09_rn"]).toEqual(user.validateUsername("Arag09_rn"));
});

