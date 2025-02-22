import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MENU_TYPE, UserLogin } from "./UserLogin";
import userEvent from "@testing-library/user-event";
import { loginUser } from "../../services/auth";

vi.mock("../../services/auth", () => ({
  loginUser: vi.fn(),
}));

describe("UserLogin", () => {
  test("Should display 'Hello, {user.name}' after clicking on 'Sign in' button", async () => {
    loginUser.mockResolvedValue({
      data: {
        name: "john_doe",
        email: "john.doe@example.com",
      },
      error: null,
    });
    const signInLabel = "Sign in";
    const helloUserLabel = "Hello, john_doe";
    const user = userEvent.setup();
    render(<UserLogin menuType={MENU_TYPE.DESKTOP} />);

    const signInButton = screen.getByText(signInLabel);
    await user.click(signInButton);
    const helloUser = await screen.findByText(helloUserLabel);

    expect(signInButton).not.toBeInTheDocument();
    expect(helloUser).toBeInTheDocument();
  });
});
