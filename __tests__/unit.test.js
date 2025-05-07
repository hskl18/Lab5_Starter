// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

// isPhoneNumber
test("valid dash format", () =>
  expect(isPhoneNumber("123-456-7890")).toBe(true));
test("valid paren format", () =>
  expect(isPhoneNumber("(123) 456-7890")).toBe(true));
test("missing digits", () => expect(isPhoneNumber("-4567")).toBe(false));
test("letters not allowed", () =>
  expect(isPhoneNumber("abc-def-ghij")).toBe(false));

// isEmail
test("simple email valid", () => expect(isEmail("a@b.co")).toBe(true));
test("underscore valid", () =>
  expect(isEmail("user_name@site.com")).toBe(true));
test("missing @", () => expect(isEmail("user.com")).toBe(false));
test("bad domain", () => expect(isEmail("user@com")).toBe(false));

// isStrongPassword
test("starts letter, good", () => expect(isStrongPassword("Abc1")).toBe(true));
test("max length valid", () =>
  expect(isStrongPassword("A12345678901234")).toBe(true));
test("too short", () => expect(isStrongPassword("A1_")).toBe(false));
test("invalid char", () => expect(isStrongPassword("A!23")).toBe(false));

// isDate
test("MM/DD/YYYY", () => expect(isDate("1/1/2020")).toBe(true));
test("double‑digit", () => expect(isDate("12/31/1999")).toBe(true));
test("bad year", () => expect(isDate("12/31/99")).toBe(false));
test("letters not allowed", () => expect(isDate("ab/cd/efgh")).toBe(false));

// isHexColor
test("3‑char hex", () => expect(isHexColor("#abc")).toBe(true));
test("6‑char hex", () => expect(isHexColor("#a1B2c3")).toBe(true));
test("too short", () => expect(isHexColor("#ab")).toBe(false));
test("invalid char", () => expect(isHexColor("#ggg")).toBe(false));
