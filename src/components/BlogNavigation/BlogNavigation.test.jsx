import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BlogNavigation } from "./BlogNavigation";
import userEvent from "@testing-library/user-event";

describe("BlogNavigation", () => {
  test("Features present in the navigation", () => {
    const navElement = "Features";

    render(<BlogNavigation />);

    expect(screen.getByText(navElement)).toBeInTheDocument();
  });

  test("should display all 9 buttons", () => {
    const expectedElements = 9;

    render(<BlogNavigation />);

    expect(screen.getAllByRole("button").length).toBe(expectedElements);
  });

  test("Should display 'Hello, username' after clicking on 'Sign in' button", async () => {
    const signInLabel = "Sign in";
    const helloUserLabel = "Hello, username";
    const user = userEvent.setup();
    render(<BlogNavigation />);

    const signInButton = screen.getByText(signInLabel);
    await user.click(signInButton);
    const helloUser = await screen.findByText(helloUserLabel);

    expect(signInButton).not.toBeInTheDocument();
    expect(helloUser).toBeInTheDocument();
  });
});
