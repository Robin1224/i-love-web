import { writable } from "svelte/store";

export const tileData = writable(
  {
    rows: 0,
    columns: 0,
    size: 0,
  }
);
