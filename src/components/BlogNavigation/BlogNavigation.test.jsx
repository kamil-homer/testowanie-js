import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BlogNavigation } from "./BlogNavigation";

describe("BlogNavigation", () => {
  vi.mock("../BlogNavigationItems/BlogNavigationItems", () => {
    return {
      BlogNavigationItems: () => <div>BlogNavigationItems</div>,
      MENU_TYPE: {},
    };
  });

  test("Should match the snapshot", () => {
    const { asFragment } = render(<BlogNavigation />);

    expect(asFragment()).toMatchSnapshot();
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
