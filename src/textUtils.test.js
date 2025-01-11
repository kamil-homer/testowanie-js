import { describe, expect, test } from "vitest";
import { capitalize, countWords, reverseString } from "./textUtils";

describe("capitalize", () => {
  test("should capitalized first letter", () => {
    const result = capitalize("test");

    expect(result).toBe("Test");
  });

  test("should return empty string, when empty string is passed", () => {
    const result = capitalize("");

    expect(result).toBe("");
  });
});

describe("reverseString", () => {
  test("should reverse string", () => {
    const result = reverseString("vitest");

    expect(result).toBe("tsetiv");
  });

  test("should return empty string, when empty string is passed", () => {
    const result = reverseString();

    expect(result).toBe("");
  });
});

describe("countWords", () => {
  test("should return 1 for single word", () => {
    const result = countWords("hello");

    expect(result).toBe(1);
  });

  test("should return 0 for empty string", () => {
    const result = countWords("");

    expect(result).toBe(0);
  });

  test(`should return 3 for "hello from vitest"`, () => {
    const result = countWords("hello from vitest");

    expect(result).toBe(3);
  });
});
