export const loginUser = async () => {
  try {
    const user = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: "john_doe",
          email: "john.doe@example.com",
        });
      }, 5000);
    });

    return {
      data: user,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};
