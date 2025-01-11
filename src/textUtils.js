export const capitalize = (str) => {
  if (!str) {
    return "";
  }
  return str[0].toUpperCase() + str.slice(1);
};

export const reverseString = (str) => {
  if (!str) {
    return "";
  }

  return str.split("").reverse().join("");
};

export const countWords = (str) => {
  if (!str) {
    return 0;
  }
  return str.trim() === "" ? 0 : str.trim().split(/\s+/).length;
};
