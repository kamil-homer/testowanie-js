import { beforeEach, describe, expect, test } from "vitest";
import { filterValidPosts, sortPostsByTag } from "../posts";

describe("posts", () => {
  let posts;
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
    test("should filter valid posts, 3 of 4", () => {
      const filteredPosts = filterValidPosts(posts);
      expect(filteredPosts.length).toBe(3);
    });
  });
  describe("sortPostsByTag", () => {
    test("should sort valid posts by tag", () => {
      const sortedPosts = sortPostsByTag(posts);
      expect(sortedPosts.length).toBe(3);
      expect(sortedPosts[0].title).toBe("Post 4");
    });
  });
});
