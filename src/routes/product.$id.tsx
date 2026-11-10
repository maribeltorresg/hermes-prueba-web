import { createFileRoute } from "@tanstack/react-router";
import { getProducts } from "#/utils";

export const Route = createFileRoute("/product/$id")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const { id } = params;
    const products = await getProducts();
    return products.find((product) => product.id === id);
  },
});

function RouteComponent() {
  const product = Route.useLoaderData();
  return (
    product && (
      <>
        <div>Product ID: {product.id}</div>
        <div>Product Name: {product.name}</div>
      </>
    )
  );
}
