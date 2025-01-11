import { describe, expect, test } from "vitest";
import { sum, sumArrayElements } from "./sum";

describe("sum", () => {
  test("should return 5 for 2 and 3", () => {
    // Arrange
    const num1 = 2;
    const num2 = 3;

    // Act
    const result = sum(num1, num2);

    // Assert
    expect(result).toBe(5);
  });

  test("should return 5 for 2 and 3 as text", () => {
    const num1 = "2";
    const num2 = "3";

    const result = sum(num1, num2);

    expect(result).toBe(5);
  });

  test("should return NaN for not numeric values", () => {
    const num1 = "a";
    const num2 = "b";

    const result = sum(num1, num2);

    expect(result).toBeNaN();
  });

  test("should return 0 for empty strings", () => {
    const num1 = "";
    const num2 = "";

    const result = sum(num1, num2);

    expect(result).toBe(0);
  });
});

describe("sumArrayElements", () => {
  test("should return 10 for [1, 2, 3, 4]", () => {
    const numbers = [1, 2, 3, 4];

    const result = sumArrayElements(numbers);

    expect(result).toBe(10);
  });

  test("should return 10 for ['1', '2', '3', '4']", () => {
    const numbers = ["1", "2", "3", "4"];

    const result = sumArrayElements(numbers);

    expect(result).toBe(10);
  });

  test("should return NaN for non numeric values in array", () => {
    const numbers = ["a", "b", "c"];

    const result = sumArrayElements(numbers);

    expect(result).toBeNaN();
  });

  test("should return 0 when array is empty", () => {
    const numbers = [];

    const result = sumArrayElements(numbers);

    expect(result).toBe(0);
  });

  test("should throw an error when input is not an array", () => {
    const resultFn = () => {
      sumArrayElements(null);
    };

    expect(resultFn).toThrow();
  });
});
