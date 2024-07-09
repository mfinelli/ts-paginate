import { expect, test } from "vitest";
import { paginate } from "./index";

test("pagination", () => {
  expect(paginate(1, 1)).toStrictEqual([1]);
  expect(paginate(2, 1)).toStrictEqual([1, 2]);
  expect(paginate(3, 1)).toStrictEqual([1, 2, 3]);
  expect(paginate(4, 1)).toStrictEqual([1, 2, 3, 4]);
  expect(paginate(5, 1)).toStrictEqual([1, 2, 3, 4, 5]);
  expect(paginate(6, 1)).toStrictEqual([1, 2, 3, 4, 5, 6]);
  expect(paginate(7, 1)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  expect(paginate(8, 1)).toStrictEqual([1, 2, 3, 4, 5, "...", 8]);
  expect(paginate(9, 1)).toStrictEqual([1, 2, 3, 4, 5, "...", 9]);
  expect(paginate(10, 1)).toStrictEqual([1, 2, 3, 4, 5, "...", 10]);
  expect(paginate(2, 2)).toStrictEqual([1, 2]);
  expect(paginate(3, 2)).toStrictEqual([1, 2, 3]);
  expect(paginate(4, 2)).toStrictEqual([1, 2, 3, 4]);
  expect(paginate(5, 2)).toStrictEqual([1, 2, 3, 4, 5]);
  expect(paginate(6, 2)).toStrictEqual([1, 2, 3, 4, 5, 6]);
  expect(paginate(7, 2)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  expect(paginate(8, 2)).toStrictEqual([1, 2, 3, 4, 5, "...", 8]);
  expect(paginate(9, 2)).toStrictEqual([1, 2, 3, 4, 5, "...", 9]);
  expect(paginate(10, 2)).toStrictEqual([1, 2, 3, 4, 5, "...", 10]);
  expect(paginate(3, 3)).toStrictEqual([1, 2, 3]);
  expect(paginate(4, 3)).toStrictEqual([1, 2, 3, 4]);
  expect(paginate(5, 3)).toStrictEqual([1, 2, 3, 4, 5]);
  expect(paginate(6, 3)).toStrictEqual([1, 2, 3, 4, 5, 6]);
  expect(paginate(7, 3)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  expect(paginate(8, 3)).toStrictEqual([1, 2, 3, 4, 5, "...", 8]);
  expect(paginate(9, 3)).toStrictEqual([1, 2, 3, 4, 5, "...", 9]);
  expect(paginate(10, 3)).toStrictEqual([1, 2, 3, 4, 5, "...", 10]);
  expect(paginate(4, 4)).toStrictEqual([1, 2, 3, 4]);
  expect(paginate(5, 4)).toStrictEqual([1, 2, 3, 4, 5]);
  expect(paginate(6, 4)).toStrictEqual([1, 2, 3, 4, 5, 6]);
  expect(paginate(7, 4)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  expect(paginate(8, 4)).toStrictEqual([1, 2, 3, 4, 5, "...", 8]);
  expect(paginate(9, 4)).toStrictEqual([1, 2, 3, 4, 5, "...", 9]);
  expect(paginate(10, 4)).toStrictEqual([1, 2, 3, 4, 5, "...", 10]);
  expect(paginate(5, 5)).toStrictEqual([1, 2, 3, 4, 5]);
  expect(paginate(6, 5)).toStrictEqual([1, 2, 3, 4, 5, 6]);
  expect(paginate(7, 5)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  expect(paginate(8, 5)).toStrictEqual([1, "...", 4, 5, 6, 7, 8]);
  expect(paginate(9, 5)).toStrictEqual([1, "...", 4, 5, 6, "...", 9]);
  expect(paginate(10, 5)).toStrictEqual([1, "...", 4, 5, 6, "...", 10]);
  expect(paginate(6, 6)).toStrictEqual([1, 2, 3, 4, 5, 6]);
  expect(paginate(7, 6)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  expect(paginate(8, 6)).toStrictEqual([1, "...", 4, 5, 6, 7, 8]);
  expect(paginate(9, 6)).toStrictEqual([1, "...", 5, 6, 7, 8, 9]);
  expect(paginate(10, 6)).toStrictEqual([1, "...", 5, 6, 7, "...", 10]);
  expect(paginate(7, 7)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  expect(paginate(8, 7)).toStrictEqual([1, "...", 4, 5, 6, 7, 8]);
  expect(paginate(9, 7)).toStrictEqual([1, "...", 5, 6, 7, 8, 9]);
  expect(paginate(10, 7)).toStrictEqual([1, "...", 6, 7, 8, 9, 10]);
  expect(paginate(8, 8)).toStrictEqual([1, "...", 4, 5, 6, 7, 8]);
  expect(paginate(9, 8)).toStrictEqual([1, "...", 5, 6, 7, 8, 9]);
  expect(paginate(10, 8)).toStrictEqual([1, "...", 6, 7, 8, 9, 10]);
  expect(paginate(9, 9)).toStrictEqual([1, "...", 5, 6, 7, 8, 9]);
  expect(paginate(10, 9)).toStrictEqual([1, "...", 6, 7, 8, 9, 10]);
  expect(paginate(10, 10)).toStrictEqual([1, "...", 6, 7, 8, 9, 10]);
  expect(paginate(12, 6)).toStrictEqual([1, "...", 5, 6, 7, "...", 12]);
});
