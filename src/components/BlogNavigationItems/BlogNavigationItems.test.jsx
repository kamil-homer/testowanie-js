import { describe, expect, test } from "vitest";
import {
  BlogNavigationItems,
  MENU_ITEMS,
  MENU_TYPE,
} from "./BlogNavigationItems";
import { render, screen } from "@testing-library/react";

describe("BlogNavigationItems", () => {
  test("should render desktop navigation items as buttons", () => {
    const buttonLabel = MENU_ITEMS[0].label;

    render(<BlogNavigationItems menuType={MENU_TYPE.DESKTOP} />);

    const menuItem = screen.getByRole("button", { name: buttonLabel });

    expect(menuItem).toBeInTheDocument();
  });

  test("should render mobile navigation items as menuitems", () => {
    const buttonLabel = MENU_ITEMS[0].label;

    render(<BlogNavigationItems menuType={MENU_TYPE.MOBILE} />);

    const menuItem = screen.getByRole("menuitem", { name: buttonLabel });

    expect(menuItem).toBeInTheDocument();
  });
});

describe("BlogNavigationItems snapshots", () => {
  test("should render correct strucutre for desktop", () => {
    const { asFragment } = render(
      <BlogNavigationItems menuType={MENU_TYPE.DESKTOP} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
