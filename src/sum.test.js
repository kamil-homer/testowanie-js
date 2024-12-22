import { expect, test } from "vitest";
import { sum } from "./sum";

test("should return 5 for 2 and 3", () => {
  // Arrange
  const num1 = 2;
  const num2 = 3;

  // Act
  const result = sum(num1, num2);

  // Assert
  expect(result).toBe(5);
});
