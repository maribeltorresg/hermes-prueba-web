import { createServerFn } from "@tanstack/react-start";

export const getProducts = createServerFn().handler(async () => {
  return [
    { id: "1", name: "Football" },
    { id: "2", name: "Hat" },
    { id: "3", name: "Cool Shoes" },
  ];
});
