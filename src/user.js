export const getUserById = (id) => {
  if (!id) {
    throw new Error("ID is required");
  }

  return { name: "John" };
};
