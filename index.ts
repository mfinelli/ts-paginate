/**!
 * Copyright (c) 2024 Mario Finelli
 * This file is part of ts-paginate, distributed under the terms of the MIT
 * License, see the LICENSE file for details.
 */

export type Gap = "...";

export function paginate(pages: number, current: number): Array<number | Gap> {
  const size = 7;

  if (size >= pages) {
    const view: Array<number> = [];
    for (let i = 1; i <= pages; i++) {
      view.push(i);
    }
    return view;
  }

  const view: Array<number | Gap> = [];
  const left = Math.floor((size - 1) / 2.0);
  let start: number;

  if (current <= left) {
    start = 1;
  } else if (current > pages - size + left) {
    start = pages - size + 1;
  } else {
    start = current - left;
  }

  for (let i = start; i < start + size; i++) {
    view.push(i);
  }

  if (view[0] !== 1) {
    view[0] = 1;
  }

  if (view[1] !== 2) {
    view[1] = "...";
  }

  if (view[1] !== 2) {
    view[1] = "...";
  }

  if (view[view.length - 2] !== pages - 1) {
    view[view.length - 2] = "...";
  }

  if (view[view.length - 1] !== pages) {
    view[view.length - 1] = pages;
  }

  return view;
}
