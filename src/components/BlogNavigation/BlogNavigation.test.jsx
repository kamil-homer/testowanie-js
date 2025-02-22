import { describe, expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import { BlogNavigation } from "./BlogNavigation";

vi.mock("../BlogNavigationItems/BlogNavigationItems");
vi.mock("../UserLogin/UserLogin");

describe("BlogNavigation", () => {
  test("Should match the snapshot", () => {
    const { asFragment } = render(<BlogNavigation />);

    expect(asFragment()).toMatchSnapshot();
  });
});
