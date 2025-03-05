export const filterValidPosts = (posts) => {
  return posts.filter((post) => post.title?.trim() !== "");
};

export const sortPostsByTag = (posts) => {
  const validPosts = filterValidPosts(posts);

  return validPosts.sort((a, b) => {
    if (!a.tag) return 1;
    if (!b.tag) return -1;
    return a.tag.localeCompare(b.tag);
  });
};
