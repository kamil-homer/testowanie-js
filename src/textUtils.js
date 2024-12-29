export const capitalize = (str) => {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
};

export const reverseString = (str) => {
  return str.split("").reverse().join("");
};

export const countWords = (str) => {
  return str.trim() === "" ? 0 : str.trim().split(/\s+/).length;
};
