import { beforeEach, describe, expect, test } from "vitest";
import { filterValidPosts, sortPostsByTag } from "../posts";

let posts = [];
beforeEach(() => {
  posts = [
    {
      id: "1",
      title: "Post 1",
      tag: "new",
    },
    {
      id: "2",
      title: "Post 2",
      tag: "",
    },
    {
      id: "3",
      title: "",
      tag: "",
    },
    {
      id: "4",
      title: "Post 4",
      tag: "add",
    },
  ];
});

describe("filterValidPosts", () => {
  test("should filter posts with title", () => {
    const filteredPosts = filterValidPosts(posts);
    expect(filteredPosts.length).toBe(3);
    posts.splice(1, 1);
  });
});

describe("sortPostsByTag", () => {
  test("should sort valid posts by tag", () => {
    const sortedPosts = sortPostsByTag(posts);
    expect(sortedPosts.length).toBe(3);
    expect(sortedPosts[0].id).toBe("4");
    expect(sortedPosts).toEqual([
      { id: "4", title: "Post 4", tag: "add" },
      { id: "1", title: "Post 1", tag: "new" },
      { id: "2", title: "Post 2", tag: "" },
    ]);
  });
});

const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
describe("isValidEmail", () => {
  test.each([
    ["invalid-email", false],
    ["john.doe@domain.org", true],
    ["missing@tld", false],
    ["@no-local-part.com", false],
  ])(`for %s should return %s`, (email, expected) => {
    expect(isValidEmail(email)).toBe(expected);
  });
});
