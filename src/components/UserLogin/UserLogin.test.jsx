import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MENU_TYPE, UserLogin } from "./UserLogin";
import userEvent from "@testing-library/user-event";

describe("UserLogin", () => {
  test("Should display 'Hello, username' after clicking on 'Sign in' button", async () => {
    const signInLabel = "Sign in";
    const helloUserLabel = "Hello, username";
    const user = userEvent.setup();
    render(<UserLogin menuType={MENU_TYPE.DESKTOP} />);

    const signInButton = screen.getByText(signInLabel);
    await user.click(signInButton);
    const helloUser = await screen.findByText(helloUserLabel);

    expect(signInButton).not.toBeInTheDocument();
    expect(helloUser).toBeInTheDocument();
  });
});
