import { expect, test } from "vitest";
import { paginate } from "./index";

test("pagination", () => {
  expect(paginate()).toBe(2);
});
