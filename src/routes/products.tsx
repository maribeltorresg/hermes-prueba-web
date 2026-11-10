import { createFileRoute, Link } from "@tanstack/react-router";
import { getProducts } from "#/utils";

export const Route = createFileRoute("/products")({
  component: RouteComponent,
  loader: async () => {
    const products = await getProducts();
    return { products };
  },
});

function RouteComponent() {
  const { products } = Route.useLoaderData();
  return (
    <div>
      <h1>Products:</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to="/product/$id" params={{ id: product.id }}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
