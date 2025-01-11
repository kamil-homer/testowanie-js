import { expect, test } from "vitest";
import { getUserById } from "./user";

test("should throw an error when ID is not provided", () => {
  expect(() => getUserById()).toThrow("ID is required");
});

test("should return user details", () => {
  expect(getUserById("123")).toEqual({ name: "John" });
});
