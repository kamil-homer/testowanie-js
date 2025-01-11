import { expect, test } from "vitest";
import { getUserById } from "./user";

test("should throw an error when ID is not provided", () => {
  const resultFn = () => getUserById();

  expect(resultFn).toThrow("ID is required");
});

test("should return user details", () => {
  const user = getUserById("123");

  expect(user).toEqual({ name: "John" });
});
